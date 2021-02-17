
import 'typeface-roboto';
import React, { useState, useEffect, Suspense } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import loadable from '@loadable/component';
import pMinDelay from 'p-min-delay';

import theme from 'styles/theme';
import Layout from 'hoc/Layout';
import { AppContext } from 'contexts';
import { PAGES } from 'utils/links/pages';
import { useWeb3 } from 'utils/hooks';
import { TOP_BAR_MENUS } from 'constants/top-menu-items';

const DELAY_TIME = 100;
const Home = loadable(() => pMinDelay(import('containers/Home'), DELAY_TIME));
const Communities = loadable(() => pMinDelay(import('containers/Communities'), DELAY_TIME));
const Polls = loadable(() => pMinDelay(import('containers/Polls'), DELAY_TIME));
const AddEditPolls = loadable(() => pMinDelay(import('containers/Polls/AddEditPolls'), DELAY_TIME));

const App = ({ location, history }) => {
  const [loadingInfo, setLoadingInfo] = useState(false);
  const [account, setAccount] = useState();
  const [topAppMenu, setTopAppMenu] = useState('');
  const [layout, setLayout] = useState(true)

  useWeb3();
  const loadBlockChainDataInfo = () => {
    window.web3.eth?.getCoinbase((err, account) => {
      setAccount(account)
    })
  }

  useEffect(() => {
    loadBlockChainDataInfo();
  }, [])

  window.ethereum.on('accountsChanged', function (accounts) {
    loadBlockChainDataInfo();
  });

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
        account,
        topAppMenu,
        setTopAppMenu
      }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Suspense fallback={<div>Loading...</div>}>
          <Layout layout={layout}>
            <Switch>
              <Route render={() => (
                <Switch>
                  <Route exact path={PAGES.Home} component={Home} />
                  <Route exact path={PAGES.Communities} component={Communities} />
                  <Route exact path={PAGES.POLLS} component={Polls} />
                  <Route exact path={`${PAGES.POLLS}/:_id`} component={AddEditPolls} />
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
