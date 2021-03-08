
import React, { useState, useCallback } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import DialogContent from '@material-ui/core/DialogContent';

import DialogWrapper, { dialogStyles } from 'hoc/DialogWrapper';
import OutlinedButton from 'components/UI/Buttons/OutlinedButton';
import { MemoizedOutlinedTextField } from 'components/UI/OutlinedTextField';
import { MemoizedOutlinedSelect } from 'components/UI/OutlinedSelect';
import Dropzone from 'components/UI/Dropzone';
import { TRANSACTIONTYPES } from 'constants/transactionTypes';
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

const AddCommunityDialog = ({ open, onClose, title, ticker, creatNewCommunityHandler }) => {
    const classes = useStyles();
    const dialogClasses = dialogStyles();
    const [image, setImage] = useState('');
    const [state, setState] = useState({
        transactionType: TRANSACTIONTYPES[0]
    })

    const imageChangeHandler = img => {
        setImage(img);
        setState(prevState => ({
            ...prevState,
            imageURL: null
        })
        );
    };

    const onFormSubmit = async (ev) => {
        ev.preventDefault()
        onClose();
    }

    const inputChangeHandler = useCallback(event => {
        const { name, value } = event.target;
        setState(prevState => ({
            ...prevState,
            [name]: value
        }));
    }, []);

    const onSelectHandler = useCallback((value, name) => {
        setState(prevState => ({ ...prevState, [name]: value }));
    }, []);

    return (
        <DialogWrapper open={open} onClose={onClose} smallWidth >
            <form onSubmit={onFormSubmit} >
                <Typography variant='h6' className={classes.titleLine} noWrap>{title}</Typography>
                <DialogContent dividers className={classes.dialogContent}>
                    <div className={classes.section}>
                        <MemoizedOutlinedTextField
                            name='communityTitle'
                            value={state.communityTitle || ''}
                            placeholder='Enther title of Community'
                            onChange={inputChangeHandler} />
                    </div>
                    <div className={classes.section}>
                        <MemoizedOutlinedSelect
                            name='transactionType'
                            placeholder='Transaction Type'
                            value={state.transactionType}
                            items={TRANSACTIONTYPES}
                            onChange={onSelectHandler}
                        />
                    </div>
                    <div className={classes.section}>
                        <Dropzone
                            image={image}
                            setImage={imageChangeHandler}
                            imageURL={state.imageURL}
                            title='Community Image'
                            dropZoneSize={150}
                        />
                    </div>
                </DialogContent>
                <div className={classes.dialogActions}>
                    <OutlinedButton
                        // loading
                        onClick={() => creatNewCommunityHandler(state.communityTitle, image, ticker)}
                        className={classes.button}>
                        Create
                    </OutlinedButton>
                </div>
            </form>
        </DialogWrapper>
    );
}

export default AddCommunityDialog;
