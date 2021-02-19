
import 'typeface-roboto';
import React, { useState, useEffect, Suspense } from 'react';

//  web3 test modal ray
import Web3Modal from "web3modal";
import Web3 from "web3";
import { apiGetAccountAssets } from "utils/helper/api";
//web3 test modal ray

import { Switch, Route, withRouter } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import loadable from '@loadable/component';
import pMinDelay from 'p-min-delay';

import providerOptions from 'constants/provider-option';
import theme from 'styles/theme';
import Layout from 'hoc/Layout';
import { AppContext } from 'contexts';
import { PAGES } from 'utils/links/pages';
import { TOP_BAR_MENUS } from 'constants/top-menu-items';

const DELAY_TIME = 100;
const Home = loadable(() => pMinDelay(import('containers/Home'), DELAY_TIME));
const Communities = loadable(() => pMinDelay(import('containers/Communities'), DELAY_TIME));
const Polls = loadable(() => pMinDelay(import('containers/Polls'), DELAY_TIME));
const AddEditPolls = loadable(() => pMinDelay(import('containers/Polls/AddEditPolls'), DELAY_TIME));

const App = ({ location }) => {
  const INITIAL_STATE = {
    fetching: false,
    address: "",
    web3: null,
    provider: null,
    connected: false,
    chainId: 1,
    networkId: 1,
    assets: [],
    showModal: false,
    pendingRequest: false,
    result: null
  };
  const [loadingInfo, setLoadingInfo] = useState(false);
  const [topAppMenu, setTopAppMenu] = useState('');
  const [layout, setLayout] = useState(true)
  //  web3 test modal ray
  const [state, setState] = useState({ ...INITIAL_STATE })

  const initWeb3 = (provider) => {
    const web3 = new Web3(provider);
    web3.eth.extend({
      methods: [
        {
          name: "chainId",
          call: "eth_chainId",
          outputFormatter: web3.utils.hexToNumber
        }
      ]
    });

    return web3;
  }

  let web3Modal = new Web3Modal({
    network: "rinkeby",
    cacheProvider: true,
    providerOptions,
    theme: {
      background: "#292C40",
      main: "rgb(199, 199, 199)",
      secondary: "rgb(136, 136, 136)",
      border: "rgba(195, 195, 195, 0.14)",
      hover: "#1B1F2E"
    }
  });

  useEffect(() => {
    if (web3Modal.cachedProvider) {
      onConnect();
    }
  }, [])

  const onConnect = async () => {
    const provider = await web3Modal.connect();

    await subscribeProvider(provider);

    const web3 = initWeb3(provider);
    const accounts = await web3.eth.getAccounts();
    const address = accounts[0];
    const networkId = await web3.eth.net.getId();
    const chainId = await web3.eth.chainId();

    await setState({
      web3,
      provider,
      connected: true,
      address,
      chainId,
      networkId
    });
    // await getAccountAssets();
  };

  const subscribeProvider = async (provider) => {
    if (!provider.on) {
      return;
    }
    provider.on("close", () => resetApp());
    provider.on("accountsChanged", async (accounts = []) => {
      await setState({ address: accounts[0] });
      // await getAccountAssets();
    });
    provider.on("chainChanged", async (chainId) => {
      const { web3 } = state;
      const networkId = await web3.eth.net.getId();
      await setState({ chainId, networkId });
      // await getAccountAssets();
    });

    provider.on("networkChanged", async (networkId) => {
      const { web3 } = state;
      const chainId = await web3.eth.chainId();
      await setState({ chainId, networkId });
      // await getAccountAssets();
    });

    provider.on("disconnect", (error) => {
      console.log('kevin provider disconnect===>', error);
    });
  };

  const getAccountAssets = async () => {
    const { address, chainId } = state;
    console.log('kevin address===>', address, chainId)
    setState({ fetching: true });
    try {
      const assets = await apiGetAccountAssets(address, chainId);
      await setState({ fetching: false, assets });
    } catch (error) {
      console.error(error); // tslint:disable-line
      await setState({ fetching: false });
    }
  };

  const resetApp = async () => {
    const { web3 } = state;
    if (web3 && web3.currentProvider && web3.currentProvider.close) {
      await web3.currentProvider.close();
    }
    await web3Modal.clearCachedProvider();
    setState({ ...INITIAL_STATE });
  }
  //web3 test modal ray

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
        state,
        topAppMenu,
        setTopAppMenu,
        onConnect
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
