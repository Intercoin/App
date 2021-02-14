
import React from 'react';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import { PAGES } from 'utils/links/pages';
import ContainedButton from 'components/UI/Buttons/ContainedButton'

const useStyles = makeStyles(theme => ({
  root: {
    [theme.breakpoints.down('xs')]: {
      margin: theme.spacing(2, 2, 0, 2)
    },

    display: 'flex',
    marginBottom: theme.spacing(2),
    justifyContent: 'space-between',
    alignItem: 'center'
  },
  bold: {
    fontWeight: '400'
  }
}));

const GridTitle = ({ title, buttonName }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography className={classes.bold} variant='h5' >
        {title}
      </Typography>
      {
        buttonName &&
        <ContainedButton
          href={`${PAGES.POLLS}/new`}
          type='submit'>
          {buttonName}
        </ContainedButton>
      }
    </div>
  );
};

export default GridTitle;