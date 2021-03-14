
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        display :'flex',
        flexDirection:'column',
        width : '100%',
        minHeight: `calc(100vh - ${theme.spacing(35.75)}px)`,
        justifyContent:'center',
        alignItems:'center'
    }
}));

const Currency = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
          <Typography>Currency coming soon! </Typography>
        </div>
    );
};

export default Currency;
