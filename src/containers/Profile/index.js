
import React, { useEffect, useContext, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppContext } from 'contexts';
import { withRouter } from 'react-router-dom';
import Grid from "@material-ui/core/Grid";
import Avatar from '@material-ui/core/Avatar';

import CardWrapper from 'hoc/CardWrapper';
import IntercoinAvatarBox from 'components/IntercoinAvatarBox';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    [theme.breakpoints.down('sm')]: {
      padding: 0
    },
    display: 'flex',
    margin: 0,
    flexGrow: 1,
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

const Profile = ({ history }) => {
  const classes = useStyles();
  const { account, setLoadingInfo } = useContext(AppContext);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    setLoadingInfo(true);
    setTimeout(() => {
      setLoadingInfo(false);
    }, 2000);
  }, [setLoadingInfo]);

  return (
    <div className={classes.root}>
      <CardWrapper title={'Profile'} >
        <Grid container spacing={2} className={classes.container} >
          <IntercoinAvatarBox />
        </Grid>
        <Grid container spacing={2} className={classes.container} >
          <Grid item xs={12} sm={6} md={4} lg={3}>
          </Grid>
        </Grid>
      </CardWrapper>
    </div>
  );
};

export default withRouter(Profile);
