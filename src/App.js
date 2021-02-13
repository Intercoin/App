
import 'typeface-roboto';
import React, { useState, useEffect, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import loadable from '@loadable/component';
import pMinDelay from 'p-min-delay';

import theme from 'styles/theme';
import Layout from 'hoc/Layout';
import { AppContext } from 'contexts';
import { PAGES } from 'utils/links/pages';
import { useWeb3 } from 'utils/hooks';

const DELAY_TIME = 100;
const Home = loadable(() => pMinDelay(import('containers/Home'), DELAY_TIME));
const Pools = loadable(() => pMinDelay(import('containers/Pools'), DELAY_TIME));

const App = () => {
  const [loadingInfo, setLoadingInfo] = useState(false);
  const [account, setAccount] = useState();
  const [topAppMenu, setTopAppMenu] = useState(0);
  const topMenuChageHandler = (index) => {
    setTopAppMenu(index);
  };
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

  return (
    <AppContext.Provider
      value={{
        loadingInfo,
        setLoadingInfo,
        account,
        topAppMenu,
        topMenuChageHandler
      }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Suspense fallback={<div>Loading...</div>}>
          <Layout>
            <Switch>
              <Route render={() => (
                <Switch>
                  <Route exact path={PAGES.HOME} component={Home} />
                  <Route exact path={PAGES.POOLS} component={Pools} />
                </Switch>
              )} />
            </Switch>
          </Layout>
        </Suspense>
      </ThemeProvider>
    </AppContext.Provider>
  )
};

export default App;
