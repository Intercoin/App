
import React, { useEffect, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid";
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

const Communities = () => {
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
      <CardWrapper >
        <Grid container spacing={2} className={classes.container} >

          {/* {
            transactionData.map((transaction, index) => {

              return (
                <div>
                </div>
              )
            })
          } */}
        </Grid>
      </CardWrapper>
    </div>
  );
};

export default Communities;
