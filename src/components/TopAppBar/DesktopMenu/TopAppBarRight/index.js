
import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar, { ConfigProvider } from 'react-avatar';
import { AppContext } from 'contexts';
import Typography from '@material-ui/core/Typography';
// import WalletModel from 'components/WalletModel';
import ContainedButton from 'components/UI/Buttons/ContainedButton';
import IntercoinDownMenu from 'components/IntercoinDownMenu';
import { isEmpty } from 'utils/utility';

const useStyles = makeStyles(theme => ({
  avatarContainer: {
    [theme.breakpoints.down('sm')]: {
      marginRight: 8
    },
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
}));

const TopAppBarRight = () => {
  const classes = useStyles()
  const { account, deactivate, setIsWalletDialog } = useContext(AppContext);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const connectWallet = () => {
    if (isEmpty(account)) {
      setIsWalletDialog(true)
    }
    else {
      setIsWalletDialog(false)
    }
  };

  return (
    <ConfigProvider
      colors={['#FF2929', '#FF7A29', '#FAD02E', '#91FA49', '#36D8B7', '#3B8AFF', '#991EF9', '#FF5DCD']}>
      {!isEmpty(account)
        ?
        <div className={classes.avatarContainer}>
          <Avatar onClick={handleClick} size="32" style={{ cursor: 'pointer' }} round={true} name={"Inter Coin"} />
          <Typography variant='body1' style={{ marginLeft: 8, marginRight: 4 }}>
            {account.slice(0, 4) + '...' + account.slice(account.length - 4, account.length)}
          </Typography>
          <IntercoinDownMenu marginTop={2.5} anchorEl={anchorEl} onClose={handleClose} deactivate={deactivate} itemsType />
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
