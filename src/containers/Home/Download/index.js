import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { colors } from '@material-ui/core';

import ContainedButton from 'components/UI/Buttons/ContainedButton';
import SectionHeader from 'components/UI/SectionHeader';
import CardBase from 'components/UI/CardBase';

const useStyles = makeStyles(theme => ({
  root: {},
  cardBase: {
    background: colors.indigo[500],
    [theme.breakpoints.up('md')]: {
      background: `url(assets/svg/newsletter-bg.svg) no-repeat 150% 50% ${colors.indigo[500]}`,
    },
  },
  textWhite: {
    color: 'white',
  },
  sectionHeader: {
    [theme.breakpoints.up('md')]: {
      maxWidth: '60%',
    },
  },
}));

const Subscription = props => {
  const { className, ...rest } = props;
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <CardBase
        variant="outlined"
        liftUp
        className={classes.cardBase}
        align="left"
        data-aos="fade-up"
      >
        <SectionHeader
          title={
            <span className={classes.textWhite}>
              Intercoin is the next step in the evolution of money.
            </span>
          }
          subtitle={
            <span className={classes.textWhite}>
             It enables communities around the world to issue and manage their own currency-as-a-service (CaaS), to circulate among their local population. 
             This leads to stronger communities, greater sustainability, less poverty, and morep roductivity. 
             Intercoin can be integrated into any mobile or web application, and will allow people to pay one another in local currency.
            </span>
          }
          align="left"
          ctaGroup={[
            <ContainedButton
              size="large"
              variant="outlined"
              color="primary"
              component="a"
              target="blank"
              href="https://intercoin.org/"
            >
              Invest Now
          </ContainedButton>,
          ]}
          disableGutter
          className={classes.sectionHeader}
        />
      </CardBase>
    </div>
  );
};

Subscription.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default Subscription;
