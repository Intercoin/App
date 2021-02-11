
import React, { useEffect, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { AppContext } from 'contexts';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: `calc(100vh - ${theme.custom.layout.topAppBarHeight}px)`,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  }
}));

const Home = () => {
  const classes = useStyles();
  const { setLoadingInfo, account } = useContext(AppContext);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    setLoadingInfo(true);
    setTimeout(() => {
      setLoadingInfo(false);
    }, 2000);
  }, [setLoadingInfo]);

  return (
    <div className={classes.root}>
      <Typography variant='h5'>InterCoin Dapp Is Coming Soon! </Typography>
      <Typography variant='h5'>Your Account Address : {account}  </Typography>
    </div>
  );
};

export default Home;
