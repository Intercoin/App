
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typograhpy from '@material-ui/core/Typography';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import Avatar from '@material-ui/core/Avatar';
import AppsIcon from '@material-ui/icons/Apps';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';

import CircleButton from 'components/UI/Buttons/CircleButton';
import RoleTagDialog from 'components/UI/RoleTagDialog';
import { roleData } from 'utils/helper/mockupData';
import { tagData } from 'utils/helper/mockupData';

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: theme.palette.background.default,
    position: 'fixed',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomBar: {
    [theme.breakpoints.up('md')]: {
      display: 'none'
    },
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    top: 'auto',
    bottom: 0,
    backgroundColor: theme.palette.background.default
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  toolbar: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between'
  },
  titleContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  }
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const FullScreenDialog = ({ open, onClose, comunityInfo, children }) => {
  const classes = useStyles();
  const [isDialog, setIsDialog] = useState('')

  const openCloseDialogHandler = show => () => {
    setIsDialog(show);
  }

  const onClickHandler = (string) => {
    setIsDialog(string)
  }

  const filteringData = (title) => {
    switch (title) {
      case 'Roles':
        return roleData;
      case 'Tags':
        return tagData;
      default:
        return roleData;
    }
  }

  return (
    <>
      <Dialog fullScreen open={open} onClose={onClose} scroll={'body'} TransitionComponent={Transition}>
        <AppBar className={classes.appBar}>
          <Toolbar className={classes.toolbar}>
            <div className={classes.titleContainer}>
              {comunityInfo?.logoUrl && <Avatar variant='square' src={comunityInfo.logoUrl} />}
              <Typograhpy style={{ marginLeft: 8 }} variant='h5'> {comunityInfo?.communityTitle} </Typograhpy>
            </div>
            <CircleButton style={{ display: 'flex', backgroundColor: '#292C40' }}
              icon={<CloseIcon onClick={onClose} style={{ color: '#fff' }} fontSize='large' />} />
          </Toolbar>
        </AppBar>
        {children}
        <AppBar position="fixed" className={classes.bottomBar}>
          <Toolbar className={classes.toolbar}>
            <div className={classes.buttonContainer}>
              <CircleButton onClick={() => onClickHandler('Roles')}
                style={{ display: 'flex', backgroundColor: '#292C40' }} icon={<AppsIcon style={{ color: '#fff' }} fontSize='large' />} />
              <Typograhpy variant='h6'>All Roles </Typograhpy>
            </div>
            <div className={classes.buttonContainer}>
              <CircleButton onClick={() => onClickHandler('Tags')}
                style={{ display: 'flex', backgroundColor: '#292C40' }} icon={<LabelImportantIcon style={{ color: '#fff' }} fontSize='large' />} />
              <Typograhpy variant='h6'>All Tags </Typograhpy>
            </div>
          </Toolbar>
        </AppBar>
      </Dialog>
      {isDialog &&
        <RoleTagDialog
          title={isDialog}
          open={true}
          onClose={openCloseDialogHandler('')}
          dataList={filteringData(isDialog)} />}
    </>
  );
}

export default FullScreenDialog