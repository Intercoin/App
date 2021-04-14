
import axios from 'axios';

const ethScan = async (params) => (
    axios({
        method: 'GET',
        url: 'https://api.etherscan.io/api',
        params: params
    })
);

export {
    ethScan
}
