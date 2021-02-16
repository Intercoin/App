
import React, { useState } from 'react';
import Web3 from 'web3';
import { SizeMe } from 'react-sizeme';

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

const useSizeMe = (render, options) => {
  const [currentSize, setSize] = useState({ width: null, height: null });
  return [
    <SizeMe {...options}>
      {({ size }) => {
        if (
          size.width !== currentSize.width ||
          size.height !== currentSize.height
        ) {
          setSize(size);
        }
        return render({ ...size });
      }}
    </SizeMe>,
    currentSize.width,
    currentSize.height,
  ];
}


export {
  useWeb3,
  useSizeMe
};
