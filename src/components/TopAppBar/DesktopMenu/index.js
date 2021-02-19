
import React, { useState, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Hidden from '@material-ui/core/Hidden';

import { AppContext } from 'contexts';
import TopAppBarLeft from './TopAppBarLeft';
import TopAppBarRight from './TopAppBarRight'
import TopAppBarMenu from './TopAppBarMenu';
import { TOP_BAR_MENUS } from 'constants/top-menu-items';
import MobileMenu from 'components/TopAppBar/MobileMenu';

import { isEmpty } from 'utils/utility';

const useStyles = makeStyles(theme => ({
  height: {
    height: '100%'
  },
  LogoContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  }
}));
const DesktopMenu = () => {
  const classes = useStyles();
  const { account, state } = useContext(AppContext);
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className={classes.LogoContainer}>
        <MobileMenu setOpen={setOpen} open={open} />
        <TopAppBarLeft setOpen = {setOpen} />
        <Hidden mdDown implementation='css' className={classes.height}>
          <TopAppBarMenu menuItems={TOP_BAR_MENUS.filter((item, index) => index < (!isEmpty(state.address) ? 6 : 1))} />
        </Hidden>
      </div>
      <TopAppBarRight />
    </>
  );
};

export default DesktopMenu;
