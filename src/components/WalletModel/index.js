
import { AppContext } from 'contexts';
import Web3 from "web3";
import Web3Modal from "web3modal";
import Authereum from "authereum";
import WalletConnectProvider from "@walletconnect/web3-provider";
import {useContext, useState } from "react";

import { useAccount } from 'utils/hooks';

const WalletModel = () => {
  const [loading, setLoading] = useState(false);
  const { setAccountInfoState } = useAccount();

  return {
    get web3Loading() {
      return loading
    },
    async getweb3() {
      setLoading(true);
      let web3Modal;
      let provider;
      let web3;
      let providerOptions;
      providerOptions = {
        metamask: {
          id: "injected",
          name: "MetaMask",
          type: "injected",
          check: "isMetaMask"
        },
        walletconnect: {
          package: WalletConnectProvider, // required
          options: {
            infuraId: "INFURA_ID", // Required
            network: "rinkeby",
            qrcodeModalOptions: {
              mobileLinks: [
                "rainbow",
                "metamask",
                "argent",
                "trust",
                "imtoken",
                "pillar"
              ]
            }
          }
        },
        authereum: {
          package: Authereum // required
        },
      };

      web3Modal = new Web3Modal({
        network: "rinkeby",
        cacheProvider: true,
        providerOptions
      });

      provider = await web3Modal.connect();

      provider.on("accountsChanged", (accounts) => {
          this.getweb3();
        // setAccountInfoState(accounts[0])
        // setAccount(accounts[0])
      });
      provider.on("error", e => console.error("WS Error", e));
      provider.on("end", e => console.error("WS End", e));

      provider.on("disconnect", (error) => {
        console.log('kevin disconnet', error);
        localStorage.clear();
      });

      provider.on("connect", (info) => {
        // localStorage.setItem('account', info);
        console.log('kevin connection is success!!!', info);
      });

      web3 = new Web3(provider);
      setLoading(false);
      return web3;
    },
  }
}

export default WalletModel