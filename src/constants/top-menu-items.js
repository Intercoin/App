
import Icon from '@material-ui/core/Icon';
import OutlinedFlagRoundedIcon from '@material-ui/icons/OutlinedFlagRounded';
import HowToVoteOutlinedIcon from '@material-ui/icons/HowToVoteOutlined';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import SignalWifi2BarLockIcon from '@material-ui/icons/SignalWifi2BarLock';
import CurrenciesIcon from 'components/Icons/CurrenciesIcon';
import ContestIcon from 'components/Icons/ContestIcon';
import PAGES from 'utils/links/pages';

const TOP_BAR_MENUS = [
  {
    id: 'Communities',
    icon: <OutlinedFlagRoundedIcon fontSize='default' />,
    url: '/communities',
    text: 'Communities'
  },
  {
    id: 'pools',
    icon: <HowToVoteOutlinedIcon fontSize='default' />,
    url: '/polls',
    text: 'Polls'
  },
  {
    id: 'currencies',
    icon: <CurrenciesIcon />,
    url: '/currencies',
    text: "Currencies"
  },
  {
    id: 'income',
    icon: <CreditCardIcon fontSize='default' />,
    url: '/income',
    text: "Income"
  },
  {
    id: 'contests',
    icon: <ContestIcon />,
    url: '/contests',
    text: "Contests"
  },
  {
    id: 'controlling',
    icon: <SignalWifi2BarLockIcon fontSize='default' />,
    url: '/controlling',
    text: "Shared Control"
  }
];

export {
  TOP_BAR_MENUS
}