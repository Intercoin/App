
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
  root: {}
}));

const RecentTransactions = ({ transaction }) => {
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      {transaction?.sender} ⇔ {transaction?.sender}
    </Grid>
  );
};

export default RecentTransactions;
