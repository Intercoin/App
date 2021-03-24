
import React, { useEffect, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { AppContext } from 'contexts';

import CardWrapper from 'hoc/CardWrapper';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  }
}));

const Contests = () => {
  const classes = useStyles();
  const { setLoadingInfo, account } = useContext(AppContext);
  // eslint-disable-next-line react-hooks/exhaustive-deps

  return (
    <div className={classes.root}>
      <CardWrapper title={'Intercoin Contests'}>
        <div style={{ display: 'flex', width: '100%', height: '100%', alignItems: 'center', justifyItems: 'center' }}>
          <Typography variant='h6'> Coming Soon! </Typography>
        </div>
      </CardWrapper>
    </div>
  );
};

export default Contests;
