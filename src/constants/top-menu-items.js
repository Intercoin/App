
import ForumIcon from '@material-ui/icons/Forum';
import HowToVoteIcon from '@material-ui/icons/HowToVote';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import MultilineChartIcon from '@material-ui/icons/MultilineChart';
import SettingsRemoteIcon from '@material-ui/icons/SettingsRemote';

import PAGES from 'utils/links/pages';

const TOP_BAR_MENUS = [
  {
    id: 'Communities',
    icon: <ForumIcon />,
    url: '/',
    text: 'Communities'
  },
  {
    id: 'pools',
    icon: <HowToVoteIcon />,
    url: '/pools',
    text: 'Pools'
  },
  {
    id: 'currencies',
    icon: <LocalAtmIcon />,
    url: '/currencies',
    text: "Currencies"
  },
  {
    id: 'income',
    icon: <CreditCardIcon />,
    url: '/income',
    text: "Income"
  },
  {
    id: 'contests',
    icon: <MultilineChartIcon />,
    url: '/contests',
    text: "Contests"
  },
  {
    id: 'controlling',
    icon: <SettingsRemoteIcon />,
    url: '/controlling',
    text: "Controlling"
  }
];

export {
  TOP_BAR_MENUS
}