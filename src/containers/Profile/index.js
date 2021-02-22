
import React, { useEffect, useContext, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppContext } from 'contexts';
import { withRouter } from 'react-router-dom';
import Grid from "@material-ui/core/Grid";
import Card from '@material-ui/core/Card';
import { Typography } from '@material-ui/core';

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
    paddingLeft: theme.spacing(1.5)
  }
}));

const Profile = ({ history }) => {
  const classes = useStyles();
  const { account, setLoadingInfo } = useContext(AppContext);
  const [filterValue, setFilterValue] = useState("");
  const [contactBoard, setContactBoard] = useState()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    setLoadingInfo(true);
    setTimeout(() => {
      setLoadingInfo(false);
    }, 2000);
  }, [setLoadingInfo]);

  return (
    <div className={classes.root}>
      <CardWrapper >
        <div>
          <Grid container spacing={2} className={classes.container} >
            <IntercoinAvatarBox />
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
          <Card className={classes.card}>
            <Typography>
              Contact someone!
              </Typography>
          </Card>
        </Grid>
      }
    </div>
  );
};

export default withRouter(Profile);
