
import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import { Typography } from '@material-ui/core';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import makeBlockie from 'ethereum-blockies-base64';
import SettingsIcon from '@material-ui/icons/Settings';

import CircleButton from 'components/UI/Buttons/CircleButton';
import RadiusButton from 'components//RadiusButton';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: theme.spacing(1)
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
            flexDirection: 'row'
        },
        display: 'flex',
        width: '100%',
        // justifyContent: 'center',
        alignItems: 'center'
    },
    avatar: {
        margin: theme.spacing(0, 1)
    }
}));

const WalletDetailLogo = ({ history, chainId, account, setIsWalletDialog, ethBalance, walletInfo }) => {
    const classes = useStyles();
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('330'));
    const accountSwitchingHandler = () => {
        setIsWalletDialog(true)
    }

    return (
        <div className={classes.root}>
            <div className={classes.accountName} >
                <Avatar src={makeBlockie(account)} className={classes.avatar} />
                <Typography variant='h6' component='div' color='textSecondary' style={{ display: 'flex', justifyContent: 'center' }}>
                    {account?.slice(0, 5) + '...' + account?.slice(account?.length - 5, account?.length)}
                </Typography>
            </div>
        </div>
    );
};

export default withRouter(WalletDetailLogo);
