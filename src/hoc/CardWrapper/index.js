
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import GridTitle from 'components/GridTitle';

const useStyles = makeStyles(theme => ({
  root: {
    [theme.breakpoints.down('sm')] : {
      padding: theme.spacing(2, 1.5, 0, 1.5),
    },
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

const CardWrapper = ({ children, title, buttonName, center }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridTitle
        center = {center}
        title={title}
        buttonName={buttonName} />
      {children}
    </div>
  );
};

export default CardWrapper;
