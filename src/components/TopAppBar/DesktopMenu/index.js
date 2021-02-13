
import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { AppContext } from 'contexts';
import TopAppBarLeft from './TopAppBarLeft';
import TopAppBarRight from './TopAppBarRight'
import TopAppBarMenu from './TopAppBarMenu';
import { TOP_BAR_MENUS } from 'constants/top-menu-items';

const useStyles = makeStyles(theme => ({
  height: {
    display: 'flex',
    height: '100%',
    justifyContent: 'space-between'
  },
  LogoContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  }
}));
const DesktopMenu = () => {
  const classes = useStyles();
  const { account } = useContext(AppContext);
  console.log('kevin === ?', account)

  return (
    <>
      <div className={classes.LogoContainer}>
        <TopAppBarLeft />
        <TopAppBarMenu menuItems={TOP_BAR_MENUS.filter((item, index) => index < (account !== null ? 6 : 1))} />
      </div>
      <TopAppBarRight />
    </>
  );
};

export default DesktopMenu;
