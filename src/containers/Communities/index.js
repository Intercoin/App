
import React, { useEffect, useContext, useState } from 'react';
import { AppContext } from 'contexts';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid";
import Card from '@material-ui/core/Card';
import AddIcon from '@material-ui/icons/Add';
import { useHistory } from "react-router-dom";
import { Contract } from '@ethersproject/contracts'
import { useQuery } from 'react-query';

import CardWrapper from 'hoc/CardWrapper';
import CircleButton from 'components/UI/Buttons/CircleButton';
import { communityData } from 'utils/helper/mockupData';
import IntercoinCard from 'components/IntercoinCard';
import { PAGES } from 'utils/links/pages';
import { isEmpty } from 'utils/utility';
import CommunityContract from 'contracts/CommunityContract';
import AddCommunityDialog from 'components/UI/AddCommunityDialog';
import { conversionToDollar } from 'services/conversion';

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
  const [isDialog, setIsDialog] = useState(false);
  const history = useHistory();
  const params = {
    fsym: 'ETH',
    tsyms: 'USD'
  };
  const { data: conversionCurrency, isLoading: pageLoading } = useQuery(['conversionUSD'],
    () => conversionToDollar({ params }));

  const openCloseDialogHandler = show => () => {
    setIsDialog(show);
  }
  useEffect(() => {
    setLoadingInfo(true);
    setTimeout(() => {
      setLoadingInfo(false);
    }, 2000);
  }, [setLoadingInfo]);

  const cardHandler = (id) => {
    if (isEmpty(id)) {
      setIsDialog(true);
    }
    else {
      history.push({
        pathname: `${PAGES.COMMUNITIES.url}/address`,
        state: communityData[id]
      })
    }
  }

  const creatNewCommunityHandler = (title, image, ticker) => {

    console.log('kevin ===> title, image, ticker===>', title, image, ticker)

    if (isEmpty(title) || isEmpty(title) || !chainId || !CommunityContract.networks || !CommunityContract.networks[chainId]) {
      return null
    }
    const ico = isEmpty(image) ? ["data:image/png;base64", ""] : image.split(',')

    const communityContract = new Contract(CommunityContract.networks[chainId].address, CommunityContract.abi, library.getSigner(account));
    communityContract?.setSettings(title, ico, ticker);
    setIsDialog(false);
  }

  return (
    <div className={classes.root}>
      <CardWrapper >
        <Grid container spacing={2} className={classes.container} >
          {
            communityData.map((community, index) => {

              return (
                <IntercoinCard
                  key={index}
                  selectedCard={''}
                  id={index}
                  imageUrl={community.logoUrl}
                  content={community.communityTitle}
                  subContent={community.role}
                  detail={community.personalInfo}
                  value={community.tokenAmount}
                  cardHandler={cardHandler} RoleTagDialog
                />
              )
            })
          }
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card className={classes.card} onClick={() => cardHandler()}>
              <CircleButton
                style={{ marginLeft: 4, backgroundColor: '#292C40' }}
                icon={<AddIcon style={{ color: "#fff", width: 32, height: 32 }} fontSize={'large'} />} />
              <Typography variant='h6'> Start a Community </Typography>
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
    </div>
  );
};

export default Communities;
