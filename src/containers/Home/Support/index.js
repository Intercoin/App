import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
  useMediaQuery,
  Grid,
  ListItem,
  ListItemAvatar,
  Typography,
  Avatar,
  colors,
} from '@material-ui/core';

import SectionHeader from 'components/UI/SectionHeader';
import IconAlternate from 'components/UI/IconAlternate';

const useStyles = makeStyles(theme => ({
  root: {},
  listItemAvatar: {
    color: 'blue',
    minWidth: 28,
  },
  listItem: {
    [theme.breakpoints.up('sm')]: {
      justifyContent: 'center',
    },
  },
  galleryMedia: {
    width: 80,
    height: 80,
    marginLeft: theme.spacing(-2),
    border: '3px solid white',
    '&:first-child': {
      marginLeft: 0,
    },
    [theme.breakpoints.up('sm')]: {
      width: 100,
      height: 100,
    },
    [theme.breakpoints.up('md')]: {
      width: 140,
      height: 140,
    },
  },
}));

const Contact = props => {
  const { data, className, ...rest } = props;
  const classes = useStyles();

  const { items, team } = data;

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Grid container spacing={isMd ? 4 : 2}>
        <Grid item xs={12}>
          <SectionHeader
            label="A Funding Portal support team"
            title={
              <>
                <span>
                  Our friendly support team
                  <span style={{ color: colors.deepOrange[500] }}>
                    {' '}
                    will help you get set-up and guide you through the investment process.
                  </span>
                </span>
              </>
            }
            subtitle="Our primary goal is to make your investment experience top-rate. If you need help setting up a security offering, an investment account, or tracking your investment history, we are here to help."
            align="center"
            disableGutter
          />
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={0}>
            {items.map((item, index) => (
              <Grid item container xs={6} sm={3} key={index} data-aos="fade-up">
                <ListItem disableGutters className={classes.listItem}>
                  <ListItemAvatar className={classes.listItemAvatar}>
                    <IconAlternate
                      size="extraSmall"
                      shape="circle"
                      fontIconClass="fas fa-check"
                      color={colors.deepOrange}
                    />
                  </ListItemAvatar>
                  <Typography variant="subtitle1" style={{ color: colors.deepOrange[500] }} noWrap>
                    {item}
                  </Typography>
                </ListItem>
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid
          item
          container
          alignItems="center"
          justify="center"
          xs={12}
          data-aos="fade-up"
        >
          {team.map((item, index) => (
            <Avatar
              key={index}
              className={classes.galleryMedia}
              alt={item.authorName}
              {...item.authorPhoto}
            />
          ))}
        </Grid>
      </Grid>
    </div>
  );
};

Contact.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * Data to render
   */
  data: PropTypes.object.isRequired,
};

export default Contact;
