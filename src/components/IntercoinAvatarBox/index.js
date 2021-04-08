
import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import { Typography } from '@material-ui/core';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import makeBlockie from 'ethereum-blockies-base64';

import CircleButton from 'components/UI/Buttons/CircleButton';
import RadiusButton from 'components//RadiusButton';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: theme.spacing(1)
  },
  avatarContainer: {
    display: 'flex',
    flexDirection: 'row'
  },
  large: {
    width: theme.spacing(9),
    height: theme.spacing(9),
  },
  nameContainer: {
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    },
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
    backgroundColor: theme.palette.background.default,
    color: theme.palette.text.secondary,
    '&:hover': {
      backgroundColor: `${theme.palette.text.secondary}60`,
      transform: 'translateY(-1px)'
    }
  },
  accountName: {
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column'
    },
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
}));

const Profile = ({ history, chainId, account, setIsWalletDialog, ethBalance }) => {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('330'));
  const accountSwitchingHandler = () => {
    setIsWalletDialog(true)
  }

  return (
    <div className={classes.root}>
      <div className={classes.avatarContainer}>
        <Avatar src={makeBlockie(account)} className={classes.large} />
        <div className={classes.nameContainer}>
          <Typography>Kevin </Typography>
          <Typography>Jin</Typography>
          
          
        </div>
      </div >
      <div className={classes.accountName} >
        <Typography
          component='div' variant={matches ? 'body1' : 'h6'}
          color='textSecondary' style={{ paddingRight: 4 }} >
             Kevin Jin's Main Wallet
        </Typography>
        <RadiusButton onClick={accountSwitchingHandler} variant='outlined'>
          <Typography>
            {account?.slice(0, 9) + '...' + account?.slice(account?.length - 6, account?.length)}
          </Typography>
        </RadiusButton>
        <Typography variant = 'body1' noWrap>
        {ethBalance} (ETH)
        </Typography>
      </div>
      <div className={classes.contactContainer}>
        <CircleButton icon={<PhoneIphoneIcon />} className={classes.iconColor} />
        <CircleButton icon={<MailOutlineIcon />} className={classes.iconColor} />
      </div>
    </div>
  );
};

export default withRouter(Profile);
