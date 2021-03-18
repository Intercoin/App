
import React, { useState, useContext, useCallback } from 'react';
import { AppContext } from 'contexts';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import DialogContent from '@material-ui/core/DialogContent';
import Grid from '@material-ui/core/Grid';

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
    tapButton: {
        width: '100%',
        backgroundColor: theme.custom.palette.green
    },
}));

const InviteReceiveDialog = ({ title, open, onClose, pSig }) => {
    const classes = useStyles();
    const { account, chainId, library } = useContext(AppContext);
    const community = communityInstance(account, chainId, library);
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();
    const [state, setState] = useState({});
    const [rpSig, setRpSig] = useState('')

    const Signer = library.getSigner()

    let recipientMsg = '' + account + ':John Doe';
    const inviteAcceptrHandler = () => {
        Promise.resolve(Signer.signMessage(recipientMsg)).then(function (rpSign) {
            console.log('kevin copy link handler===>', rpSign)
            setRpSig(rpSign)
        }).catch(function (error) {
            console.log('rpSigError===>', error)
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

    const copyLinkHandler = () => {
        enqueueSnackbar('Invite accept link was successfully copied!', { variant: 'success' });
        onClose()
    }

    const generateQrCodeHandler = () => {
        onClose()
    }

    const sendSmsHandler = () => {
        onClose()
    }

    const sendFacebookHandler = () => {
        onClose()
    }

    const sendTwitterHandler = () => {
        onClose()
    }

    return (
        <DialogWrapper open={open} onClose={onClose} smallWidth width={460} >
            <Typography variant='h6' className={classes.titleLine}>{title}</Typography>
            <DialogContent dividers className={classes.dialogContent}>
                <Grid container justify='center' alignItems='center' spacing={2} >
                    {/* {allRolesLoading && <IntercoinLoading />} */}
                    <Grid container item justify='center' alignItems='center' direction="row">
                        <Grid xs={12} container item justify='center' alignItems='center'>
                            <Typography variant='body1'> Sending accept link by using: </Typography>
                        </Grid>
                    </Grid>
                    <Grid container item justify='center' alignItems='center' direction="row">

                        <Grid xs={3} container item justify='center' alignItems='center'>
                            <CircleButton
                                onClick={sendEmailHandler}
                                style={{ backgroundColor: '#292C41', margin: 4 }}
                                icon={<EmailIcon fontSize={'large'} style={{ color: '#fff' }} />} />
                        </Grid>
                        <Grid xs={3} container item justify='center' alignItems='center'>
                            <CircleButton
                                onClick={sendSmsHandler}
                                style={{ backgroundColor: '#292C41', margin: 4 }}
                                icon={<SmsIcon fontSize={'large'} style={{ color: '#fff' }} />} />
                        </Grid>
                        <Grid xs={3} container item justify='center' alignItems='center'>
                            <CircleButton
                                onClick={sendFacebookHandler}
                                style={{ backgroundColor: '#292C41', margin: 4 }}
                                icon={<FacebookIcon fontSize={'large'} style={{ color: '#fff' }} />} />
                        </Grid>
                        <Grid xs={3} container item justify='center' alignItems='center'>
                            <CircleButton
                                onClick={sendTwitterHandler}
                                style={{ backgroundColor: '#292C41', margin: 4 }}
                                icon={<TwitterIcon fontSize={'large'} style={{ color: '#fff' }} />} />
                        </Grid>
                    </Grid>
                    <Grid container item justify='center' alignItems='center' direction="row" >
                        <Grid xs={12} container item justify='center' alignItems='center'>
                            <CopyToClipboard text={`${API_BASE_URL}${PAGES.COMMUNITIES.url}/i?pSig=${pSig}&rpSig=${rpSig}`}>
                                <OutlinedButton disable={isEmpty(rpSig)} onClick={copyLinkHandler} className={classes.tapButton}>
                                    <Typography variant='body1'>Tap to Copy invite accept link </Typography>
                                </OutlinedButton>
                            </CopyToClipboard>
                        </Grid>
                    </Grid>
                </Grid>
            </DialogContent>
            <div className={classes.dialogActions}>
                <RadiusButton disable={!isEmpty(rpSig)} onClick={inviteAcceptrHandler} variant='outlined'>
                    Invite Accept
                   </RadiusButton>
            </div>
        </DialogWrapper >
    );
}

export default InviteReceiveDialog;
