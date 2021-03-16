
import React, { useEffect } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
// import CloseIcon from 'components/Icons/CloseIcon';
import CircleButton from 'components/UI/Buttons/CircleButton';
import CloseIcon from '@material-ui/icons/Close';
import LAYER from 'constants/z-index';
import CheckIcon from '@material-ui/icons/Check';
import Dialog from '@material-ui/core/Dialog';


const useStyles = makeStyles(theme => ({
  overlay: {
    position: 'fixed',
    left: 0,
    top: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: theme.palette.background.overlay,
    zIndex: LAYER.DIALOG_OVERLAY
  },
  rect: {
    position: 'fixed',
    transform: 'translate(-50%, -50%)',
    left: '50%',
    top: '50%',
    width: `calc(100% - ${theme.spacing(4)}px)`,
    padding: `${theme.spacing(3.5)}px ${theme.spacing(3)}px`,
    background: theme.palette.primary.darkLight,
    boxShadow: theme.shadows[10],
    borderRadius: theme.spacing(3 / 8),
    [theme.breakpoints.up('sm')]: {
      width: 660
    },
    zIndex: LAYER.DIALOG_MAIN
  },
  smallRect: {
    [theme.breakpoints.up('sm')]: {
      width: '500'
    }
  },
  closeIcon: {
    cursor: 'pointer',
    position: 'absolute',
    // width: theme.spacing(2),
    // height: theme.spacing(2),
    top: theme.spacing(2),
    right: theme.spacing(2)
  }
}));

export const dialogStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  center: {
    alignItems: 'center',
    textAlign: 'center'
  },
}));

const DialogWrapper = ({ open, onClose, smallWidth, isCheckIcon, children }) => {
  const classes = useStyles();
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    }
    else {
      document.body.style.overflow = 'unset';
    }
  }, [open])

  if (!open) {
    return null;
  }

  return (
    <>
      <div className={clsx(classes.overlay, 'animated fadeIn')} onClick={onClose} />
      <div className={clsx(classes.rect, smallWidth && classes.smallRect)}>
        {children}
        <CircleButton className={classes.closeIcon} onClick={onClose}
          style={{ display: 'flex', backgroundColor: isCheckIcon ? '#4caf50' : '#292C41' }}
          icon={isCheckIcon
            ? <CheckIcon style={{ color: '#fff' }} fontSize='default' />
            : <CloseIcon style={{ color: '#fff' }} fontSize='default' />} />
      </div>
    </>
  );
};

export default DialogWrapper;