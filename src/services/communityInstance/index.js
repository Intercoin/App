
import { Contract } from '@ethersproject/contracts'

import CommunityContract from 'contracts/community/CommunityContract';
import RinkebyCommunityContract from 'contracts/Rinkeby/community/RinkebyCommunityContract';
import { COMMUNITY_CONTRACT_ADDRESS } from 'constants/contractAddress';

const communityInstance = (account, chainId, library) => {

    if (chainId) {
        if (CommunityContract.networks && CommunityContract.networks[chainId]) {
            return new Contract(CommunityContract.networks[chainId].address, CommunityContract.abi, library.getSigner(account));
        } else {
            console.log('kevin rinkeby instance area =========================> ')
            return new Contract(COMMUNITY_CONTRACT_ADDRESS, RinkebyCommunityContract.abi, library.getSigner(account));
        }
    }
    return null
}

export {
    communityInstance
}
