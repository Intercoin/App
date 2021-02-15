
import React, { useCallback, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

import DialogWrapper, { dialogStyles } from 'hoc/DialogWrapper';
import ContainedButton from 'components/UI/Buttons/ContainedButton';
import { MemoizedOutlinedTextField } from 'components/UI/OutlinedTextField';

const useStyles = makeStyles(theme => ({
  actionButton: {
    backgroundColor: theme.custom.palette.darkRed,
    minWidth: theme.spacing(12),
    border: 'none'
  },
  rangeContainer: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  dialogActions: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: theme.spacing(3),
    marginRight: -theme.spacing(2 / 8)
  },
  titleLine: {
    marginBottom: theme.spacing(2.5)
  },
  fileDropZone: {
    height: 96,
    minHeight: 'unset'
  }
}));

const OptionDialog = ({ open, onClose, headerTitle }) => {
  const classes = useStyles();
  const dialogClasses = dialogStyles();

  const [state, setState] = useState({});

  const onFormSubmit = async (ev) => {
    ev.preventDefault()
    onClose();
  }

  const inputChangeHandler = useCallback(event => {
    const { name, value } = event.target;
    setState(prevState => ({
      ...prevState, [name]: value
    }));
  }, []);

  return (
    <DialogWrapper open={open} onClose={onClose} smallWidth >
      <form onSubmit={onFormSubmit} >
        <div className={dialogClasses.root}>
          <Typography variant='h6' className={classes.titleLine}>{headerTitle}</Typography>
          <Grid container spacing={2}>
            <Grid md={12} xs={12} item>
              <MemoizedOutlinedTextField
                placeholder={'Enter Question'}
              />
            </Grid>
            <Grid style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }} md={12} xs={12} item>
              <Grid md={5} xs={12} item>
                <Typography component='div' variant='h6'>
                  Values can range
                </Typography>
              </Grid>
              <Grid md={4} xs={12} item>
                <MemoizedOutlinedTextField
                  name='from'
                  prefix='from:'
                  type='number'
                  placeholder='From'
                  value={state.from || 0}
                  onChange={inputChangeHandler}
                />
              </Grid>
              <div style={{ width: '8px' }}></div>
              <Grid md={3} xs={12} item>
                <MemoizedOutlinedTextField
                  name='to'
                  prefix='to:'
                  type='number'
                  placeholder='to'
                  value={state.to || 0}
                  onChange={inputChangeHandler}
                />
              </Grid>
            </Grid>
            <Grid md={12} xs={12} item>
              <MemoizedOutlinedTextField
                placeholder={'Internal Name'}
              />
            </Grid>
          </Grid>
          <div className={classes.dialogActions}>
            <ContainedButton className={classes.actionButton} type="submit">
              Create Option
            </ContainedButton>
          </div>
        </div>
      </form>
    </DialogWrapper>
  );
}

export default OptionDialog;
