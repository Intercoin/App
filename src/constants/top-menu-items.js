
import Icon from '@material-ui/core/Icon';
import OutlinedFlagRoundedIcon from '@material-ui/icons/OutlinedFlagRounded';
import HowToVoteOutlinedIcon from '@material-ui/icons/HowToVoteOutlined';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import LockIcon from '@material-ui/icons/Lock';
import CurrenciesIcon from 'components/Icons/CurrenciesIcon';
import Avatar from '@material-ui/core/Avatar';

import ContestIcon from 'components/Icons/ContestIcon';
import CheckBoxIcon from 'components/Icons/CheckBoxIcon';
import InterCoinIcon from 'components/Icons/InterCoinIcon';
import { PAGES } from 'utils/links/pages';

const TOP_BAR_MENUS = [
  {
    id: 'Communities',
    icon: <OutlinedFlagRoundedIcon fontSize='large' />,
    url: PAGES.COMMUNITIES.url,
    text: 'Communities'
  },
  {
    id: 'pools',
    icon: <CheckBoxIcon />,
    url: PAGES.POLLS.url,
    text: 'Polls'
  },
  {
    id: 'currencies',
    icon: <Avatar variant='square' style={{ width: 65, height: 65, marginBottom: 8 }} src={'/assets/images/intercoin-gold.png'} />,
    url: PAGES.CURRENCIES.url,
    text: "Currencies"
  },
  {
    id: 'contests',
    icon: <ContestIcon />,
    url: PAGES.CONTESTS.url,
    text: "Contests"
  }
];

const TOP_BAR_MENUS_DESKTOP = [
  {
    id: 'Communities',
    icon: <OutlinedFlagRoundedIcon fontSize='large' />,
    url: PAGES.COMMUNITIES.url,
    text: 'Communities'
  },
  {
    id: 'pools',
    icon: <CheckBoxIcon />,
    url: PAGES.POLLS.url,
    text: 'Polls'
  },
  {
    id: 'currencies',
    icon: <Avatar variant='square' style={{ width: 38, height: 38 }} src={'assets/images/intercoin-gold.png'} />,
    url: PAGES.CURRENCIES.url,
    text: "Currencies"
  },
  {
    id: 'contests',
    icon: <ContestIcon />,
    url: PAGES.CONTESTS.url,
    text: "Contests"
  }
];

export {
  TOP_BAR_MENUS,
  TOP_BAR_MENUS_DESKTOP
}