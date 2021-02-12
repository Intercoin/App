
import Web3 from 'web3';

import { NETWORK_URL } from 'config';

const useWeb3 = async () => {
  console.log('kevin ===>detecting the connection status===>',window.ethereum )
  if (window.ethereum) {
    window.web3 = new Web3(window.ethereum)
    await window.ethereum.enable()
  }
  else if (window.web3) {
    window.web3 = new Web3(window.web3.currentProvider || NETWORK_URL)
  }
  else {
    window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
  }
};

export {
  useWeb3
};
