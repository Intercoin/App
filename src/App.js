
import 'typeface-roboto';
import React, { useState, useEffect, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import loadable from '@loadable/component';
import pMinDelay from 'p-min-delay';
import Web3 from 'web3';

import theme from 'styles/theme';
import { AppContext } from 'contexts';
import { PAGES } from 'utils/links/pages';
import { NETWORK_URL } from 'config';

const DELAY_TIME = 100;
const Home = loadable(() => pMinDelay(import('containers/Home'), DELAY_TIME));

const App = () => {
  const [loadingInfo, setLoadingInfo] = useState(false);
  const [accountAddress, setAccountAddress] = useState();
  const loadBlockChainDataInfo = async () => {
    const web3 = new Web3(NETWORK_URL || Web3.givenProvider)
    const network = await web3.eth.net.getNetworkType();
    const accounts = await web3.eth.getAccounts();
    setAccountAddress(accounts[0])
  }

  useEffect(() => {
    loadBlockChainDataInfo();
  }, [])

  return (
    <AppContext.Provider
      value={{
        loadingInfo,
        setLoadingInfo,
        accountAddress
      }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route render={() => (
              <Switch>
                <Route exact path={PAGES.HOME} component={Home} />
              </Switch>
            )} />
          </Switch>
        </Suspense>
      </ThemeProvider>
    </AppContext.Provider>
  )
};

export default App;
