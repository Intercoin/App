
import Authereum from "authereum";
import WalletConnectProvider from "@walletconnect/web3-provider";
import Fortmatic from "fortmatic";
import Torus from "@toruslabs/torus-embed";
import { Bitski } from "bitski";

const providerOptions = {
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
  fortmatic: {
    package: Fortmatic, // required
    options: {
      key: "FORTMATIC_KEY" // required
    }
  },
  torus: {
    package: Torus, // required
    options: {
      enableLogging: false, // optional
      buttonPosition: "bottom-left", // optional
      buildEnv: "production", // optional
      showTorusButton: true, // optional
      enabledVerifiers: {
        // optional
        google: false // optional
      }
    }
  },
  bitski: {
    package: Bitski, // required
    options: {
      clientId: "BITSKI_CLIENT_ID", // required
      callbackUrl: "BITSKI_CALLBACK_URL" // required
    }
  }
};

export default providerOptions;