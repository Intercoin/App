
import React, { useEffect, useState, useContext } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Typography, useMediaQuery } from '@material-ui/core';
import { AppContext } from 'contexts';

import { communityDetailData } from 'utils/helper/mockupData';
import Desktop from './Desktop';
import Mobile from './Mobile';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  tabHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end'
  },
  button: {
    backgroundColor: theme.custom.palette.green
  }
}));

const CommunitiesDetail = () => {
  const classes = useStyles();
  const theme = useTheme();
  const { setLoadingInfo, account } = useContext(AppContext);
  const isSm = useMediaQuery(theme.breakpoints.down('sm'), {
    defaultMatches: true,
  });
  // eslint-disable-next-line react-hooks/exhaustive-deps

  return (
    <div className={classes.root}>
      {isSm ?
        <Mobile communityDetailData={communityDetailData} />
        :
        <Desktop communityDetailData={communityDetailData} />}
    </div>
  );
};

export default CommunitiesDetail;
