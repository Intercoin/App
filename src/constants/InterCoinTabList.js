
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import DashboardIcon from '@material-ui/icons/Dashboard';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';
import PersonIcon from '@material-ui/icons/Person';
import CurrenciesIcon from 'components/Icons/CurrenciesIcon';
import EnhancedEncryptionIcon from '@material-ui/icons/EnhancedEncryption';
import CheckBoxIcon from 'components/Icons/CheckBoxIcon';
import LockIcon from '@material-ui/icons/Lock';

const ProfileTabList = [
  {
    icon: <ChatBubbleOutlineIcon fontSize='large' />
  },
  {
    icon: <AccountCircleIcon fontSize='large' />
  },
  {
    icon: <AccessTimeIcon fontSize='large' />
  },
  {
    icon: <FavoriteBorderIcon fontSize='large' />
  },
  {
    icon: <DashboardIcon fontSize='large' />
  },
  {
    icon: <LocalAtmIcon fontSize='large' />
  }
]

const CommunityTabList = [
  {
    icon: <PersonIcon fontSize='large' />,
    title: 'People'
  },
  {
    icon: <CurrenciesIcon fontSize='large' />,
    title: 'Currency'
  },
  {
    icon: <EnhancedEncryptionIcon style={{ height: 31 }} fontSize='large' />,
    title: 'Governance'
  },
  {
    icon: <CheckBoxIcon fontSize='large' />,
    title: 'Voting'
  }
]

const WalletDetailTabList = [
  { title: 'Asset' },
  { title: 'Transaction' }
]

export {
  ProfileTabList,
  CommunityTabList,
  WalletDetailTabList
}
