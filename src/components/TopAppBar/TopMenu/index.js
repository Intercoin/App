
import React, { useState, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Hidden from '@material-ui/core/Hidden';

import { AppContext } from 'contexts';
import TopAppBarLeft from './TopAppBarLeft';
import TopAppBarRight from './TopAppBarRight';
import TopAppBarMenu from './TopAppBarMenu';
import { TOP_BAR_MENUS_DESKTOP } from 'constants/top-menu-items';

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

  return (
    <>
      <TopAppBarLeft setOpen={setOpen} TOP_BAR_MENUS={TOP_BAR_MENUS_DESKTOP} topAppMenu={topAppMenu} />
      <div className={classes.LogoContainer}>
        <Hidden smDown implementation='css' className={classes.height}>
          <TopAppBarMenu topAppMenu={topAppMenu}
            menuItems={TOP_BAR_MENUS_DESKTOP.filter((item, index) => index < (!isEmpty(account) ? 4 : 0))} />
        </Hidden>
      </div>
      <TopAppBarRight />
    </>
  );
};

export default DesktopMenu;
