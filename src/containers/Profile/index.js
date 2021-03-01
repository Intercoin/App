
import React, { useEffect, useContext, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppContext } from 'contexts';
import { withRouter } from 'react-router-dom';
import Grid from "@material-ui/core/Grid";
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import { Typography } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from 'components/Icons/CloseIcon';
import TextField from '@material-ui/core/TextField';

import CardWrapper from 'hoc/CardWrapper';
import IntercoinAvatarBox from 'components/IntercoinAvatarBox';
import IntercoinTabContainer from 'components/IntercoinTabContainer';
import RecentTransactions from './RecentTransactions';
import { transactionData } from 'utils/helper/mockupData';
import { isEmpty } from 'utils/utility';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    height: '100%',
    width: '100%',
    justifyContent: 'center',
  },
  container: {
    [theme.breakpoints.down('sm')]: {
      padding: 0
    },
    display: 'flex',
    margin: -8,
    flexGrow: 1,
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  additionalGrid: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
    margin: theme.spacing(2),
  },
  card: {
    backgroundColor: theme.palette.background.default,
    display: 'flex',
    width: "100%",
    minHeight: `calc(100vh - ${theme.custom.layout.topAppBarHeight + theme.custom.layout.footerHeight}px)`,
    flexDirection: 'column',
    justifyContent: 'space-between',
    cursor: 'pointer',
    borderRadius: 20,
    borderColor: 'red',
    boxShadow: `0 1px 6px 0 ${theme.palette.text.notification}`,
    padding: theme.spacing(1.5)
  },
  input: {
    width: 'calc(100% - 45px)',
    borderRadius: theme.spacing(.3),
    '& .MuiOutlinedInput-multiline': {
      padding: theme.spacing(1),
      color: theme.palette.text.primary,
    }
  },
  send: {
    cursor: 'pointer',
    fontSize: 14,
    fontWeight: 'bold',
    marginLeft: theme.spacing(1),
    color: theme.palette.text.hoverText
  },
  chatActionContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  cardHeader: {
    borderBottom: '0.5px solid #fff'
  }
}));

const Profile = ({ history }) => {
  const classes = useStyles();
  const { account, chainId, setLoadingInfo, setIsWalletDialog } = useContext(AppContext);
  const [filterValue, setFilterValue] = useState("");
  const [contactBoard, setContactBoard] = useState();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    setLoadingInfo(true);
    setTimeout(() => {
      setLoadingInfo(false);
    }, 2000);
  }, [setLoadingInfo]);

  const closeHandler = () => {
    setContactBoard()
  }

  return (
    <div className={classes.root}>
      <CardWrapper >
        <div>
          <Grid container spacing={2} className={classes.container} >
            <IntercoinAvatarBox
              account={account}
              chainId={chainId}
              setIsWalletDialog={setIsWalletDialog}
            />
            <IntercoinTabContainer setFilterValue={setFilterValue} />
            {
              transactionData.map((transaction, index) => {

                return (
                  <RecentTransactions
                    key={index}
                    id={index}
                    contactBoard={contactBoard}
                    setContactBoard={setContactBoard}
                    transaction={transaction} />
                )
              })
            }
          </Grid>
        </div>
      </CardWrapper>
      {!isEmpty(contactBoard) &&
        <Grid className={classes.additionalGrid} item xs={12} sm={12} md={6} lg={4}>
          <Card className={classes.card} >
            <CardHeader
              className={classes.cardHeader}
              title={`${transactionData[contactBoard].sender} ⇔ ${transactionData[contactBoard].receiver} `}
              action={
                <IconButton aria-label="settings">
                  <CloseIcon onClick={closeHandler} style={{ color: '#fff' }} />
                </IconButton>
              }>
            </CardHeader>
            <div className={classes.chatActionContainer}>
              <TextField
                className={classes.input}
                multiline
                rows='2'
                variant='outlined'
                style={{ border: '0.5px solid #8D9BD4' }}
              />
              <Typography
                className={classes.send}
                color='textSecondary'
              >
                SEND
            </Typography>
            </div>
          </Card>
        </Grid>
      }
    </div>
  );
};

export default withRouter(Profile);
