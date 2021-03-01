
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Typography } from '@material-ui/core';
import clsx from 'clsx';
import { Avatar } from '@material-ui/core';
import Badge from '@material-ui/core/Badge';

import { isEmpty } from 'utils/utility';

const useStyles = makeStyles(theme => ({
  root: {},
  card: {
    backgroundColor: theme.palette.background.default,
    display: 'flex',
    width: "100%",
    flexDirection: 'column',
    justifyContent: 'center',
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
  },
  selected: {
    backgroundColor: theme.palette.background.main
  }
}));

const RecentTransactions = ({ selectedCard, id, imageUrl, content, subContent, detail, value }) => {
  const classes = useStyles({});
  const clickHandler = () => {
  }

  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Card className={classes.card} onClick={clickHandler}>
        <CardContent className={clsx(selectedCard === id && classes.selected)}>
          <Grid container direction="row" justify="center" alignItems="center"  >
            <Grid item xs={2}>
              <Avatar variant='square' src={imageUrl} />
            </Grid>
            <Grid item xs>
              <Typography component='div' variant='body1' style={{ display: 'flex', flexDirection: 'column', padding: 8 }} noWrap>
                {content}
                <Typography variant='caption'>
                  {detail} , {subContent}
                </Typography>
              </Typography>
            </Grid>
            <Grid item xs={1}>
              <Badge color='error'
                max={999999}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                badgeContent={value} />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default RecentTransactions;