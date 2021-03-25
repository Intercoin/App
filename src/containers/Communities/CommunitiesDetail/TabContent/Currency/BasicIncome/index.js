
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
    root: {}
}));

const BasicIncome = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
        </div>
    );
};

export default BasicIncome;
