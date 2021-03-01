
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Typography } from '@material-ui/core';
import clsx from 'clsx';

import { isEmpty } from 'utils/utility';

const useStyles = makeStyles(theme => ({
  root: {},
  card: {
    backgroundColor: props.selected ? theme.palette.background.sideDrawer : theme.palette.background.default,
    display: 'flex',
    width: "100%",
    flexDirection: 'column',
    justifyContent: 'space-between',
    cursor: 'pointer',
    borderRadius: 20,
    borderColor: 'red',
    boxShadow: `0 1px 6px 0 ${theme.palette.text.notification}`,
    '&:hover': {
      transform: 'translateY(-5px)',
      transition: `ease-out 0.4s `,
      opacity: '100%'
    },
    transition: 'ease-out 0.4s',
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '50%',
    paddingBottom: '16px !important'
  },
  cardMedia: {
    width: 60,
    height: 36
  },
  selected: {
    backgroundColor: theme.palette.background.main
  }
}));

const RecentTransactions = ({ selectedCard, id }) => {
  const classes = useStyles({});
  const clickHandler = () => {

  }

  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Card className={classes.card} onClick={clickHandler}>
        <CardContent className={clsx(classes.cardContent, selectedCard === id && classes.selected)}>
          LeftIconArea
          <Typography variant='body1' style={{ padding: 8 }} noWrap>
            someText
          </Typography>
            RightBoard area
        </CardContent>
      </Card>
    </Grid>
  );
};

export default RecentTransactions;
