
import React, { useContext, useMemo } from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Avatar, { ConfigProvider } from 'react-avatar';
import { AppContext } from 'contexts';
import { useHistory } from "react-router-dom";
import SearchIcon from '@material-ui/icons/Search';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import AddIcon from '@material-ui/icons/Add';
import ListItem from '@material-ui/core/ListItem';

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
      // backgroundColor: theme.palette.text.hoverText,
      margin: theme.spacing(0, 1.5, 0, 1.5)
    },
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  avatarList: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '64px',

  },
  backgroundColor: {
    backgroundColor: `${theme.palette.text.hoverText} !important`,
  },
  borderColor: {
    borderTop: `0.5px solid  ${theme.palette.text.hoverText} !important`
  }
}));

const TopAppBarRight = ({ isMobileMenu }) => {
  const { account, deactivate, setIsWalletDialog, setTopAppMenu, topAppMenu } = useContext(AppContext);
  const isAvatarSelected = useMemo(() => topAppMenu === 10 ? true : false, [topAppMenu])

  const classes = useStyles({})
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));
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
      <div className={clsx(classes.avatarList, isAvatarSelected ? classes.borderColor : null)}>
        <ConfigProvider
          colors={['#FF2929', '#FF7A29', '#FAD02E', '#91FA49', '#36D8B7', '#3B8AFF', '#991EF9', '#FF5DCD']}>
          {!isEmpty(account)
            ?
            <>
              {(matches || isMobileMenu) && <CircleButton onClick={() => handleClick()}
                className={clsx(classes.avatarContainer, isAvatarSelected ? classes.backgroundColor : null)}
                icon={<Avatar size={"38"} style={{ cursor: 'pointer' }} round={true}
                  src={'/assets/images/photos/people/rl-400x.png'} name={"Inter Coin"} />} />}
            </>
            :
            <>
              {!isMobileMenu &&
                <RadiusButton
                  style={{ backgroundColor: '#16ACE2' }}
                  onClick={connectWallet}>
                  Connect Wallet
             </RadiusButton>}
            </>
          }
        </ConfigProvider>
      </div>
      {!isMobileMenu && !isEmpty(account) &&
        <>
          <CircleButton
            style={{ backgroundColor: '#292C41', margin: 4 }}
            icon={<AddIcon fontSize={'large'} style={{ color: '#fff', width: 40, height: 40 }} />} />
          <CircleButton
            style={{ backgroundColor: '#292C41', margin: 4 }}
            icon={<SearchIcon fontSize={'large'} style={{ color: '#fff', width: 35, height: 35 }} />} />
        </>}
    </div>
  );
};

export default TopAppBarRight;
