
import { Contract } from '@ethersproject/contracts'

import StatsContract from 'contracts/stats/Stats';

const statsInstance = (account, chainId, library) => {

    if (!chainId || !StatsContract.networks || !StatsContract.networks[chainId]) {
        return null
    }
    return new Contract(StatsContract.networks[chainId].address, StatsContract.abi, library.getSigner(account));
}

export {
    statsInstance
}
