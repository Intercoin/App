
import { WalletConnectConnector } from '@web3-react/walletconnect-connector';
import { FortmaticConnector } from '@web3-react/fortmatic-connector';
import { InjectedConnector } from '@web3-react/injected-connector';


const POLLING_INTERVAL = 12000
// const RPC_URLS: { [chainId] } = {
//   1: process.env.RPC_URL_1 ,
//   4: process.env.RPC_URL_4
// }

export const walletconnect = new WalletConnectConnector({
  rpc: {
    chainId: [1, 3, 4, 5, 42]
  },
  bridge: 'https://bridge.walletconnect.org',
  qrcode: true,
  pollingInterval: POLLING_INTERVAL
})

export const injected = new InjectedConnector({ supportedChainIds: [1, 3, 4, 5, 42, 1337] })


export const intercoinToken = new InjectedConnector({
  address: '0x6ef5febbd2a56fab23f18a69d3fb9f4e2a70440b',
  decimals: '18',
  type: 'ERC20',
  supportedChainIds: [1, 3, 4, 5, 42]
})
// export const intercoin = new

export const xDai = new InjectedConnector({
  rpc: {
    chainId: 1
  },
  bridge: 'https://rpc.xdaichain.com/',
  supportedChainIds: [1, 3, 4, 5, 42],
  symbox: 'xDai',
  pollingInterval: POLLING_INTERVAL
})

export const fortmatic = new FortmaticConnector({ apiKey: 'pk_test_D58C7F46E173BEDB', chainId: 4, pollingInterval: 15000 }) 

//Test Rinkeby, Kovan, Ropsten : pk_test_D58C7F46E173BEDB
//Production localhost : pk_live_724ABCF7B9489C5C