
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  selectedItem: {
    color: theme.palette.primary.contrastText,
    backgroundColor: `${theme.palette.background.main} !important`
  },
  menuFont: {
    [theme.breakpoints.down(1360)]: {
      fontSize: theme.spacing(1.8),
    },
    marginLeft: theme.spacing(1),
    fontSize: theme.spacing(2.5),
    color: theme.palette.text.primary,
    fontWeight: 300
  },
  listItem: {
    padding: (0, 10, 0, 10),
    height: '64px',
  }
}));

const TopAppBarMenuItem = ({ selected, menuItem, onClick }) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <ListItem
        button
        classes={{
          selected: classes.selectedItem,
          root: classes.listItem
        }}
        selected={selected}
        onClick={menuItem.id === 'be-partner' ? handleClick : onClick}>
        {menuItem.icon}
        <ListItemText>
          <Typography variant='h6' className={classes.menuFont} noWrap>{menuItem.text}</Typography>
        </ListItemText>
        {anchorEl ? menuItem.antiBadgeIcon : menuItem.badgeIcon}
      </ListItem>
    </>
  );
};

export default TopAppBarMenuItem