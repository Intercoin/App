
import 'typeface-roboto';
import React, { useState, useEffect, Suspense } from 'react';
//  web3 test modal ray
import { useWeb3React } from '@web3-react/core'
import { useEagerConnect, useInactiveListener } from 'utils/hooks.js'
//web3 test modal ray
import { Switch, Route, withRouter } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import loadable from '@loadable/component';
import pMinDelay from 'p-min-delay';

import theme from 'styles/theme';
import Layout from 'hoc/Layout';
import { AppContext } from 'contexts';
import { PAGES } from 'utils/links/pages';
import { TOP_BAR_MENUS } from 'constants/top-menu-items';
import WalletModal from 'components/WalletModal';

const DELAY_TIME = 100;
const Home = loadable(() => pMinDelay(import('containers/Home'), DELAY_TIME));
const Communities = loadable(() => pMinDelay(import('containers/Communities'), DELAY_TIME));
const Polls = loadable(() => pMinDelay(import('containers/Polls'), DELAY_TIME));
const AddEditPolls = loadable(() => pMinDelay(import('containers/Polls/AddEditPolls'), DELAY_TIME));
const Profile = loadable(() => pMinDelay(import('containers/Profile'), DELAY_TIME));

const App = ({ location }) => {
  const context = useWeb3React();
  const { connector, library, chainId, account, activate, deactivate, active, error } = context
  const [isWalletDialog, setIsWalletDialog] = useState();
  const [activatingConnector, setActivatingConnector] = React.useState()
  React.useEffect(() => {
    if (activatingConnector && activatingConnector === connector) {
      setActivatingConnector(undefined)
    }
  }, [activatingConnector, connector])

  // handle logic to eagerly connect to the injected ethereum provider, if it exists and has granted access already
  const triedEager = useEagerConnect()

  // handle logic to connect in reaction to certain events on the injected ethereum provider, if it exists
  useInactiveListener(!triedEager || !!activatingConnector)

  const [loadingInfo, setLoadingInfo] = useState(false);
  const [topAppMenu, setTopAppMenu] = useState('');
  const [layout, setLayout] = useState(true)
  //  web3 test modal ray

  const openCloseDialogHandler = show => () => {
    setIsWalletDialog(show)
  }

  useEffect(() => {
    TOP_BAR_MENUS.map((TOP_BAR_MENU, index) => {
      if (TOP_BAR_MENU.url === location.pathname || location.pathname.includes(TOP_BAR_MENU.url)) {
        setTopAppMenu(index)
        setLayout(true)
      }
    });
    if (location.pathname === '/') {
      setLayout(false)
    }
  }, [location]);

  return (
    <AppContext.Provider
      value={{
        loadingInfo,
        setLoadingInfo,
        topAppMenu,
        setTopAppMenu,
        setIsWalletDialog,
        account,
        deactivate
      }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Suspense fallback={<div>Loading...</div>}>
          <Layout layout={layout}>
            {
              isWalletDialog &&
              <WalletModal
                headerTitle={'Select a Wallet'}
                open={true}
                onClose={openCloseDialogHandler(false)}
                setActivatingConnector={setActivatingConnector}
                activatingConnector={activatingConnector}
                context={context}
              />
            }
            <Switch>
              <Route render={() => (
                <Switch>
                  <Route exact path={PAGES.HOME} component={Home} />
                  <Route exact path={PAGES.COMMUNITIES} component={Communities} />
                  <Route exact path={PAGES.POLLS} component={Polls} />
                  <Route exact path={`${PAGES.POLLS}/:_id`} component={AddEditPolls} />
                  <Route exact path={PAGES.PROFILE} component={Profile} />
                </Switch>
              )} />
            </Switch>
          </Layout>
        </Suspense>
      </ThemeProvider>
    </AppContext.Provider>
  )
};

export default withRouter(App);
