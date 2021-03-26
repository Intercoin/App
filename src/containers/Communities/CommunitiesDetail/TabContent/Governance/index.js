
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

import OwnerShipContent from './OwnerShipContent';
import RolesPermissions from './RolesPermissions'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  tabHeader: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: theme.spacing(3)
  }
}));

const Governance = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.tabHeader} >
        <Typography variant='h4' style={{ fontWeight: 'bold' }}>Ownership & Succession</Typography>
      </div>
      <OwnerShipContent />
      <div className={classes.tabHeader} >
        <Typography variant='h4' style={{ fontWeight: 'bold' }}>Roles and Permissions</Typography>
      </div>
      <RolesPermissions />
    </div >
  );
};

export default Governance;
