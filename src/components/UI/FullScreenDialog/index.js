
import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import Avatar from '@material-ui/core/Avatar';

import CircleButton from 'components/UI/Buttons/CircleButton';
import RoleTagDialog from 'components/UI/RoleTagDialog';
import RoleIcon from 'components/Icons/RoleIcon';
import LabelIcon from 'components/Icons/LabelIcon';
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
  paperBody: {
    backgroundColor: theme.palette.background.main
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
  const [isDialog, setIsDialog] = useState('');
  const [communityStats, setCommunityStats] = useState()

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


  useEffect(() => {
    setCommunityStats(comunityInfo)
  }, [comunityInfo])

  return (
    <>
      <Dialog classes={{ paperScrollBody: classes.paperBody }} disableEnforceFocus fullScreen open={open} onClose={onClose} scroll={'body'} TransitionComponent={Transition}>
        <AppBar className={classes.appBar}>
          <Toolbar className={classes.toolbar}>
            <div className={classes.titleContainer}>
              <Avatar variant='square' src={comunityInfo?.logoUrl || '/assets/images/logos/value-exchange_200w.png'} />
              <Typography style={{ marginLeft: 8 }} variant='h5'> {comunityInfo && comunityInfo[0]} </Typography>
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
                style={{ display: 'flex', backgroundColor: '#292C40' }} icon={<RoleIcon style={{ color: '#fff' }} fontSize='large' />} />
              <Typography variant='h6'>All Roles </Typography>
            </div>
            <div className={classes.buttonContainer}>
              <CircleButton onClick={() => onClickHandler('Tags')}
                style={{ display: 'flex', backgroundColor: '#292C40' }} icon={<LabelIcon style={{ color: '#fff' }} fontSize='large' />} />
              <Typography variant='h6'>All Tags </Typography>
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