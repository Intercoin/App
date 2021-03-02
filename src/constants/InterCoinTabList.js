
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
    icon: <EnhancedEncryptionIcon fontSize='large' />,
    title: 'OwnerShip'
  },
  {
    icon: <CheckBoxIcon fontSize='large' />,
    title: 'Vote'
  }
]

export {
  ProfileTabList,
  CommunityTabList
}
