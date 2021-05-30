
import { makeStyles } from '@material-ui/core/styles';
import Hidden from '@material-ui/core/Hidden';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';

import LogoWithTitle from 'components/LogoWithTitle';
import { isEmpty } from 'utils/utility';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  margin: {
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    },
    margin: `${theme.spacing(0)} !important`,
  },
  height: {
    paddingLeft: theme.spacing(1.5)
  },
  avatarContainer: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: theme.spacing(1)
  },
  large: {
    width: theme.spacing(5),
    height: theme.spacing(5),
    marginRight: theme.spacing(1)
  },
}));

const TopAppBarLeft = ({ setOpen, topAppMenu, TOP_BAR_MENUS, connector, chainId, account }) => {
  const classes = useStyles();

  const gettingWalletLogo = (connector) => {
    console.log('kevin connector', connector?.constructor.name)
    switch (connector?.constructor.name) {
      case 'InjectedConnector':
        return { logo: '/assets/images/connectors/TrustWallet.png', title: 'Trust Wallet' }
    }
  }

  const selectingItem = (value) => {
    switch (value) {
      case 10:
        return 'Profile'
      case 11:
        return (<div className={classes.avatarContainer}>
          {account&&<Avatar src={gettingWalletLogo(connector)?.logo} variant='square' className={classes.large} />}
          <Typography variant='h4'> {gettingWalletLogo(connector)?.title} </Typography>
        </div >
        )
    }
  }

  return (
    <div className={classes.root}>
      <LogoWithTitle setOpen={setOpen} logoWidth={80} logoHeight={80} titleVariant={'h6'} className={classes.margin} />
      <Hidden mdUp implementation='css' className={classes.height}>
        <Typography variant='h3'>{!isEmpty(TOP_BAR_MENUS[topAppMenu]) ? TOP_BAR_MENUS[topAppMenu]?.text : selectingItem(topAppMenu)}</Typography>
      </Hidden>
    </div>
  );
};

export default TopAppBarLeft;
