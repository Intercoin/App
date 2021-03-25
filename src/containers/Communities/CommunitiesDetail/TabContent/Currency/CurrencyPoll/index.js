
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";

import { basicIncomeData } from 'utils/helper/mockupData';
import VoteCard from 'components/VoteCard';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%'
    }
}));

const CurrencyPoll = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={3} >
                {basicIncomeData.map((data, index) => {
                    return (
                        <VoteCard key={index} VoteInfo={data} />
                    )
                })}
            </Grid>
        </div>
    );
};

export default CurrencyPoll;
