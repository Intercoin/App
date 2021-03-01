
import React, { useEffect, useContext } from 'react';
import { AppContext } from 'contexts';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid";
import Card from '@material-ui/core/Card';
import AddIcon from '@material-ui/icons/Add';

import CardWrapper from 'hoc/CardWrapper';
import CircleButton from 'components/UI/Buttons/CircleButton';
import { communityData } from 'utils/helper/mockupData';
import IntercoinCard from 'components/IntercoinCard';

const useStyles = makeStyles(theme => ({
  root: {
    [theme.breakpoints.down('sm')]: {
      paddingBottom: theme.spacing(12)
    },
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',

  },
  card: {
    backgroundColor: theme.palette.background.default,
    width: "100%",
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    borderRadius: 20,
    borderColor: 'red',
    boxShadow: `0 1px 6px 0 ${theme.palette.background.default}`,
    '&:hover': {
      transform: 'translateY(-5px)',
      transition: `ease-out 0.4s `,
      opacity: '100%'
    },
    transition: 'ease-out 0.4s',
  },
}));

const Communities = () => {
  const classes = useStyles();
  const { setLoadingInfo, account } = useContext(AppContext);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    setLoadingInfo(true);
    setTimeout(() => {
      setLoadingInfo(false);
    }, 2000);
  }, [setLoadingInfo]);

  return (
    <div className={classes.root}>
      <CardWrapper >
        <Grid container spacing={2} className={classes.container} >

          {
            communityData.map((community, index) => {

              return (
                <IntercoinCard
                  key={index}
                  selectedCard={1}
                  id={index}
                  imageUrl={community.logoUrl}
                  content={community.communityTitle}
                  subContent={community.role}
                  detail={community.personalInfo}
                  value={community.feedbackScore}
                />
              )
            })
          }
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card className={classes.card}>
              <CircleButton
                style={{ marginLeft: 4, backgroundColor: '#292C40' }}
                icon={<AddIcon style={{ color: "#fff", width: 32, height: 32 }} fontSize={'large'} />} />
              <Typography variant='h6'> Start a Community </Typography>
            </Card>
          </Grid>
        </Grid>
      </CardWrapper>
    </div>
  );
};

export default Communities;
