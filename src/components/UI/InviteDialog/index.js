
import React, { useState, useCallback } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import DialogContent from '@material-ui/core/DialogContent';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

import DialogWrapper, { dialogStyles } from 'hoc/DialogWrapper';
import RadiusButton from 'components/RadiusButton';
import CircleButton from 'components/UI/Buttons/CircleButton';
import OutlinedButton from 'components/UI/Buttons/OutlinedButton';
import { MemoizedOutlinedTextField } from 'components/UI/OutlinedTextField';
import { useAllRules } from 'utils/hooks';
import IntercoinLoading from 'components/IntercoinLoading';
import EmailIcon from '@material-ui/icons/Email';
import SmsIcon from '@material-ui/icons/Sms';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import { isEmpty } from 'utils/utility';

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
    },
    selectedItem: {
        border: `0.5px solid ${theme.palette.text.hoverText}`,
        borderRadius: '10px'
    },
    buttonColor: {
        backgroundColor: theme.custom.palette.green
    },
    gridContainer: {
        flexGrow: 1
    },
    tapButton: {
        width: '100%',
        backgroundColor: theme.custom.palette.green
    }
}));

const InviteDialog = ({ open, onClose }) => {
    const classes = useStyles();
    const dialogClasses = dialogStyles();
    const { allRoles, allRolesLoading } = useAllRules();
    const [state, setState] = useState({});
    const [selectedRoles, setSelectedRoles] = useState([]);

    const [headerTitle, setHeaderTitle] = useState('Select Role');

    const inviteUserHandler = () => {
        setHeaderTitle('Invite Admin')
    }

    const selectHandler = (title) => {
        if (!selectedRoles.includes(title)) {
            setSelectedRoles(prevState => ([
                ...prevState,
                title
            ]));
        }
    }

    const inputChangeHandler = useCallback(event => {
        const { name, value } = event.target;
        setState(prevState => ({
            ...prevState, [name]: value
        }));
    }, []);

    return (
        <DialogWrapper open={open} onClose={onClose} smallWidth width={460} >
            <div className={dialogClasses.root}>
                <Typography variant='h6' className={classes.titleLine}>{headerTitle}</Typography>
                <DialogContent dividers className={classes.dialogContent}>
                    {headerTitle === 'Select Role' ?
                        <List className={classes.listContainer}>
                            {allRoles.map((title, index) => {

                                return (
                                    <React.Fragment key={index}>
                                        {!isEmpty(title) &&
                                            <ListItem button style={{ marginBottom: 4 }} classes={{ selected: classes.selectedItem }} selected={selectedRoles.includes(title)}
                                                key={index} onClick={() => selectHandler(title)} >
                                                <ListItemAvatar>
                                                    <Avatar src={'/assets/images/logos/victim-services_200w.png'} variant='square' />
                                                </ListItemAvatar>
                                                <ListItemText primary={title} />
                                            </ListItem>
                                        }
                                    </React.Fragment>
                                )
                            })}
                        </List>
                        :
                        <div className={classes.gridContainer}>
                            <Grid container justify='center' alignItems='center' spacing={2} >
                                <Grid container item justify='center' alignItems='center' direction="row" spacing={2}>
                                    <Grid xs={9} sm={10} item>
                                        <MemoizedOutlinedTextField
                                            placeholder='Email address or mobile number'
                                            name='inviteAddress'
                                            value={state.inviteAddress}
                                            onChange={inputChangeHandler}
                                        />
                                    </Grid>
                                    <Grid xs={3} sm={2} item>
                                        <RadiusButton className={classes.buttonColor} onClick={inviteUserHandler} variant='outlined' >
                                            Go
                                       </RadiusButton>
                                    </Grid>
                                </Grid>
                                <Grid container item justify='center' alignItems='center' direction="row">
                                    <Grid xs={12} container item justify='center' alignItems='center'>
                                        <Typography>Or invite people by using: </Typography>
                                    </Grid>
                                </Grid>
                                <Grid container item justify='center' alignItems='center' direction="row">
                                    <Grid xs={3} container item justify='center' alignItems='center'>
                                        <CircleButton
                                            style={{ backgroundColor: '#292C41', margin: 4 }}
                                            icon={<EmailIcon fontSize={'large'} style={{ color: '#fff' }} />} />
                                    </Grid>
                                    <Grid xs={3} container item justify='center' alignItems='center'>
                                        <CircleButton
                                            style={{ backgroundColor: '#292C41', margin: 4 }}
                                            icon={<SmsIcon fontSize={'large'} style={{ color: '#fff' }} />} />
                                    </Grid>
                                    <Grid xs={3} container item justify='center' alignItems='center'>
                                        <CircleButton
                                            style={{ backgroundColor: '#292C41', margin: 4 }}
                                            icon={<FacebookIcon fontSize={'large'} style={{ color: '#fff' }} />} />
                                    </Grid>
                                    <Grid xs={3} container item justify='center' alignItems='center'>
                                        <CircleButton
                                            style={{ backgroundColor: '#292C41', margin: 4 }}
                                            icon={<TwitterIcon fontSize={'large'} style={{ color: '#fff' }} />} />
                                    </Grid>
                                </Grid>
                                <Grid container item justify='center' alignItems='center' direction="row" >
                                    <Grid xs={12} container item justify='center' alignItems='center'>
                                        <OutlinedButton className={classes.tapButton}>
                                            <Typography variant='body1'>Tap to Copy invite link </Typography>
                                        </OutlinedButton>
                                    </Grid>
                                </Grid>
                                <Grid container item justify='center' alignItems='center' direction="row" >
                                    <Grid xs={12} container item justify='center' alignItems='center'>
                                        <OutlinedButton className={classes.tapButton}>
                                            <Typography variant='body1'>Tap to generate QR code</Typography>
                                        </OutlinedButton>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </div>
                    }
                    {allRolesLoading && <IntercoinLoading />}
                </DialogContent>
                <div className={classes.dialogActions}>
                    <RadiusButton onClick={inviteUserHandler} variant='outlined'>
                        Invite Users
                   </RadiusButton>
                </div>
            </div>
        </DialogWrapper >
    );
}

export default InviteDialog;
