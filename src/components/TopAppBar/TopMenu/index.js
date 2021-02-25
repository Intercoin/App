
import React, { useState, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Hidden from '@material-ui/core/Hidden';
import Typography from '@material-ui/core/Typography';

import { AppContext } from 'contexts';
import TopAppBarLeft from './TopAppBarLeft';
import TopAppBarRight from './TopAppBarRight';
import TopAppBarMenu from './TopAppBarMenu';
import { TOP_BAR_MENUS } from 'constants/top-menu-items';

import { isEmpty } from 'utils/utility';

const useStyles = makeStyles(theme => ({
  height: {
    height: '100%'
  },
  LogoContainer: {
    display: 'flex',
    flexDirection: 'row',
    // justifyContent: 'space-between',
    alignItems: 'center'
  }
}));
const DesktopMenu = () => {
  const classes = useStyles();
  const { account, topAppMenu } = useContext(AppContext);
  const [open, setOpen] = useState(false);
  console.log('kevin===>', ``)

  return (
    <>
      <TopAppBarLeft setOpen={setOpen} />
      <Typography variant='h5'>{TOP_BAR_MENUS[topAppMenu]?.text}</Typography>
      <div className={classes.LogoContainer}>
        <Hidden smDown implementation='css' className={classes.height}>
          <TopAppBarMenu menuItems={TOP_BAR_MENUS.filter((item, index) => index < (!isEmpty(account) ? 6 : 0))} />
        </Hidden>
      </div>
      <TopAppBarRight />
    </>
  );
};

export default DesktopMenu;
