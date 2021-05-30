
import 'typeface-roboto';
import React, { useState, useEffect, Suspense } from 'react';
import { useSnackbar } from 'notistack';
import { makeStyles } from '@material-ui/core/styles';
import { useWeb3React } from '@web3-react/core'
import { useEagerConnect, useInactiveListener } from 'utils/hooks.js'
import { Switch, Route, withRouter } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import loadable from '@loadable/component';
import { SnackbarProvider } from 'notistack';
import pMinDelay from 'p-min-delay';

import theme from 'styles/theme';
import Layout from 'hoc/Layout';
import { AppContext } from 'contexts';
import { PAGES } from 'utils/links/pages';
import { TOP_BAR_MENUS } from 'constants/top-menu-items';
import WalletModal from 'components/WalletModal';
import IntercoinLoading from 'components/IntercoinLoading'
import Notifications from 'components/Notifications';
import { formatEther } from '@ethersproject/units'
import { isEmpty } from 'utils/utility';

const DELAY_TIME = 100;
const Home = loadable(() => pMinDelay(import('containers/Home'), DELAY_TIME));
const Communities = loadable(() => pMinDelay(import('containers/Communities'), DELAY_TIME));
const CommunitiesDetail = loadable(() => pMinDelay(import('containers/Communities/CommunitiesDetail'), DELAY_TIME));
const Polls = loadable(() => pMinDelay(import('containers/Polls'), DELAY_TIME));
const AddEditPolls = loadable(() => pMinDelay(import('containers/Polls/AddEditPolls'), DELAY_TIME));
const Profile = loadable(() => pMinDelay(import('containers/Profile'), DELAY_TIME));
const WalletDetail = loadable(() => pMinDelay(import('containers/WalletDetail'), DELAY_TIME));
const Currencies = loadable(() => pMinDelay(import('containers/Currencies'), DELAY_TIME));
const Income = loadable(() => pMinDelay(import('containers/Income'), DELAY_TIME));
const Contests = loadable(() => pMinDelay(import('containers/Contests'), DELAY_TIME));
const SharedControl = loadable(() => pMinDelay(import('containers/SharedControl'), DELAY_TIME));

const useStyles = makeStyles(() => ({
  primaryTextColor: {
    color: '#fff'
  }
}));

const App = ({ location, history }) => {
  const classes = useStyles();
  const context = useWeb3React();
  const { connector, library, chainId, account, activate, deactivate, active, error } = context;

  const [isWalletDialog, setIsWalletDialog] = useState();
  const [activatingConnector, setActivatingConnector] = useState();
  const [balance, setBalance] = useState()

  useEffect(() => {
    if (activatingConnector && activatingConnector === connector) {
      setActivatingConnector(undefined)
    }
  }, [activatingConnector, connector])

  useEffect(() => {
    if (!!account && !!library) {
      let stale = false

      library
        .getBalance(account)
        .then((balance) => {
          if (!stale) {
            setBalance(balance)
          }
        })
        .catch(() => {
          if (!stale) {
            setBalance(null)
          }
        })

      return () => {
        stale = true
        setBalance(undefined)
      }
    }
  }, [account, library, chainId])

  const triedEager = useEagerConnect();
  useInactiveListener(!triedEager || !!activatingConnector)

  const [loadingInfo, setLoadingInfo] = useState(false);
  const [topAppMenu, setTopAppMenu] = useState('');
  const [layout, setLayout] = useState(true)

  const openCloseDialogHandler = show => () => {
    setIsWalletDialog(show)
  }

  useEffect(() => {
    TOP_BAR_MENUS.map((TOP_BAR_MENU, index) => {
      if (TOP_BAR_MENU.url === location.pathname || location.pathname.includes(TOP_BAR_MENU.url)) {
        setTopAppMenu(index)
        setLayout(true)
      }
      else {
        if (location.pathname === PAGES.PROFILE.url) {
          setTopAppMenu(10)
        }
        if (location.pathname === PAGES.WALLET_DETAIL.url) {
          setTopAppMenu(11)
        }
      }
    });

    if (location.pathname === PAGES.CURRENCIES.url) {
      setLayout(false)
    }
  }, [location.pathname, topAppMenu]);

  useEffect(() => {
    if (isWalletDialog) {
      document.body.style.overflow = 'hidden';
    }
    else {
      document.body.style.overflow = 'unset';
    }
  }, [isWalletDialog])

  return (
    <AppContext.Provider
      value={{
        loadingInfo,
        library,
        active,
        setLoadingInfo,
        topAppMenu,
        setTopAppMenu,
        setIsWalletDialog,
        account,
        chainId,
        deactivate,
        balance,
        connector
      }}>
      <ThemeProvider theme={theme}>
        <SnackbarProvider
          classes={{
            variantSuccess: classes.primaryTextColor,
            variantError: classes.primaryTextColor,
            variantWarning: classes.primaryTextColor,
            variantInfo: classes.primaryTextColor
          }}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left'
          }}
          maxSnack={3}>
          <CssBaseline />
          <Notifications notifications={''} notificationType={'success'} />
          <Suspense fallback={<IntercoinLoading wholeOverlay />}>
            <Layout layout={layout} account={account}>
              {
                isWalletDialog &&
                <WalletModal
                  headerTitle={'Select a Wallet'}
                  open={true}
                  onClose={openCloseDialogHandler(false)}
                  setActivatingConnector={setActivatingConnector}
                  activatingConnector={activatingConnector}
                  triedEager={triedEager}
                  context={context}
                />
              }
              <Switch>
                <Route render={() => (
                  account ?
                    <Switch>
                      <Route exact path={PAGES.HOME.url} component={Home} />
                      <Route exact path={PAGES.COMMUNITIES.url} component={Communities} />
                      <Route exact path={`${PAGES.COMMUNITIES.url}/i`} component={Communities} />
                      <Route exact path={`${PAGES.COMMUNITIES.url}/address`} component={CommunitiesDetail} />
                      <Route exact path={PAGES.POLLS.url} component={Polls} />
                      <Route exact path={`${PAGES.POLLS.url}/:_id`} component={AddEditPolls} />
                      <Route exact path={PAGES.CURRENCIES.url} component={Currencies} />
                      <Route exact path={PAGES.PROFILE.url} component={Profile} />
                      <Route exact path={PAGES.INCOME.url} component={Income} />
                      <Route exact path={PAGES.CONTESTS.url} component={Contests} />
                      <Route exact path={PAGES.SHARED_CONTROL.url} component={SharedControl} />
                      <Route exact path={PAGES.WALLET_DETAIL.url} component={WalletDetail} />
                    </Switch>
                    :
                    <Switch>
                      <Route exact path={PAGES.HOME.url} component={Home} />
                      <Route exact path={PAGES.CURRENCIES.url} component={Currencies} />
                    </Switch>
                )} />
              </Switch>
            </Layout>
          </Suspense>
        </SnackbarProvider>
      </ThemeProvider>
    </AppContext.Provider>
  )
};

export default withRouter(App);