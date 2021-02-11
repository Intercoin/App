
import Web3 from 'web3';

import { NETWORK_URL } from 'config';

const useWeb3 = () => {
  let web3
  let web3Provider

  if (typeof web3 !== 'undefined') {
    web3Provider = web3?.currentProvider
  } else {
    web3Provider = new Web3.providers.HttpProvider(NETWORK_URL)
  }
  web3 = new Web3(web3Provider)
  return {
    web3,
    web3Provider
  }
};

export {
  useWeb3
};
