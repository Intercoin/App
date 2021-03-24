
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Typography } from '@material-ui/core';
import ForumOutlinedIcon from '@material-ui/icons/ForumOutlined';
import { Avatar } from '@material-ui/core';
import clsx from 'clsx';
import { isEmpty } from 'utils/utility';

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
  },
  selected: {
    backgroundColor: theme.palette.background.main
  }
}));

const RecentTransactions = ({ transactionData, setContactBoard, contactBoard }) => {
  const classes = useStyles({});
  const clickHandler = (id) => {
    setContactBoard(id);
  }

  return (
    <>
      { transactionData.map((transaction, index) => {
        return (
          <Grid item key={index} xs={12} sm={!isEmpty(contactBoard) ? 12 : 12} md={!isEmpty(contactBoard) ? 6 : 4} lg={!isEmpty(contactBoard) ? 4 : 3}>
            <Card className={classes.card} onClick={() => clickHandler(index)}>
              {transaction.type === 1 ?
                <CardContent className={clsx(classes.cardContent, contactBoard === index && classes.selected)}>
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
        )
      })}
    </>
  );
};

export default RecentTransactions;
