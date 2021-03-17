
import React, { useMemo, memo, useState, useEffect } from 'react';
import clsx from 'clsx';
import { useWeb3React } from '@web3-react/core'
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from "react-router-dom";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/Add';
import FaceIcon from '@material-ui/icons/Face';
import Avatar from '@material-ui/core/Avatar';

import { walletconnect, injected, intercoinToken, xDai, fortmatic } from 'constants/connectors';
import WalletModal from 'components/WalletModal';
import { useEagerConnect, useInactiveListener } from 'utils/hooks.js'
import { PAGES } from 'utils/links/pages';
import IntercoinLoading from 'components/IntercoinLoading';
import { isEmpty } from 'utils/utility';
import Notifications from 'components/Notifications';

const filterLists = ({ itemsType, AvatarItems }) => {
  switch (itemsType) {
    case 'avatar':
      return AvatarItems;
    default:
      return AvatarItems;
  }
}

const useStyles = makeStyles(theme => ({
  paper: {
    paddingBottom: theme.spacing(1),
    paddingTop: theme.spacing(1),
    '&:hover': {
      transform: 'translateY(-3px)',
      transition: 'ease-out 0.4s',
    },
    transition: 'ease-out 0.4s'
  },
  selected: {
    backgroundColor: `${theme.palette.background.main} !important`
  },
  root: props => ({
    '& .MuiMenu-paper': {
      backgroundColor: theme.palette.background.default,
      marginTop: theme.spacing(props.marginTop),
      border: `1px solid ${theme.palette.text.hoverText}`,
      [theme.breakpoints.down('sm')]: {
        marginTop: theme.spacing(-5.5),

      },
    },
    '&:focus': {
      backgroundColor: theme.palette.secondary.main
    },
  }),
  hoverEffect: {
    marginLeft: 8,
    width: '100%',
    '&:hover': {
      color: theme.custom.palette.hover,
    }
  },
  padding: {
    padding: theme.spacing(15)
  },
  iconContainer: {
    marginTop: theme.spacing(0.5),
    marginRight: theme.spacing(1)
  },
  avatarSize: {
    height: 30,
    width: 30
  }
}));

const IntercoinDownMenu = ({ anchorEl, onClose, marginTop, itemsType, AvatarItems, setAnchorEl }) => {
  const classes = useStyles({ marginTop });
  const connectorsByName = {
    'InjectedConnector': injected,
    'FortmaticConnector': fortmatic,
    'WalletConnect': walletconnect,
    'Intercoin': intercoinToken,
    'xDai': xDai
  }
  let additionalAccounts = []
  useMemo(() => {
    Object.keys(connectorsByName).map((name) => {
      if (!isEmpty(localStorage.getItem(name))) {
        additionalAccounts.push({
          leftIcon: <Avatar variant='square' className={classes.avatarSize} src={`/assets/images/connectors/${name}.png`} />,
          title: name, connectorName: name,
          url: PAGES.PROFILE.url
        })
      }
    })
  }, [connectorsByName])


  const history = useHistory();
  const [isWalletDialog, setIsWalletDialog] = useState(false);

  const context = useWeb3React();
  const { connector, library, chainId, account, activate, deactivate, active, error } = context
  const [activatingConnector, setActivatingConnector] = useState();
  const [accountInfo, setAccountInfo] = useState({});

  useEffect(() => {
    if (activatingConnector && activatingConnector === connector) {
      setActivatingConnector(undefined)
      setAccountInfo({account : 'Account was successfully switched!'})
    }
  }, [activatingConnector, connector])

  const triedEager = useEagerConnect();
  useInactiveListener(!triedEager || !!activatingConnector)

  const items = useMemo(
    () => filterLists({ itemsType, AvatarItems })
    , [itemsType]);

  const routeHandler = (url) => () => {
    history.push(url)
    onClose();
  }

  const ItemHandler = (title) => {
    if (title === 'Add new account') {
      setIsWalletDialog(true);
    }
    onClose();
  }

  const openCloseDialogHandler = show => () => {
    setIsWalletDialog(show);
  }

  const additionalAccountHandler = (connectName, url) => {
    setActivatingConnector(connectorsByName[connectName])
    activate(connectorsByName[connectName])
  }

  return (
    <>
    <Notifications notifications={accountInfo} notificationType={'success'} />
      <Menu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={onClose}
        className={classes.root}
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        {
          items.map((item, index) => {
            return (
              <MenuItem className={classes.paper} key={index}>
                {item.leftIcon}
                <Typography
                  variant='body1'
                  className={classes.hoverEffect}
                  onClick={item.url === undefined ? () => ItemHandler(item.title) : routeHandler(item.url)}
                >
                  {item.title}
                </Typography>
                {item.RightIcon}
              </MenuItem>
            )
          })
        }
        {
          additionalAccounts.map((item, index) => {

            return (
              <MenuItem className={clsx(classes.paper, connector === connectorsByName[item.title] ? classes.selected : null)} key={index}>
                { connectorsByName[item.title] === activatingConnector && <IntercoinLoading wholeOverlay />}
                {item.leftIcon}
                <Typography
                  variant='body1'
                  className={classes.hoverEffect}
                  onClick={() => additionalAccountHandler(item.title, item.url)}
                >
                  {item.title}
                </Typography>
                {item.RightIcon}
              </MenuItem>
            )
          })
        }
      </Menu>
      {
        isWalletDialog &&
        <WalletModal
          headerTitle={'Add a Wallet'}
          open={true}
          onClose={openCloseDialogHandler(false)}
          setActivatingConnector={setActivatingConnector}
          activatingConnector={activatingConnector}
          triedEager={triedEager}
          context={context}
        />
      }
    </>
  );
};

IntercoinDownMenu.defaultProps = {
  itemsType: 'avatar',
  AvatarItems: [
    {
      title: "Profile",
      leftIcon: <FaceIcon style={{ height: 30, width: 30 }} fontSize='large' />,
      url: PAGES.PROFILE.url
    },
    {
      title: "Add new account",
      leftIcon: <AddIcon style={{ height: 30, width: 30 }} fontSize='large' />
    },

  ]
}

export default memo(IntercoinDownMenu);
