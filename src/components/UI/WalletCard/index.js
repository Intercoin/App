
import React from 'react';

import { withStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Typography, useMediaQuery } from '@material-ui/core';

import { Spinner } from 'components/UI/Spinner';

// import Prancheta from '../../assets/imgs/Prancheta.png';
// import CosmicCloud from '../../assets/imgs/Cosmic Cloud Icon-01.png';
// import Eurostar from '../../assets/imgs/Eurostar Icon-01.png';
// import GoldeDreams from '../../assets/imgs/Golde Dreams Icon-01.png';
// import TITANLOGO from '../../assets/imgs/TITANLOGO.png';

const styles = (theme) => {
  return {
    root: {},
    card: {
      backgroundColor: theme.palette.background.main,
      display: 'flex',
      width: "100%",
      // height: 100,
      // margin: 16,
      flexDirection: 'column',
      justifyContent: 'space-between',
      cursor: 'pointer',
      borderRadius: 20,
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
      alignItems: 'center',
      height: '50%',
      paddingBottom: '16px !important'
    },
    iconContainer: {
      width: '23%'
    },
    titleContainer: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-evenly',
      paddingBottom: 0,
      width: '77%'
    },
    subtitle: {
      color: theme.palette.subForeColor4
    },
    cardAction: {
      display: 'flex',
      height: '50%',
      justifyContent: 'center'
    },
    cardActionButton: {
      width: 130,
      height: 50,
      borderRadius: 25,
      border: 'none',
      backgroundColor: theme.palette.buttonColor6,
      textTransform: "capitalize"
    },
    cardDisibleButton: {
      width: 130,
      height: 50,
      borderRadius: 25,
      border: 'none',
      backgroundColor: theme.palette.text.primary,
      textTransform: "capitalize"
    },
    noDecorationLink: {
      textDecoration: 'none'
    },
  };
};

const WalletCard = (props) => {
  const { classes } = props;
  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.down('sm'), {
    defaultMatches: true,
  });

  return (
    <Grid onClick={() => props.onClick()} item xs={12} sm={6} md={6} lg={6}>
      <Card className={classes.card}>
        <CardContent className={classes.cardContent}>
          <div className={classes.iconContainer}>
            <img style={{ width: isSm ? '28px' : '40px', height: isSm ? '28px' : '40px', }} src={`../../assets/images/${props.name}.png`} alt='Logo' />
          </div>
          <div className={classes.titleContainer}>
            <Typography variant='h6' noWrap>
              {props.name}
            </Typography>
          </div>
          {props.activating && <Spinner color={'white'} style={{ height: '25%', marginLeft: '1rem' }} />}
        </CardContent>
      </Card>
    </Grid >
  );
}

export default withStyles(styles, { withTheme: true })(WalletCard);