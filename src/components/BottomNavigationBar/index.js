import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import MoreIcon from '@material-ui/icons/MoreVert';

import { AppContext } from 'contexts';
import TopAppBarMenu from 'components/TopAppBar/DesktopMenu/TopAppBarMenu';
import { TOP_BAR_MENUS } from 'constants/top-menu-items';
import { isEmpty } from 'utils/utility';

const useStyles = makeStyles((theme) => ({
  text: {
    padding: theme.spacing(2, 2, 0),
  },
  list: {
    marginBottom: theme.spacing(2),
  },
  appBar: {
    [theme.breakpoints.up('md')]: {
      display: 'none'
    },
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    top: 'auto',
    bottom: 0,
    backgroundColor: theme.palette.background.main
  },
  grow: {
    flexGrow: 1,
  },
  fabButton: {
    position: 'absolute',
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: '0 auto',
  },
}));

const BottomNavigationBar = () => {
  const classes = useStyles();
  const { account } = useContext(AppContext);

  return (
    <React.Fragment>
      <AppBar position="fixed" color="primary" className={classes.appBar}>
        <Toolbar>
          <TopAppBarMenu mobileMenu menuItems={TOP_BAR_MENUS.filter((item, index) => index < (!isEmpty(account) ? 6 : 1))} />
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
export default BottomNavigationBar