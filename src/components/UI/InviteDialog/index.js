
import React, { useState, useCallback } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import DialogContent from '@material-ui/core/DialogContent';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

import DialogWrapper, { dialogStyles } from 'hoc/DialogWrapper';
import RadiusButton from 'components/RadiusButton';
import { useAllRules } from 'utils/hooks';
import IntercoinLoading from 'components/IntercoinLoading';
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
    }
}));

const InviteDialog = ({ open, onClose }) => {
    const classes = useStyles();
    const dialogClasses = dialogStyles();
    const { allRoles, allRolesLoading } = useAllRules();
    const [state, setState] = useState({});
    const [selectedId, setSelectedId] = useState([]);
    const [headerTitle, setHeaderTitle] = useState('Select Role');

    const inviteUserHandler = () => {

    }

    const selectHandler = (id) => {
        setSelectedId(id)
    }


    return (
        <DialogWrapper open={open} onClose={onClose} smallWidth >
            <div className={dialogClasses.root}>
                <Typography variant='h6' className={classes.titleLine}>{headerTitle}</Typography>
                <DialogContent dividers className={classes.dialogContent}>
                    <List className={classes.listContainer}>
                        {allRoles.map((title, index) => {

                            return (
                                <React.Fragment key={index}>
                                    {!isEmpty(title) &&
                                        <ListItem button style={{ marginBottom: 4 }} classes={{ selected: classes.selectedItem }}
                                            key={index} onClick={() => selectHandler(index)} >
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
                    {allRolesLoading && <IntercoinLoading />}
                </DialogContent>
                <div className={classes.dialogActions}>
                    <RadiusButton onClick={inviteUserHandler} variant='outlined'>
                        Invite Users
                   </RadiusButton>
                </div>
            </div>

        </DialogWrapper>
    );
}

export default InviteDialog;
