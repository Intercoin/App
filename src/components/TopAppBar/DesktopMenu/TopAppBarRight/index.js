
import React, { useContext } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Avatar, { ConfigProvider } from 'react-avatar';
import { AppContext } from 'contexts';
import { useHistory } from "react-router-dom";
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

import ContainedButton from 'components/UI/Buttons/ContainedButton';
import IntercoinDownMenu from 'components/IntercoinDownMenu';
import { isEmpty } from 'utils/utility';
import { PAGES } from 'utils/links/pages';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  avatarContainer: {
    [theme.breakpoints.down('sm')]: {
      // marginRight: 8
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
    <div className={classes.root}>
      <ConfigProvider
        colors={['#FF2929', '#FF7A29', '#FAD02E', '#91FA49', '#36D8B7', '#3B8AFF', '#991EF9', '#FF5DCD']}>
        {!isEmpty(account)
          ?
          <IconButton onClick={handleClick} className={classes.avatarContainer}>
            <Avatar size={"40"} style={{ cursor: 'pointer' }} round={true}
              src={'/assets/images/photos/people/rl-400x.png'} name={"Inter Coin"} />
            <IntercoinDownMenu marginTop={2.5} anchorEl={anchorEl} onClose={handleClose} deactivate={deactivate} itemsType />
          </IconButton>
          :
          <ContainedButton
            style={{ backgroundColor: '#16ACE2' }}
            onClick={connectWallet}>
            Connect Wallet
         </ContainedButton>
        }
      </ConfigProvider>
      <IconButton >
        <SearchIcon style={{ color: '#fff' }} fontSize="large" />
      </IconButton>
    </div>
  );
};

export default TopAppBarRight;
