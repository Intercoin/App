
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    }
}));

const Currency = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Typography>Coming Soon!</Typography>
        </div>
    );
};

export default Currency;
