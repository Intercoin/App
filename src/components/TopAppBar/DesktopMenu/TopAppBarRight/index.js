
import React, { useContext } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Avatar, { ConfigProvider } from 'react-avatar';
import { AppContext } from 'contexts';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useHistory } from "react-router-dom";
// import WalletModel from 'components/WalletModel';
import ContainedButton from 'components/UI/Buttons/ContainedButton';
import IntercoinDownMenu from 'components/IntercoinDownMenu';
import { isEmpty } from 'utils/utility';
import { PAGES } from 'utils/links/pages';

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
  const theme = useTheme();
  const { account, deactivate, setIsWalletDialog } = useContext(AppContext);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const matches = useMediaQuery(theme.breakpoints.down('350'));
  const history = useHistory();


  const handleClick = event => {
    // setAnchorEl(event.currentTarget);
    history.push(PAGES.PROFILE)
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
          <Avatar onClick={handleClick} size={matches ? "28" : "40"} style={{ cursor: 'pointer' }} round={true}
            src={'/assets/images/photos/people/rl-400x.png'} name={"Inter Coin"} />
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
