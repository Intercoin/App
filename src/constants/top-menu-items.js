
import Icon from '@material-ui/core/Icon';
import OutlinedFlagRoundedIcon from '@material-ui/icons/OutlinedFlagRounded';
import HowToVoteOutlinedIcon from '@material-ui/icons/HowToVoteOutlined';
import CardTravelIcon from '@material-ui/icons/CardTravel';
import SignalWifi2BarLockIcon from '@material-ui/icons/SignalWifi2BarLock';
import CurrenciesIcon from 'components/Icons/CurrenciesIcon';
import ContestIcon from 'components/Icons/ContestIcon';
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
    icon: <HowToVoteOutlinedIcon fontSize='large' />,
    url: PAGES.POLLS.url,
    text: 'Polls'
  },
  {
    id: 'currencies',
    icon: <CurrenciesIcon fontSize='large' />,
    url: PAGES.CURRENCIES.url,
    text: "Currencies"
  },
  {
    id: 'income',
    icon: <CardTravelIcon fontSize='large' />,
    url: PAGES.INCOME.url,
    text: "Income"
  },
  {
    id: 'contests',
    icon: <ContestIcon />,
    url: PAGES.CONTESTS.url,
    text: "Contests"
  },
  {
    id: 'sharedControl',
    icon: <SignalWifi2BarLockIcon fontSize='large' />,
    url: PAGES.SHARED_CONTROL.url,
    text: "Shared Control"
  }
];

export {
  TOP_BAR_MENUS
}