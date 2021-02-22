
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Typography } from '@material-ui/core';
import ForumOutlinedIcon from '@material-ui/icons/ForumOutlined';
import { Avatar } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {},
  card: {
    backgroundColor: theme.palette.background.default,
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
  }
}));

const RecentTransactions = ({ transaction }) => {
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Card className={classes.card}>
        {transaction.type === 1 ?
          <CardContent className={classes.cardContent}>
            <ForumOutlinedIcon variant='outline' fontSize='large' />
            <Typography variant='body1' style={{ padding: 8 }} noWrap>
              {transaction?.sender} ⇔ {transaction?.receiver}
            </Typography>
            <Avatar round='true' src={transaction?.avatarUrl} />
          </CardContent>
          :
          <CardContent className={classes.cardContent}>
            <Avatar variant='square' src={transaction?.imageUrl} />
            <Typography component='div' variant='body1' style={{ paddingRight: 8, paddingLeft: 8 }} noWrap>
              {transaction?.companyTitle}
              <Typography variant='subtitle2' noWrap >
                {transaction?.subTitle}
              </Typography>
            </Typography>
            <Avatar round='true' src={transaction?.avatarUrl} />
          </CardContent>
        }
      </Card>
    </Grid>
  );
};

export default RecentTransactions;
