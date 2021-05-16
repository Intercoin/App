
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import { useHistory } from "react-router-dom";

import ContainedButton from 'components/UI/Buttons/ContainedButton';
import Avatar from '@material-ui/core/Avatar';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import makeBlockie from 'ethereum-blockies-base64';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        // height: `calc(100vh - ${theme.spacing(35)}px) !important`,
        maxHeight: `calc(100vh - ${theme.spacing(35)}px) !important`,
        alignItems: 'center',
        padding: theme.spacing(1),
        marginBottom: theme.spacing(10),
        overflowY: 'scroll'
    },
    arrowIconRotate: {
        transform: 'rotate(180deg)'
    }
}));

const AccountActivity = ({ account, deactivate }) => {
    const classes = useStyles();
    const history = useHistory();
    document.body.style.overflow = 'hidden';

    const disconnectHandler = () => {
        deactivate()
        history.push('/')
    }

    return (
        <div className={classes.root} >
            <ListItem style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                <ListItemAvatar>
                    <Avatar src={makeBlockie(account)} className={classes.avatar} />
                </ListItemAvatar>
                <ListItemText id={1} primary={account?.slice(0, 5) + '...' + account?.slice(account?.length - 5, account?.length)} />
                <ContainedButton
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '2.5rem',
                        borderRadius: '1rem',
                        backgroundColor: '#16ACE2',
                        borderColor: 'red',
                        cursor: 'pointer',
                        color: 'textSecondary'
                    }}
                    onClick={() => disconnectHandler()}
                >
                    Disconnect
              </ContainedButton>
            </ListItem>
        </div >
    );
};

export default AccountActivity;
