
import { WalletConnectConnector } from '@web3-react/walletconnect-connector';

import { InjectedConnector } from '@web3-react/injected-connector'

const POLLING_INTERVAL = 12000

// const RPC_URLS: { [chainId] } = {
//   1: process.env.RPC_URL_1 ,
//   4: process.env.RPC_URL_4
// }

export const walletconnect = new WalletConnectConnector({
  rpc: {
    chainId: 1
  },
  bridge: 'https://bridge.walletconnect.org',
  qrcode: true,
  pollingInterval: POLLING_INTERVAL
})

export const injected = new InjectedConnector({ supportedChainIds: [1, 3, 4, 5, 42] })