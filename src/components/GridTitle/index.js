
import React from 'react';
import { useHistory } from "react-router-dom";
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import { PAGES } from 'utils/links/pages';
import ContainedButton from 'components/UI/Buttons/ContainedButton'

const useStyles = makeStyles(theme => ({
  root: props => ({
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(2, 0, 0, 0),
    },
    display: 'flex',
    marginBottom: theme.spacing(2),
    justifyContent: props.center ? 'center' : 'space-between',
    alignItems: 'center'
  }),
  bold: {
    fontWeight: '400'
  }
}));

const GridTitle = ({ title, buttonName, center }) => {
  const classes = useStyles({ center });
  const history = useHistory();
  const clickHandler = () => {
    history.push(`${PAGES.POLLS.url}/new`)
  }

  return (
    <div className={classes.root}>
      <Typography className={classes.bold} variant='h5' >
        {title}
      </Typography>
      {
        buttonName &&
        <ContainedButton
          style={{ backgroundColor: '#4caf50' }}
          onClick={clickHandler}
        >
          {buttonName}
        </ContainedButton>
      }
    </div>
  );
};

export default GridTitle;