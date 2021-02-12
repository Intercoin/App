
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
import { useWeb3 } from 'utils/hooks';

const DELAY_TIME = 100;
const Home = loadable(() => pMinDelay(import('containers/Home'), DELAY_TIME));

const App = () => {
  const [loadingInfo, setLoadingInfo] = useState(false);
  const [account, setAccount] = useState();
  console.log('kevin window.ethereum=>', window.ethereum)
  useWeb3();
  const loadBlockChainDataInfo = () => {
    window.web3.eth.getCoinbase((err, account) => {
      setAccount(account)
    })
  }

  useEffect(() => {
    console.log('kevin checking login')
    loadBlockChainDataInfo();
  }, [window.web3])

  const openWallet = async () => {
    await window.ethereum.enable()
  }

  return (
    <AppContext.Provider
      value={{
        loadingInfo,
        setLoadingInfo,
        account
      }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Suspense fallback={<div>Loading...</div>}>
          <button onClick={openWallet}> OpenWallet </button>
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
