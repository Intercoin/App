
import React, { useContext, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppContext } from 'contexts';
import { withRouter } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import { Typography } from '@material-ui/core';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  avatarContainer: {
    display: 'flex',
    flexDirection: 'row'
  },
  large: {
    width: theme.spacing(8),
    height: theme.spacing(8),
  },
  nameContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: theme.spacing(1)
  },
  contactContainer: {
    display: 'flex',
    flexDirection: 'column',
    '& .MuiIconButton-root': {
      padding: theme.spacing(.5, 2, .5, 2)

    }
  },
  iconColor: {
    color: theme.palette.text.secondary
  }
}));

const Profile = ({ history }) => {
  const classes = useStyles();
  const { account } = useContext(AppContext);

  return (
    <div className={classes.root}>
      <div className={classes.avatarContainer}>
        <Avatar className={classes.large} />
        <div className={classes.nameContainer}>
          <Typography>Kevin </Typography>
          <Typography>Jin</Typography>
        </div>
      </div>
      <div className={classes.contactContainer}>
        <IconButton className={classes.iconColor}>
          <PhoneIphoneIcon />
        </IconButton>
        <IconButton className={classes.iconColor} >
          <MailOutlineIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default withRouter(Profile);
