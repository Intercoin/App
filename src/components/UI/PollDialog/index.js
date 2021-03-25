
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import DialogContent from '@material-ui/core/DialogContent';

import DialogWrapper, { dialogStyles } from 'hoc/DialogWrapper';
import ContainedButton from 'components/UI/Buttons/ContainedButton';
import CustomSlider from '../CustomSlider';
import { optionData } from 'utils/helper/mockupData';

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
  },
  dialogContent: {
    [theme.breakpoints.down('xs')]: {
      maxHeight: '340px',
    },
    maxHeight: '460px',
    overflowX: 'unset',
    overflowY: 'scroll',
    '&::-webkit-scrollbar-track': {
      borderRadius: 2,
      backgroundColor: theme.palette.background.default
    },
    '&::-webkit-scrollbar': {
      width: 5,
      backgroundColor: theme.palette.background.default
    },
  },
  sliderContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: theme.spacing(18)
  }
}));
//.slick-list, .slick-track { touch-action:pan-y; } for the unable to preventDefault inside passive event listener warning

const PollDialog = ({ open, onClose, pollData }) => {
  const classes = useStyles();
  const dialogClasses = dialogStyles();

  const [state, setState] = useState({});

  const onFormSubmit = async (ev) => {
    ev.preventDefault()
    onClose();
  }

  return (
    <DialogWrapper open={open} onClose={onClose} smallWidth >
      <form onSubmit={onFormSubmit} >
        <div className={dialogClasses.root}>
          <Typography variant='h6' className={classes.titleLine}>{pollData.title}</Typography>
          <DialogContent dividers className={classes.dialogContent}>
            {optionData.map((option, index) => {

              return (
                <div key={index} className={classes.sliderContainer}>
                  <Typography style={{ fontWeight: '300', marginBottom: 12 }} variant='subtitle2'>{` ( ${index + 1} )  `}   {option.content}</Typography>
                  <CustomSlider
                    value={option.to / 2}
                    from={option.from}
                    to={option.to}
                  />
                </div>
              )
            })}
          </DialogContent>
          <div className={classes.dialogActions}>
            <ContainedButton className={classes.actionButton} type="submit">
              Vote
            </ContainedButton>
          </div>
        </div>
      </form>
    </DialogWrapper>
  );
}

export default PollDialog;
