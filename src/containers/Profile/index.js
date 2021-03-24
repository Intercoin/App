
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
import { formatEther } from '@ethersproject/units'
import Drawer from '@material-ui/core/Drawer';

import CardWrapper from 'hoc/CardWrapper';
import IntercoinAvatarBox from 'components/IntercoinAvatarBox';
import IntercoinTabContainer from 'components/IntercoinTabContainer';
import RecentTransactions from './RecentTransactions';
import Information from './Information';
import Schedule from './Schedule';
import Interest from './Interest';
import QrCode from './QrCode';
import Currency from './Currency';
import { transactionData } from 'utils/helper/mockupData';
import { isEmpty } from 'utils/utility';
import { ProfileTabList } from 'constants/InterCoinTabList';

const drawerWidth = 360;
const useStyles = makeStyles(theme => ({
  root: {
    height: '100%'
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
    width: drawerWidth - theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
    [theme.breakpoints.down('md')]: {
      margin: theme.spacing(0, 2.5, 0, 4),
    },
    margin: theme.spacing(0, 7.5, 0, 4),
    // padding: `${theme.spacing(-4, 0, -4, 0)} !important`
  },
  card: {
    backgroundColor: theme.palette.background.default,
    display: 'flex',
    width: "100%",
    marginRight: theme.spacing(3),
    minHeight: `calc(100vh - ${theme.custom.layout.topAppBarHeight + theme.custom.layout.footerHeight + theme.custom.layout.topAppBarHeight}px)`,
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
  },
  drawer: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
    width: '100%',
    flexShrink: 0,
  },
  drawerPaper: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
    // width: drawerWidth,
    border: 'none',
    height: `100%`,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    // marginTop : 30
  },

  contentShift: {
    [theme.breakpoints.up('sm')]: {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen
      }),
      marginRight: drawerWidth
    },
  }
}));

const Profile = ({ history }) => {
  const classes = useStyles();
  const { account, chainId, setLoadingInfo, setIsWalletDialog, balance } = useContext(AppContext);
  const [filterValue, setFilterValue] = useState(0);
  const [contactBoard, setContactBoard] = useState();
  // console.log('kevin getting the account balance===>',account, balance && formatEther(balance),context ) //TODO show the account balance
  const ethBalance = balance && formatEther(balance);

  const closeHandler = () => {
    setContactBoard()
  }

  const tabContentFilter = (tabId) => {
    switch (tabId) {
      case 0:
        return (
          <RecentTransactions
            contactBoard={contactBoard}
            setContactBoard={setContactBoard}
            transactionData={transactionData} />);
      case 1:
        return <Information />;
      case 2:
        return <Schedule />;
      case 3:
        return <Interest />;
      case 4:
        return <QrCode />;
      case 5:
        return <Currency />;
    }
  }

  return (
    <>
      <div className={classes.root}>
        <CardWrapper >
          <div className={contactBoard && classes.contentShift}>
            <Grid container spacing={2} className={classes.container} >
              <IntercoinAvatarBox
                ethBalance={ethBalance}
                account={account}
                chainId={chainId}
                setIsWalletDialog={setIsWalletDialog}
              />
              <IntercoinTabContainer
                setFilterValue={setFilterValue}
                TabList={ProfileTabList}
              />
              {tabContentFilter(filterValue)}

            </Grid>
          </div>
        </CardWrapper>

        {/* {!isEmpty(contactBoard) &&
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
      } */}
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="right"
          open={isEmpty(contactBoard) ? false : true}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          {!isEmpty(contactBoard) &&
            <Grid className={classes.additionalGrid}>
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
        </Drawer>
      </div>
    </>
  );
};

export default withRouter(Profile);
