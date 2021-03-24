
import { Contract } from '@ethersproject/contracts'

import CommunityContract from 'contracts/community/CommunityContract';

const communityInstance = (account, chainId, library) => {

    if (!chainId || !CommunityContract.networks || !CommunityContract.networks[chainId]) {
        return null
    }
    return new Contract(CommunityContract.networks[chainId].address, CommunityContract.abi, library.getSigner(account));
}

export {
    communityInstance
}
