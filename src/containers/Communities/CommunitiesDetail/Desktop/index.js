
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import DetailContext from 'containers/Communities/CommunitiesDetail/DetailContext';

const useStyles = makeStyles(theme => ({
  tabHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end'
  },
  button: {
    backgroundColor: theme.custom.palette.green
  }
}));

const Desktop = ({ communityDetailData }) => {
  const classes = useStyles();
  // eslint-disable-next-line react-hooks/exhaustive-deps

  return (
      <DetailContext communityDetailData={communityDetailData} />
  );
};

export default Desktop;
