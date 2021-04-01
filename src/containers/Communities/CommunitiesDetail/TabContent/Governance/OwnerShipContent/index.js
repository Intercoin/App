
import React from 'react';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Grid, Typography } from '@material-ui/core';

import AddIcon from '@material-ui/icons/Add';
import CircleButton from 'components/UI/Buttons/CircleButton';
import { MemoizedOutlinedTextField } from 'components/UI/OutlinedTextField';

const useStyles = makeStyles(theme => ({
  root: {},
  gridContainer: {
    [theme.breakpoints.down('sm')]: {
      width: '100%'
    },
    width: theme.spacing(97)
  },
  textGrid: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
}));

const OwnerShipContent = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isSM = useMediaQuery(theme.breakpoints.down('sm'), {
    defaultMatches: true,
  });

  return (
    <Grid classes={{ root: classes.gridContainer }} container direction={"column"} justify="center" alignItems='center' spacing={1}  >
      <Grid xs={12} container item justify={"space-between"} style={{ marginBottom: theme.spacing(1) }} >
        <Grid item xs={'auto'} item style={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant={isSM ? 'body1' : 'h6'} noWrap >At least </Typography>
        </Grid>
        <Grid xs={2} container item alignItems='center' justify='center'>
          <MemoizedOutlinedTextField
          />
        </Grid>
        <Grid item xs={'auto'} className={classes.textGrid}>
          <Typography variant={isSM ? 'body1' : 'h6'} >and </Typography>
        </Grid>
        <Grid xs={3} container item justify='center'>
          <MemoizedOutlinedTextField
            endAdornment={'%'}
          />
        </Grid>
        <Grid item xs={'auto'} className={classes.textGrid}  >
          <Typography variant={isSM ? 'body1' : 'h6'} >of </Typography>
        </Grid>
        <Grid xs={3} container item justify='center'><MemoizedOutlinedTextField />  </Grid>
      </Grid>
      <Grid xs={12} container item justify={"space-between"} >
        <Grid item xs={'auto'} item style={{ display: 'flex', alignItems: 'center' }} >
          <Typography variant={isSM ? 'body1' : 'h6'} noWrap >At least </Typography>
        </Grid>
        <Grid xs={2} container item alignItems='center' justify='center' >
          <MemoizedOutlinedTextField />
        </Grid>
        <Grid item xs={'auto'} className={classes.textGrid} >
          <Typography variant={isSM ? 'body1' : 'h6'} >and </Typography>
        </Grid>
        <Grid xs={3} container item justify='center'>
          <MemoizedOutlinedTextField
            endAdornment={'%'} />
        </Grid>
        <Grid item xs={'auto'} className={classes.textGrid}>
          <Typography variant={isSM ? 'body1' : 'h6'} >of </Typography>
        </Grid>
        <Grid xs={3} container item justify='center'><MemoizedOutlinedTextField />  </Grid>
      </Grid>
      <Grid xs={12} container item alignItems='center'>
        <CircleButton
          style={{ backgroundColor: theme.palette.background.default, marginRight: theme.spacing(2) }}
          icon={<AddIcon fontSize={'large'} style={{ color: '#fff', width: 35, height: 35 }} />} />
        <Typography variant='h5' style={{ textDecoration: 'underline', cursor: 'pointer' }}> Add fallback governance</Typography>
      </Grid>
    </Grid>
  );
};

export default OwnerShipContent;
