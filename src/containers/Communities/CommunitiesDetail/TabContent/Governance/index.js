
import React, { useState, useCallback } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

import IntercoinAccordion from 'components/UI/IntercoinAccordion';
import OwnerShipContent from './OwnerShipContent';
import RolesPermissions from './RolesPermissions';
import { GOVERNANCE_PANEL } from 'constants/common';

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
  const [expanded, setExpanded] = useState(`${GOVERNANCE_PANEL}0`);

  const gobernanceBoards = [
    {
      title: `Ownership & Succession`,
      content: <OwnerShipContent />
    },
    {
      title: `Roles and Permissions`,
      content: <RolesPermissions />
    }
  ]


  const expandHandler = useCallback(panel => {
    setExpanded(panel);
  }, [setExpanded]);

  return (
    <div className={classes.root}>
      {gobernanceBoards.map((gobernanceBoard, index) =>
        <IntercoinAccordion
          key={index}
          title={gobernanceBoard.title}
          content={gobernanceBoard.content}
          selectedPanel={expanded}
          panel={`${GOVERNANCE_PANEL}${index}`}
          onExpand={expandHandler}
        />
      )}
    </div >
  );
};

export default Governance;
