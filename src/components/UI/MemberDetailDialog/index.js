
import React, { useState, useCallback } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import DialogContent from '@material-ui/core/DialogContent';

import DialogWrapper, { dialogStyles } from 'hoc/DialogWrapper';
import OutlinedButton from 'components/UI/Buttons/OutlinedButton';
import { MemoizedOutlinedTextField } from 'components/UI/OutlinedTextField';
import { MemoizedOutlinedSelect } from 'components/UI/OutlinedSelect';

import { isEmpty } from 'utils/utility';

const useStyles = makeStyles(theme => ({
    dialogActions: {
        display: 'flex',
        justifyContent: 'center',
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
        padding: theme.spacing(1, .5, 0, .5),
    },
    button: {
        backgroundColor: theme.custom.palette.green
    },
    section: {
        margin: theme.spacing(2, 1, 2, 1)
    }
}));

const MemberDetailDialog = ({ open, onClose, title, creatNewCommunityHandler }) => {
    const classes = useStyles();
    const dialogClasses = dialogStyles();

    const onFormSubmit = async (ev) => {
        ev.preventDefault()
        onClose();
    }

    return (
        <DialogWrapper open={open} onClose={onClose} smallWidth >
            <form onSubmit={onFormSubmit} >
                <Typography variant='h6' className={classes.titleLine} noWrap>{title}</Typography>
                <DialogContent dividers className={classes.dialogContent}>
                    detail member page

                </DialogContent>
                <div className={classes.dialogActions}>
                    <OutlinedButton
                        onClick={() => creatNewCommunityHandler(state.communityTitle, image, ticker)}
                        className={classes.button}>
                        Create
                    </OutlinedButton>
                </div>
            </form>
        </DialogWrapper>
    );
}

export default MemberDetailDialog;
