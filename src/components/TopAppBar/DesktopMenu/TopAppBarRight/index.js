
import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar, { ConfigProvider } from 'react-avatar';
import { AppContext } from 'contexts';
import Typography from '@material-ui/core/Typography';

import ContainedButton from 'components/UI/Buttons/ContainedButton';

const useStyles = makeStyles(theme => ({
  avatarContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
}));

const TopAppBarRight = () => {
  const { account } = useContext(AppContext);
  const classes = useStyles()
  const accountRigisterHandler = async () => {
    await window.ethereum.enable()
  }

  return (
    <ConfigProvider
      colors={['#FF2929', '#FF7A29', '#FAD02E', '#91FA49', '#36D8B7', '#3B8AFF', '#991EF9', '#FF5DCD']}>
      {account
        ?
        <div className={classes.avatarContainer}>
          <Avatar size="40" round={true} name={"Inter Coin"} />
          <Typography variant='body1' style={{ marginLeft: 8 }}>
            {account.slice(0, 5) + '...' + account.slice(account.length - 5, account.length)}
          </Typography>
        </div>
        :
        <ContainedButton
          style={{ backgroundColor: '#16ACE2' }}
          onClick={accountRigisterHandler}>
          Connecting Account
        </ContainedButton>
      }
    </ConfigProvider>
  );
};

export default TopAppBarRight;
