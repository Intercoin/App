
import Web3 from 'web3';

import { NETWORK_URL } from 'config';

const useWeb3 = async () => {
  if (window.ethereum) {
    window.web3 = new Web3(window.ethereum)
    await window.ethereum.enable()
  }
  else if (window.web3) {
    window.web3 = new Web3(window.web3.currentProvider || NETWORK_URL)
  }
  else {
    window.location.assign("https://chrome.google.com/webstore/detail/nkbihfbeogaeaoehlefnkodbefgpgknn")
  }
};

export {
  useWeb3
};
