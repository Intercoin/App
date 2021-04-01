
import React, { useState, useContext, useCallback } from 'react';
import { AppContext } from 'contexts';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import DialogContent from '@material-ui/core/DialogContent';

import { CopyToClipboard } from 'react-copy-to-clipboard';
import EmailIcon from '@material-ui/icons/Email';
import SmsIcon from '@material-ui/icons/Sms';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import { useSnackbar } from 'notistack';

import { API_BASE_URL } from 'config';
import DialogWrapper, { dialogStyles } from 'hoc/DialogWrapper';
import RadiusButton from 'components/RadiusButton';
import CircleButton from 'components/UI/Buttons/CircleButton';
import OutlinedButton from 'components/UI/Buttons/OutlinedButton';
import { MemoizedOutlinedTextField } from 'components/UI/OutlinedTextField';
import { useAllRules } from 'utils/hooks';
import IntercoinLoading from 'components/IntercoinLoading';
import { communityInstance } from 'services/communityInstance';
import { isEmpty } from 'utils/utility';
import { PAGES } from 'utils/links/pages';

const useStyles = makeStyles(theme => ({
    actionButton: {
        backgroundColor: theme.palette.text.hoverText,
        minWidth: theme.spacing(12),
        border: 'none'
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
        padding: theme.spacing(2)
    },
}));

const InvitePrepareDialog = ({ open, onClose, title, pSig, rpSig, adminMsg, recipientMsg }) => {
    const classes = useStyles();
    const { account, chainId, library } = useContext(AppContext);
    const community = communityInstance(account, chainId, library);
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();
    const [state, setState] = useState({});

    const inviteRequestHandler = () => {
        Promise.resolve(community.invitePrepare(pSig, rpSig, { from: account })).then(function (data) {

            Promise.resolve(community.inviteView( pSig, {from : account})).then(function (data) {
                console.log('inviteView!');
            }).catch(function (error) {
                console.log('inviteView error!', error)
            })

            Promise.resolve(community.inviteAccept(adminMsg, pSig, recipientMsg, rpSig, { from: account })).then(function (data) {
                enqueueSnackbar('The user was successfully invited!', { variant: 'success' });
            }).catch(function (error) {
                console.log('inviteAccept error!', error)
            })
        }).catch(function (error) {
      
            Promise.resolve(community.inviteAccept(adminMsg, pSig, recipientMsg, rpSig, { from: account })).then(function (data) {
                enqueueSnackbar('The user was successfully invited!', { variant: 'success' });
            }).catch(function (error) {
                console.log('inviteAccept error!', error)
            })
            enqueueSnackbar(error.data.message, { variant: 'error' });
        })
    }

    const inputChangeHandler = useCallback(event => {
        const { name, value } = event.target;
        setState(prevState => ({
            ...prevState, [name]: value
        }));
    }, []);

    const sendEmailHandler = () => {

    }

    return (
        <DialogWrapper open={open} onClose={onClose} smallWidth width={460} >
            <Typography variant='h6' className={classes.titleLine}>{title}</Typography>
            <DialogContent dividers className={classes.dialogContent}>
                <Typography noWrap>Admin Message : {adminMsg}</Typography>
                <Typography noWrap>pSig : {pSig}</Typography>
                <Typography noWrap>Recipient Message : {recipientMsg}</Typography>
                <Typography noWrap>rpSig :{rpSig}</Typography>
                {/* {allRolesLoading && <IntercoinLoading />} */}
            </DialogContent>
            <div className={classes.dialogActions}>
                <RadiusButton onClick={inviteRequestHandler} variant='outlined'>
                    Sending invite Request
                </RadiusButton>
            </div>
        </DialogWrapper >
    );
}

export default InvitePrepareDialog;
