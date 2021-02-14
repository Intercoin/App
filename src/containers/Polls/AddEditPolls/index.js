import React, { useState, useEffect, useContext, useMemo, useCallback } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import CardWrapper from 'hoc/CardWrapper';
import { MemoizedOutlinedTextField } from 'components/UI/OutlinedTextField';
import ContainedButton from 'components/UI/Buttons/ContainedButton';


const useStyles = makeStyles(theme => ({
  root : {
    display:'flex',
    height : '100%',
    flexDirection:'column',
    justifyContent: 'space-between'
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing(4)
  },
  saveButton: {
    marginTop: theme.spacing(4),
    display: 'flex',
    justifyContent: 'flex-end'
  },
  twoInputs: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    minHeight: 152,
  },
}));

const AddEditPolls = ({ history, location }) => {
  const classes = useStyles();

  const submitHandler = () => {

  }
  const goBack = () => {

  };


  return (
    <CardWrapper title={'Create New Pool'} >
      <div className = {classes.root}>
      <Grid container spacing={3}>
        <Grid md={6} xs={12} item className={classes.uploadPanel}>
        <MemoizedOutlinedTextField 
        placeholder='Enther title of poll'/>
        </Grid>
        <Grid md={6} xs={12} item className={classes.twoInputs}>

        </Grid>
        <Grid md={6} xs={12} item>

        </Grid>
        <Grid md={6} xs={12} item>

        </Grid>
        <Grid md={6} xs={12} item>

        </Grid>
        <Grid md={6} xs={12} item>

        </Grid>
        <Grid md={6} xs={12} item>

        </Grid>
        <Grid md={6} xs={12} item>

        </Grid>

      </Grid>
      <div className={classes.saveButton}>
        <ContainedButton
          variant='outlined'
          disabled={''}
          onClick={goBack}>
          BACK
        </ContainedButton>
        <ContainedButton
          disabled={''}
          onClick={submitHandler}>
          CREATE POLL
        </ContainedButton>
      </div>
      </div>
    </CardWrapper>
  );
};

export default withRouter(AddEditPolls);