
import { Contract } from '@ethersproject/contracts'

import CommunityContract from 'contracts/community/CommunityContract';
import { COMMUNITY_CONTRACT_FACTORY_ADDRESS } from 'constants/contractAddress';
import RinkebyCommunityFactoryContract from 'contracts/Rinkeby/community/RinkebyCommunityFactoryContract';

const communityFactoryInstance = (account, chainId, library) => {

    console.log('kevin===>chainId', chainId)

    if (chainId) {
        if (CommunityContract.networks && CommunityContract.networks[chainId]) {
            return new Contract(CommunityContract.networks[chainId].address, CommunityContract.abi, library.getSigner(account));
        } else {
            return new Contract(COMMUNITY_CONTRACT_FACTORY_ADDRESS, RinkebyCommunityFactoryContract.abi, library.getSigner(account));
        }
    }
}

export {
    communityFactoryInstance
}
