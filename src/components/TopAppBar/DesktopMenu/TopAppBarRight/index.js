
import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppContext } from 'contexts';

import { useWeb3 } from 'utils/hooks';
import ContainedButton from 'components/UI/Buttons/ContainedButton';

const useStyles = makeStyles(theme => ({
}));

const TopAppBarRight = () => {
  const { account } = useContext(AppContext);

  const accountRigisterHandler = async () => {
    await window.ethereum.enable()
  }

  return (
    <div>
      <ContainedButton
        style={{ backgroundColor: '#16ACE2' }}
        onClick={accountRigisterHandler}>
        {account ? account.slice(0, 5) + '...' + account.slice(account.length - 5, account.length) : 'Connecting Account'}
      </ContainedButton>
    </div>
  );
};

export default TopAppBarRight;
