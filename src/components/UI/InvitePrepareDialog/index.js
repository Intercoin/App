
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

const InvitePrepareDialog = ({ open, onClose }) => {
    const classes = useStyles();
    const { account, chainId, library } = useContext(AppContext);
    const community = communityInstance(account, chainId, library);
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();
    const [state, setState] = useState({});
    const [selectedRoles, setSelectedRoles] = useState([]);
    const [headerTitle, setHeaderTitle] = useState('Select Role');
    const [pSig, setPSig] = useState('')
    let selectedRoleTitles = [];

    // let adminMsg = [
    //     'invite',
    //     communityInstance.address,
    //     [
    //         ...selectedRoles
    //     ].join(','),
    //     'GregMagarshak'
    // ].join(':');
    // let psignature = EthUtil.ecsign(EthUtil.hashPersonalMessage(new Buffer(adminMsg)), new Buffer(privatekey1, 'hex'));
    // let pSig = EthUtil.toRpcSig(psignature.v, psignature.r, psignature.s);
    const Signer = library.getSigner()


    // let rpsignature = EthUtil.ecsign(EthUtil.hashPersonalMessage(new Buffer(recipientMsg)), new Buffer(privatekey2, 'hex'));
    // let rpSig = EthUtil.toRpcSig(rpsignature.v, rpsignature.r, rpsignature.s);
    const inviteUserHandler = () => {

        // Promise.resolve(Signer.signMessage(adminMsg)).then(function (pSig) {
        //     setPSig(pSig)

        // }).catch(function (error) {

        //     console.log('pSigError===>', error)
        // })
        // setHeaderTitle('Invite Admin')
    }


    const inputChangeHandler = useCallback(event => {
        const { name, value } = event.target;
        setState(prevState => ({
            ...prevState, [name]: value
        }));
    }, []);

    const sendEmailHandler = () => {

    }

 
        // enqueueSnackbar('Invite link was successfully copied!', { variant: 'success' });


    return (
        <DialogWrapper open={open} onClose={onClose} smallWidth width={460} >
            <Typography variant='h6' className={classes.titleLine}>{headerTitle}</Typography>
            <DialogContent dividers className={classes.dialogContent}>
             
                {/* {allRolesLoading && <IntercoinLoading />} */}
            </DialogContent>
            <div className={classes.dialogActions}>
                <RadiusButton onClick={inviteUserHandler} variant='outlined'>
                    Invite Users
                   </RadiusButton>
            </div>
        </DialogWrapper >
    );
}

export default InvitePrepareDialog;
