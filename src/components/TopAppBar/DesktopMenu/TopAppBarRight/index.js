
import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar, { ConfigProvider } from 'react-avatar';
import { AppContext } from 'contexts';
import Typography from '@material-ui/core/Typography';

// import WalletModel from 'components/WalletModel';
import ContainedButton from 'components/UI/Buttons/ContainedButton';
import { isCompositeComponent } from 'react-dom/test-utils';
import { isEmpty } from 'utils/utility';

const useStyles = makeStyles(theme => ({
  avatarContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
}));

const TopAppBarRight = () => {
  const { state, onConnect } = useContext(AppContext);
  const classes = useStyles()

  const connectWallet = async() => {
    onConnect();
  };

  return (
    <ConfigProvider
      colors={['#FF2929', '#FF7A29', '#FAD02E', '#91FA49', '#36D8B7', '#3B8AFF', '#991EF9', '#FF5DCD']}>
      {!isEmpty(state.address)
        ?
        <div className={classes.avatarContainer}>
          <Avatar size="32" round={true} name={"Inter Coin"} />
          <Typography variant='body1' style={{ marginLeft: 8, marginRight:4 }}>
            {state.address.slice(0, 5) + '...' + state.address.slice(state.address.length - 5, state.address.length)}
          </Typography>
        </div>
        :
        <ContainedButton
          style={{ backgroundColor: '#16ACE2' }}
          onClick={connectWallet}>
          Connect Wallet
        </ContainedButton>
      }
    </ConfigProvider>
  );
};

export default TopAppBarRight;
