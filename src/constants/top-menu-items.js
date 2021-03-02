
import Icon from '@material-ui/core/Icon';
import OutlinedFlagRoundedIcon from '@material-ui/icons/OutlinedFlagRounded';
import HowToVoteOutlinedIcon from '@material-ui/icons/HowToVoteOutlined';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import LockIcon from '@material-ui/icons/Lock';
import CurrenciesIcon from 'components/Icons/CurrenciesIcon';
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
    icon: <InterCoinIcon fontSize='large' />,
    url: PAGES.CURRENCIES.url,
    text: "Currencies"
  },
  // {
  //   id: 'income',
  //   icon: <CreditCardIcon fontSize='large' />,
  //   url: PAGES.INCOME.url,
  //   text: "Income"
  // },
  {
    id: 'contests',
    icon: <ContestIcon />,
    url: PAGES.CONTESTS.url,
    text: "Contests"
  }
];

export {
  TOP_BAR_MENUS
}