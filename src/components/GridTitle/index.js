
import React from 'react';
import { useHistory } from "react-router-dom";
import { Typography, useMediaQuery } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import { PAGES } from 'utils/links/pages';
import ContainedButton from 'components/UI/Buttons/ContainedButton';

const useStyles = makeStyles(theme => ({
  root: props => ({
    [theme.breakpoints.down('sm')]: {
      padding: props.noPaddingTop ? theme.spacing(0) : theme.spacing(2, 0, 0, 0),
    },
    display: 'flex',
    marginBottom: theme.spacing(2),
    justifyContent: props.center ? 'center' : 'space-between',
    alignItems: 'center'
  }),
  bold: {
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    },
    fontWeight: '400'
  }
}));

const GridTitle = ({ title, buttonName, center, noPaddingTop }) => {
  const classes = useStyles({ center, noPaddingTop });
  const history = useHistory();
  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.down('sm'), {
    defaultMatches: true,
  });

  const clickHandler = () => {
    history.push(`${PAGES.POLLS.url}/new`)
  }

  return (
    <div className={classes.root}>
      <Typography className={classes.bold} variant='h5' >
        {title}
      </Typography>
      {
        buttonName && !isSm &&
        <ContainedButton
          style={{ backgroundColor: theme.custom.palette.green }}
          onClick={clickHandler}
        >
          {buttonName}
        </ContainedButton>
      }
    </div>
  );
};

export default GridTitle;