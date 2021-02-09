
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

const theme = responsiveFontSizes(createMuiTheme({
  palette: {
    primary: {
      light: '#292C41',
      main: '#141720',
      dark: '#161A29',
      contrastText: '#fff',
    },
    secondary: {
      light: '#555e6c',
      main: '#A20F3C',
      dark: '#1e2532',
      contrastText: '#6B76A1'
    },
    error: {
      light: '#EE2741',
      main: '#A20F3C',
      dark: '#860029',
      contrastText: '#fff'
    },
    background: {
      default: '#1B1F2E',
      sideDrawer: '#0f1118',
      selectedMenu: '#292C4130',
      main: '#232637',
      overlay: '#00000099'
    },
    text: {
      primary: '#fff',
      secondary: '#555E7F',
      inactiveSubMenu: '#92959e',
      notification: '#8D9BD4',
      hoverText: '#16ACE2'
    },
  },
  custom: {
    palette: {
      green: '#4caf50',
      blueGrey: '#5c739c',
      lightGrey: '#D8D8D8',
      darkRed: '#ba1a48',
      grey: '#99A5D3',
      lightBlue: '#1f2334'
    },
    layout: {
      topAppBarHeight: 80,
      footerHeight: 173,
      drawerWidth: 268,
    },
  }
}));

export default theme;