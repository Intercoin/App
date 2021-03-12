
import { useState, useEffect, useMemo } from 'react'
import { useWeb3React } from '@web3-react/core'

import { walletconnect, injected, intercoinToken, xDai } from 'constants/connectors';
import { communityInstance } from 'services/communityInstance';
import { isEmpty } from 'utils/utility';

const useEagerConnect = () => {
  const { activate, active } = useWeb3React()

  const [tried, setTried] = useState(false)

  useEffect(() => {
    injected.isAuthorized().then((isAuthorized) => {
      if (isAuthorized) {
        activate(injected, undefined, true).catch(() => {
          setTried(true)
        })
      } else {
        setTried(true)
      }
    })
  }, []) // intentionally only running on mount (make sure it's only mounted once :))
  // if the connection worked, wait until we get confirmation of that to flip the flag
  useEffect(() => {
    if (!tried && active) {
      setTried(true)
    }
  }, [tried, active])

  return tried
}

const useInactiveListener = (suppress) => {
  const { active, error, activate, deactivate } = useWeb3React()

  useEffect(() => {
    const { ethereum } = window
    if (ethereum && ethereum.on && !active && !error && !suppress) {
      const handleConnect = () => {
        console.log("Handling 'connect' event")
        activate(injected)
      }
      const handleChainChanged = (chainId) => {
        console.log("Handling 'chainChanged' event with payload", chainId)
        activate(injected)
      }
      const handleAccountsChanged = (accounts) => {
        console.log("Handling 'accountsChanged' event with payload", accounts)
        if (accounts.length > 0) {
          activate(injected)
        }
      }
      const handleNetworkChanged = (networkId) => {
        console.log("Handling 'networkChanged' event with payload", networkId)
        activate(injected)
      }

      const closeWallet = () => {
        console.log("Handling 'disconnect' event")
        deactivate(injected)
      }

      ethereum.on('connect', handleConnect)
      ethereum.on('chainChanged', handleChainChanged)
      ethereum.on('accountsChanged', handleAccountsChanged)
      ethereum.on('networkChanged', handleNetworkChanged)
      ethereum.on('disconnect', closeWallet)
      return () => {
        if (ethereum.removeListener) {
          ethereum.removeListener('connect', handleConnect)
          ethereum.removeListener('chainChanged', handleChainChanged)
          ethereum.removeListener('accountsChanged', handleAccountsChanged)
          ethereum.removeListener('networkChanged', handleNetworkChanged)
          ethereum.on('disconnect', closeWallet)
        }
      }
    }
  }, [active, error, suppress, activate])
}

const useBlockNumber = () => {
  const { library } = useWeb3React()
  const [blockNumber, setBlockNumber] = useState(-1)

  useEffect(() => {
    if (!library) {
      return
    }
    const t = setInterval(async () => {
      try {
        setBlockNumber(await library.getBlockNumber())
      } catch (error) {
        console.error('failed to get block number', error)
      }

      return () => {
        clearInterval(t)
      }
    }, 1000)

  }, [library])
  return blockNumber
}

const useOwner = () => {
  const { account, chainId, library } = useWeb3React()
  const [owner, setOwner] = useState();
  const community = communityInstance(account, chainId, library);

  useMemo(() => {
    Promise.resolve(community.owner()).then(function (owner) {
      setOwner(owner)
    }).catch(function (error) {
      console.log('owner===>', error)
    })
  }, [])
  return owner
}

const useGetAccountRules = (account) => {
  const { chainId, library } = useWeb3React()
  const community = communityInstance(account, chainId, library);
  const [ownRoles, setOwnRoles] = useState([]);
  const [accountRulesloading, setAccountRulesloading] = useState(false);

  useMemo(() => {
    if (isEmpty(community) || isEmpty(account) || isEmpty(library)) {
      return null
    }

    if (!isEmpty(account) && !isEmpty(community)) {
      setAccountRulesloading(true)
      Promise.resolve(community['getRoles(address)'](account)).then(function (ownRoles) {
        setOwnRoles(ownRoles)
        setAccountRulesloading(false)
      }).catch(function (error) {
        setAccountRulesloading(false)
        console.log('getAccountRoles===>', error)
      })
    }
  }, [account])

  return { ownRoles, accountRulesloading }
}

const useAllRules = () => {
  const { chainId, account, library } = useWeb3React()
  const community = communityInstance(account, chainId, library);
  const [allRoles, setAllRoles] = useState([]);
  const [allRolesLoading, setAllRolesLoading] = useState(false);

  useMemo(() => {
    if (isEmpty(community) || isEmpty(account) || isEmpty(library)) {
      return null
    }
    Promise.resolve(community['getRoles()']()).then(function (allRoles) {
      setAllRoles(allRoles)
      setAllRolesLoading(false)
    }).catch(function (error) {
      setAllRolesLoading(false)
      console.log('getAllRolesError===>', error)
    })
  }, [])

  return { allRoles, allRolesLoading }
}

export {
  useEagerConnect,
  useInactiveListener,
  useBlockNumber,
  useOwner,
  useGetAccountRules,
  useAllRules
};
