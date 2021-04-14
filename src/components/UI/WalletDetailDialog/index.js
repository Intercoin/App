
import React, { useState, useCallback } from 'react';
import Dialog from '@material-ui/core/Dialog';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Typography, useMediaQuery } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import Avatar from '@material-ui/core/Avatar';
import makeBlockie from 'ethereum-blockies-base64';
import SettingsIcon from '@material-ui/icons/Settings';
import { formatEther } from '@ethersproject/units'

import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import IntercoinTabContainer from 'components/IntercoinTabContainer';
import CircleButton from 'components/UI/Buttons/CircleButton';
import { ChainName } from 'constants/Types';
import RadiusButton from 'components//RadiusButton';
import { isEmpty } from 'utils/utility';

const useStyles = makeStyles(theme => ({

    root: {
        height: theme.spacing(70),
        backgroundColor: theme.palette.background.default,
        border: `solid 0.5px ${theme.palette.text.secondary}`,
        margin: theme.spacing(0.5),
        // boxShadow: `1px 1px 2px 0 ${theme.palette.text.notification}`,
        // marginTop : 20,
        // marginBottom : theme.spacing(5),
        // marginTop:theme.spacing(8),
        minWidth: theme.spacing(30),
        borderRadius: '20px',
        [theme.breakpoints.up('md')]: {
            minWidth: theme.spacing(60),
        },
    },
    dialogTitleContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row !important',
        alignItems: 'center'

    },
    dialogActions: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: theme.spacing(3),
        marginRight: -theme.spacing(2 / 8)
    },
    avatar: {
        backgroundColor: 'transparent',
        border: `2px solid ${theme.palette.text.secondary}`,
        height: theme.spacing(9),
        width: theme.spacing(9),
        marginRight: theme.spacing(2)
    },
    dialogContent: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%'
    },
    accountContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        margin: theme.spacing(0, 0, 2, 0),
    },
    dialogActionContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        marginLeft: 0,
        padding: theme.spacing(3)
    }
}));

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const WalletDetailDialog = ({ open, onClose, account, chainId, balance, setIsWalletDialog }) => {
    const classes = useStyles();
    const walletDetailList = [
        {
            title: 'Assets'
        },
        {
            title: 'Activity'
        }
    ]
    const [filterValue, setFilterValue] = useState(0);

    const theme = useTheme();
    const isSm = useMediaQuery(theme.breakpoints.down('sm'), {
        defaultMatches: true,
    });

    const accountSwitchingHandler = () => {
        setIsWalletDialog(true)
    }
    const ethBalance = balance && formatEther(balance);
    console.log('kevin ', balance)

    return (
        <div>
            <Dialog classes={{ paper: classes.root }} disableEnforceFocus fullScreen={isSm ? true : false} open={open} TransitionComponent={Transition} >
                <DialogTitle >
                    <div className={classes.dialogTitleContainer}>
                        <Typography variant='h4' noWrap>Wallet detail</Typography>
                        <CircleButton
                            style={{ backgroundColor: '#1B1F2E' }} onClick={onClose}
                            icon={<CloseIcon style={{ color: theme.palette.text.primary }} fontSize='default' />} />
                    </div>
                    <IntercoinTabContainer
                        setFilterValue={setFilterValue}
                        TabList={walletDetailList}
                    />
                </DialogTitle>
                <DialogContent classes={{ root: classes.dialogContent }}>

                    <div className={classes.accountContainer}>
                        <Avatar src={makeBlockie(account)} className={classes.avatar} />
                        <div>
                            <Typography variant='body1'> Eversecure</Typography>
                            <Typography variant='body1'> {ChainName[`${chainId}`]} Network { }</Typography>
                            <Typography>{ethBalance} 1.2323 (ETH)</Typography>
                        </div>
                    </div>
                    <RadiusButton onClick={accountSwitchingHandler} variant='outlined'>
                        <Typography variant='body1'> {account?.slice(0, 14) + '...' + account?.slice(account?.length - 6, account?.length)}</Typography>
                        <SettingsIcon fontSize='small' style={{ marginLeft: 4 }} />
                    </RadiusButton>
                </DialogContent>
                <DialogActions disableSpacing classes={{ root: classes.dialogActionContainer }} >

                </DialogActions >
            </Dialog>
        </div>
    );
}

export default WalletDetailDialog;
