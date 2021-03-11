
import React, { useState, useCallback } from 'react';
import Dialog from '@material-ui/core/Dialog';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import Slide from '@material-ui/core/Slide';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';
import SendIcon from '@material-ui/icons/Send';
import Divider from '@material-ui/core/Divider';
import { useHistory } from "react-router-dom";

import { dialogStyles } from 'hoc/DialogWrapper';
import OutlinedButton from 'components/UI/Buttons/OutlinedButton';
import { MemoizedOutlinedSelect } from 'components/UI/OutlinedSelect';
import { PAGES } from 'utils/links/pages';
import CircleButton from 'components/UI/Buttons/CircleButton';
import CloseIcon from '@material-ui/icons/Close';
import DoneIcon from '@material-ui/icons/Done';

import { isEmpty } from 'utils/utility';

const useStyles = makeStyles(theme => ({

    root: {
        backgroundColor: theme.palette.background.default
    },
    dialogTitleContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row !important'
    },
    dialogActions: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: theme.spacing(3),
        marginRight: -theme.spacing(2 / 8)
    },
    avatarContainer: {
        display: 'flex',
        alignItems: 'center',
        width: '70%',
    },
    avatar: {
        border: `2px solid ${theme.palette.text.secondary}`,
        height: theme.spacing(8),
        width: theme.spacing(8),
        marginRight: theme.spacing(1)
    },
    chipConatiner: {
        padding: theme.spacing(2.5, 1, 2.5, 1)
    },
    chip: {
        margin: theme.spacing(.5),
        backgroundColor: theme.palette.text.hoverText
    },
    titleLine: {
        marginBottom: theme.spacing(2.5)
    },
    dialogContent: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    button: {
        width: `calc(100% - ${theme.spacing(2)}px)`,
        backgroundColor: theme.custom.palette.green
    },
    dialogActionContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        marginLeft: 0,
        padding: theme.spacing(3)
    },
    selectContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        padding: 8
    }
}));
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const MemberDetailDialog = () => {
    const classes = useStyles();
    const history = useHistory();
    const [open, setOpen] = useState(true);

    const onClose = () => {
        history.push(`${PAGES.COMMUNITIES.url}/address`)
    }

    const handleDelete = () => {
        console.info('kevin TODO giving some events');
    };

    return (
        <Dialog classes={{ paper: classes.root }} disableEnforceFocus fullScreen open={open} TransitionComponent={Transition} >
            <DialogTitle>
                <div className={classes.dialogTitleContainer}>
                    <div className={classes.avatarContainer}>
                        <Avatar src={'/assets/images/photos/people/scst@2x.png'} className={classes.avatar} />
                        <Typography variant='h4'>Greg Foo</Typography>
                    </div>
                    <CircleButton
                        style={{ backgroundColor: '#1B1F2E' }} onClick={onClose}
                        icon={<CloseIcon style={{ color: '#fff' }} fontSize='default' />} />
                </div>
            </DialogTitle>
            <DialogContent classes={{ root: classes.dialogContent }}>
                <OutlinedButton className={classes.button}>
                    <Typography variant='h6'>
                        Add to Contacts
                    </Typography>
                </OutlinedButton>
                <div className={classes.chipConatiner}>
                    <Chip
                        icon={<FaceIcon />}
                        label="Members"
                        clickable
                        color="Primary"
                        onDelete={handleDelete}
                        classes={{ colorPrimary: classes.chip }}
                        deleteIcon={<DoneIcon />}
                    />
                    <Chip
                        icon={<FaceIcon />}
                        label="Students"
                        clickable
                        color="Primary"
                        onDelete={handleDelete}
                        classes={{ colorPrimary: classes.chip }}
                        deleteIcon={<DoneIcon />}
                    />
                    <Chip
                        icon={<FaceIcon />}
                        label="Teachers"
                        clickable
                        color="Primary"
                        onDelete={handleDelete}
                        classes={{ colorPrimary: classes.chip }}
                        deleteIcon={<DoneIcon />}
                    />
                    <Chip
                        icon={<FaceIcon />}
                        label="Guests"
                        clickable
                        color="Primary"
                        onDelete={handleDelete}
                        classes={{ colorPrimary: classes.chip }}
                        deleteIcon={<DoneIcon />}
                    />
                </div>
            </DialogContent>
            <DialogActions disableSpacing classes={{ root: classes.dialogActionContainer }} >
                <OutlinedButton className={classes.button} style={{ marginBottom: 20 }}>
                    <SendIcon style={{ marginRight: 8 }} />
                    <Typography variant='h6'>
                        Send Payment
                     </Typography>
                </OutlinedButton>
                <Divider width={'100%'} style={{ backgroundColor: '#6B76A1' }} variant='fullWidth' orientation={'horizontal'} />
                <Typography variant='h3' style={{ marginRight: 'auto', padding: 8 }} >Inconme </Typography>
                <Typography className={classes.selectContainer} component='div' variant='h5'>
                    Managed by :
                    <MemoizedOutlinedSelect style={{ width: '50%' }} />
                </Typography>
                <Typography variant='h6' style={{ padding: 4 }}>
                    Max $120/week, $20/day
                     </Typography>
                <OutlinedButton className={classes.button}>
                    <Typography variant='h6'>
                        + Add Restricition
                </Typography>
                </OutlinedButton>
            </DialogActions >
        </Dialog>
    );
}

export default MemberDetailDialog;
