
import React, { useEffect, useContext, useState } from 'react';
import { AppContext } from 'contexts';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid";
import Card from '@material-ui/core/Card';
import AddIcon from '@material-ui/icons/Add';
import { useHistory, useLocation } from "react-router-dom";
import { useQuery } from 'react-query';
import qs from 'qs';

import CardWrapper from 'hoc/CardWrapper';
import CircleButton from 'components/UI/Buttons/CircleButton';
import { communityData } from 'utils/helper/mockupData';
import IntercoinCard from 'components/IntercoinCard';
import { PAGES } from 'utils/links/pages';
import { isEmpty } from 'utils/utility';
import AddCommunityDialog from 'components/UI/AddCommunityDialog';
import InviteReceiveDialog from 'components/UI/InviteReceiveDialog';
import InvitePrepareDialog from 'components/UI/InvitePrepareDialog';
import { conversionToDollar } from 'services/conversion';
import { useBlockNumber } from 'utils/hooks';
import { communityInstance } from 'services/communityInstance';
import IntercoinLoading from 'components/IntercoinLoading';
import { TrafficRounded } from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
  root: {
    [theme.breakpoints.down('sm')]: {
      paddingBottom: theme.spacing(12)
    },
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  card: {
    backgroundColor: theme.palette.background.default,
    width: "100%",
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    borderRadius: 20,
    borderColor: 'red',
    boxShadow: `0 1px 6px 0 ${theme.palette.background.default}`,
    '&:hover': {
      transform: 'translateY(-5px)',
      transition: `ease-out 0.4s `,
      opacity: '100%'
    },
    transition: 'ease-out 0.4s',
  }
}));

const Communities = () => {
  const classes = useStyles();
  const { setLoadingInfo, account, chainId, library } = useContext(AppContext);
  const history = useHistory();
  const location = useLocation();
  const blockNumber = useBlockNumber(library);
  const community = communityInstance(account, chainId, library);
  const [communityDataList, setCommunityDataList] = useState([]);
  const [communityCreateLoading, setcommunityCreateLoading] = useState(true);
  const [isDialog, setIsDialog] = useState(false);
  const [isInviteReceiveDialog, setIsInviteReceiveDialog] = useState(false);
  const [isInvitePrepareDialog, setIsInvitePrepareDialog] = useState(false);

  const params = {
    fsym: 'ETH',
    tsyms: 'USD'
  };

  const { data: conversionCurrency, isLoading: pageLoading } = useQuery(['conversionUSD'],
    () => conversionToDollar({ params }));

  const openCloseDialogHandler = show => () => {
    setIsDialog(show);
    setIsInviteReceiveDialog(show);
    setIsInvitePrepareDialog(show);
  }

  const cardHandler = (id) => {
    if (isEmpty(id)) {
      setIsDialog(true);
    }
    else {
      history.push({
        pathname: `${PAGES.COMMUNITIES.url}/address`,
        state: communityDataList[id]
      })
    }
  }

  const creatNewCommunityHandler = (title, image, ticker) => {
    if (isEmpty(title) || isEmpty(ticker)) {
      return null
    }
    setcommunityCreateLoading(true)
    const ico = isEmpty(image) ? ["data:image/png;base64", ""] : image.split(',')
    community?.setSettings(title, ["data:image/png;base64", ""], ticker);
    setIsDialog(false);
  }

  useEffect(() => {
    Promise.resolve(community?.getSettings()).then(function (communityData) {
      setCommunityDataList([communityData])
      setcommunityCreateLoading(false)
    }).catch(function (error) {
      console.log('community creating error ===>', error)
      setcommunityCreateLoading(false)
    })

  }, [blockNumber])

  useEffect(() => {
    if (location?.search) {
      if (qs.parse(location.search, { ignoreQueryPrefix: true }).pSig && qs.parse(location.search, { ignoreQueryPrefix: true }).rpSig) {
        setIsInvitePrepareDialog(true);
      }
      else {
        setIsInviteReceiveDialog(true);
      }
    }
  }, [location])

  return (
    <div className={classes.root}>
      <CardWrapper >
        <Grid container spacing={2} className={classes.container} >
          {
            communityDataList.map((community, index) => {

              return (
                <IntercoinCard
                  key={index}
                  selectedCard={''}
                  id={index}
                  imageUrl={community?.logoUrl || '/assets/images/logos/value-exchange_200w.png'}
                  content={community && community[0]}
                  subContent={community?.role || 'owner, manager, developer'}
                  detail={community?.personalInfo || 'member'}
                  value={community?.tokenAmount || 232}
                  cardHandler={cardHandler}
                />
              )
            })
          }
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card className={classes.card} onClick={() => cardHandler()}>
              {communityCreateLoading && <IntercoinLoading wholeOverlay />}
              <CircleButton
                style={{ marginLeft: 4, backgroundColor: '#292C40' }}
                icon={<AddIcon style={{ color: communityCreateLoading ? '#6B76A1' : '#fff', width: 32, height: 32 }} fontSize={'large'} />} />
              <Typography variant='h6' color={communityCreateLoading ? 'textSecondary' : 'inherit'}> {'Start a Community'} </Typography>
            </Card>
          </Grid>
        </Grid>
      </CardWrapper>
      {isDialog &&
        <AddCommunityDialog
          title={'Creating a new Community'}
          open={true}
          ticker={conversionCurrency?.data.USD}
          onClose={openCloseDialogHandler('')}
          creatNewCommunityHandler={creatNewCommunityHandler} />
      }
      {isInviteReceiveDialog &&
        <InviteReceiveDialog
          title={'You were invited!'}
          adminMsg = {qs.parse(location.search, { ignoreQueryPrefix: true }).adminMsg}
          pSig={qs.parse(location.search, { ignoreQueryPrefix: true }).pSig}
          onClose={openCloseDialogHandler('')}
          open={true}
        />
      }
      {isInvitePrepareDialog &&
        <InvitePrepareDialog
          title={'Invite Prepare!'}
          open={true}
          onClose={openCloseDialogHandler('')}
          adminMsg = {qs.parse(location.search, { ignoreQueryPrefix: true }).adminMsg}
          recipientMsg = {qs.parse(location.search, { ignoreQueryPrefix: true }).recipientMsg}
          pSig={qs.parse(location.search, { ignoreQueryPrefix: true }).pSig}
          rpSig={qs.parse(location.search, { ignoreQueryPrefix: true }).rpSig}
        />
      }
    </div>
  );
};

export default Communities;
