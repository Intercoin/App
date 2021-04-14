
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
    avatarContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        marginBottom: theme.spacing(1)
    },
    large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
        marginRight: theme.spacing(1)
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

const WalletDetailLogo = ({ history, chainId, account, setIsWalletDialog, ethBalance, walletInfo }) => {
    const classes = useStyles();
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('330'));
    const accountSwitchingHandler = () => {
        setIsWalletDialog(true)
    }

    return (
        <div className={classes.root}>
            <div className={classes.avatarContainer}>
                <Avatar src={walletInfo?.logo} variant='square' className={classes.large} />
                <Typography variant='h6'> {walletInfo?.title} </Typography>
            </div >
            <div className={classes.accountName} >
                {/* <Typography
                    component='div' variant={matches ? 'body1' : 'h6'}
                    color='textSecondary' style={{ paddingRight: 4 }} >
                    Kevin Jin's Main Wallet
                </Typography> */}
                <RadiusButton onClick={accountSwitchingHandler} variant='outlined'>
                    <Typography component='div' style={{ display: 'flex', justifyContent: 'center' }}>
                        {account?.slice(0, 8) + '...' + account?.slice(account?.length - 6, account?.length)}
                        <SettingsIcon fontSize='small' style={{ marginLeft: 4 }} />
                    </Typography>
                </RadiusButton>
                {/* <Typography variant='body1' noWrap>
                    {ethBalance} (ETH)
                </Typography> */}
            </div>
        </div>
    );
};

export default withRouter(WalletDetailLogo);
