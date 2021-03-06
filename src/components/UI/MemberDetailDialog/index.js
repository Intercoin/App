
import React, { useState, useCallback } from 'react';
import Dialog from '@material-ui/core/Dialog';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Typography, useMediaQuery } from '@material-ui/core';
import { useHistory, useLocation } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import Slide from '@material-ui/core/Slide';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';
import SendIcon from '@material-ui/icons/Send';
import Divider from '@material-ui/core/Divider';
import Jdenticon from 'react-jdenticon';

import RadiusButton from 'components/RadiusButton';
import { MemoizedOutlinedSelect } from 'components/UI/OutlinedSelect';
import { PAGES } from 'utils/links/pages';
import CircleButton from 'components/UI/Buttons/CircleButton';
import CloseIcon from '@material-ui/icons/Close';
import DoneIcon from '@material-ui/icons/Done';
import { useGetAccountRules, useOwner, useAllRules } from 'utils/hooks';
import IntercoinLoading from 'components/IntercoinLoading';

import { isEmpty } from 'utils/utility';

const useStyles = makeStyles(theme => ({

    root: {
        backgroundColor: theme.palette.background.default,
        border: `solid 0.5px ${theme.palette.text.secondary}`,
        margin: theme.spacing(0.5),
        // boxShadow: `1px 1px 2px 0 ${theme.palette.text.notification}`,
        // marginTop : 20,
        // marginBottom : theme.spacing(5),
        // marginTop:theme.spacing(8),
        borderRadius: '20px'
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
        width: '80%',
    },
    avatar: {
        backgroundColor: 'transparent',
        border: `2px solid ${theme.palette.text.secondary}`,
        height: theme.spacing(9),
        width: theme.spacing(9),
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
        // display: 'flex',
        // width: `calc(100% - ${theme.spacing(2)}px) !important`,
        width: '100% !important'
        // backgroundColor: theme.custom.palette.green
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
    },
    "@keyframes shine": {
        '0%': { left: '200%' },
        '100%': { left: '-200%' }
    }
}));
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const MemberDetailDialog = ({ communityDetail, account, onClose }) => {
    const classes = useStyles();
    const history = useHistory();
    const location = useLocation();
    const theme = useTheme();
    const isSm = useMediaQuery(theme.breakpoints.down('sm'), {
        defaultMatches: true,
    });
    const [open, setOpen] = useState(true);
    const [state, setState] = useState({});
    const owner = useOwner();
    const { allRoles, allRolesLoading } = useAllRules();

    const { accountRulesloading, ownRoles } = useGetAccountRules(communityDetail?.account)

    const handleDelete = () => {
        console.info('kevin TODO giving some events');
    };

    const onSelectHandler = useCallback((value, name) => {
        setState(prevState => ({ ...prevState, [name]: value }));
    }, []);

    return (
        <div>
            <Dialog classes={{ paper: classes.root }} disableEnforceFocus fullScreen={isSm ? true : false} open={open} TransitionComponent={Transition} >
                <DialogTitle>
                    <div className={classes.dialogTitleContainer}>
                        <div className={classes.avatarContainer}>
                            <Avatar src={communityDetail.avatar ? '/assets/images/photos/people/scst@2x.png' : null} className={classes.avatar} >
                                <Jdenticon size="50" value={communityDetail.account} />
                            </Avatar>
                            <Typography variant='h4' noWrap>{communityDetail.name}</Typography>
                        </div>
                        <CircleButton
                            style={{ backgroundColor: '#1B1F2E' }} onClick={onClose}
                            icon={<CloseIcon style={{ color: theme.palette.text.primary }} fontSize='default' />} />
                    </div>
                </DialogTitle>
                <DialogContent classes={{ root: classes.dialogContent }}>
                    <RadiusButton variant='outlined' className={classes.button} fullWidth={true}>
                        <Typography variant='h6'>
                            + Add to Contacts
                    </Typography>
                    </RadiusButton>
                    <div className={classes.chipConatiner}>
                        {accountRulesloading ? <IntercoinLoading wholeOverlay /> : null}
                        {ownRoles.map((role, index) => {
                            return (
                                <Chip
                                    key={index}
                                    icon={<FaceIcon />}
                                    label={role}
                                    clickable
                                    color="primary"
                                    onDelete={handleDelete}
                                    classes={{ colorPrimary: classes.chip }}
                                    deleteIcon={<DoneIcon />}
                                />)
                        })}
                    </div>
                </DialogContent>
                <DialogActions disableSpacing classes={{ root: classes.dialogActionContainer }} >
                    <RadiusButton variant='outlined' className={classes.button} style={{ marginBottom: 20 }} fullWidth={true}>
                        <SendIcon style={{ marginRight: 8 }} />
                        <Typography variant='h6'>
                            Send Payment
                        </Typography>
                    </RadiusButton>
                    {owner === communityDetail.account ?
                        <>
                            <Divider width={'100%'} style={{ backgroundColor: '#6B76A1' }} variant='fullWidth' orientation={'horizontal'} />
                            <Typography variant='h4' style={{ marginRight: 'auto', padding: 8 }} >Income </Typography>
                            <Typography className={classes.selectContainer} component='div' variant='h5'>
                                Managed by :
                            <MemoizedOutlinedSelect
                                    placeholder='Role'
                                    name='role'
                                    style={{ width: '50%' }}
                                    items={allRoles.filter(item => item)}
                                    value={state.role}
                                    onChange={onSelectHandler}
                                />
                            </Typography>
                            <Typography variant='h6' style={{ padding: 4 }}>
                                Max $120/week, $20/day
                     </Typography>
                            <RadiusButton variant='outlined' className={classes.button} fullWidth={true}>
                                <Typography variant='h6'>
                                    + Add Restricition
                                </Typography>
                            </RadiusButton>
                        </> : null}
                </DialogActions >
            </Dialog>
        </div>
    );
}

export default MemberDetailDialog;
