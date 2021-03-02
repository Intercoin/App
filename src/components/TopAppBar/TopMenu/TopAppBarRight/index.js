
import React, { useContext } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Avatar, { ConfigProvider } from 'react-avatar';
import { AppContext } from 'contexts';
import { useHistory } from "react-router-dom";
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

import CircleButton from 'components/UI/Buttons/CircleButton';
import RadiusButton from 'components/RadiusButton';
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
      marginRight: 24
    },
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
}));

const TopAppBarRight = ({ isMobileMenu }) => {
  const classes = useStyles()
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));
  const { account, deactivate, setIsWalletDialog, setTopAppMenu } = useContext(AppContext);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const history = useHistory();

  const handleClick = event => {
    setTopAppMenu(10)
    // setAnchorEl(event.currentTarget);
    history.push(PAGES.PROFILE.url)
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
          <>
            {(matches || isMobileMenu) && <CircleButton onClick={handleClick} className={classes.avatarContainer} icon={<Avatar size={"38"} style={{ cursor: 'pointer' }} round={true}
              src={'/assets/images/photos/people/rl-400x.png'} name={"Inter Coin"} />} />}
          </>
          :
          <>
            {!isMobileMenu && <RadiusButton
              style={{ backgroundColor: '#16ACE2' }}
              onClick={connectWallet}>
              Connect Wallet
          </RadiusButton>}
          </>
        }
      </ConfigProvider>
      {!isMobileMenu && <>
        <CircleButton
          style={{ backgroundColor: '#1B1F2E', marginLeft: 4 }}
          icon={<AddCircleOutlineIcon fontSize={'large'} style={{ color: '#fff', width: 38, height: 38 }} />} />
        <CircleButton
          style={{ backgroundColor: '#1B1F2E', marginLeft: 4 }}
          icon={<SearchIcon fontSize={'large'} style={{ color: '#fff', width: 35, height: 35 }} />} />
      </>}
    </div>
  );
};

export default TopAppBarRight;
