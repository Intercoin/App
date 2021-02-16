

import AppBar from '@material-ui/core/AppBar';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import clsx from 'clsx';

import DesktopMenu from './DesktopMenu';
import { commonUseStyles } from 'styles/use-styles';

const useStyles = makeStyles(theme => ({
  appBar: {
    [theme.breakpoints.down('md')]: {
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(3)
    },
    [theme.breakpoints.down('sm')]: {
      paddingRight: 0
    },
    [theme.breakpoints.down(340)]: {
      padding: 0,
    },
    boxShadow: 'none',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    zIndex: theme.zIndex.drawer + 3,
    padding: theme.spacing(0, 5, 0, 5),
    backgroundColor: theme.palette.background.default,
    minHeight: theme.spacing(4.5),
    maxWidth: theme.custom.layout.topBarMaxWidth,
    marginLeft: 'auto',
    marginRight: 'auto',
    borderBottom: `none`
  },
  flex: {
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    [theme.breakpoints.down('sm')]: {
      display: 'contents',
    },
    width: '100%',
    paddingLeft: 0,
    paddingRight: 0,
    display: 'flex',
    flexDirection: 'column-reverse'
  },
  horizontalFlex: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  menuIcon: {
    [theme.breakpoints.up('sm')]: {
      position: 'fixed',
      left: theme.spacing(3),
      top: theme.spacing(.5)
    }
  },
  height: {
    height: '100%'
  }
}));

const TopAppBar = () => {
  const classes = useStyles();
  const commonClasses = commonUseStyles();

  return (
    <AppBar
      position='sticky'
      className={classes.appBar}>
      <Toolbar className={classes.flex} >
        <div className={clsx(classes.horizontalFlex, commonClasses.responsiveWidth, classes.height)}>
          <DesktopMenu />
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default TopAppBar;