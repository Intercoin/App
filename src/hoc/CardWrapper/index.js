
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import GridTitle from 'components/GridTitle';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: theme.spacing(2, 4, 0, 4),
  },
  headerContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginLeft: theme.spacing(0),
    marginBottom: theme.spacing(0)
  }
}));

const CardWrapper = ({ children, title, buttonName }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridTitle
        title={title}
        buttonName={buttonName} />
      {children}
    </div>
  );
};

export default CardWrapper;
