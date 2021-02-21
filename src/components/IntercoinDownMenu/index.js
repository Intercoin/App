
import React, { useMemo } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';

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
    paddingBottom: theme.spacing(0.7),
    paddingTop: theme.spacing(0.7),
    '&:hover': {
      transform: 'translateY(-3px)',
      transition: 'ease-out 0.4s',
    },
    transition: 'ease-out 0.4s'
  },
  root: props => ({
    '& .MuiMenu-paper': {
      backgroundColor: theme.palette.background.default,
      marginTop: theme.spacing(props.marginTop),
      border: `1px solid ${theme.custom.palette.darkRed}`,
    },
    '&:focus': {
      backgroundColor: theme.palette.secondary.main
    },
  }),
  hoverEffect: {
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
  }
}));

const IntercoinDownMenu = ({ anchorEl, onClose, marginTop, itemsType, AvatarItems, setAnchorEl, deactivate }) => {

  const classes = useStyles({ marginTop });

  const items = useMemo(
    () => filterLists({ itemsType, AvatarItems })
    , [itemsType]);

  const routeHandler = (title) => () => {
    if (title === 'Deactive') {
      deactivate();
    }
    onClose();
  }

  return (
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
                onClick={item.icon === undefined ? routeHandler(item.title) : null}
              >
                {item.title}
              </Typography>
              {item.RightIcon}
            </MenuItem>
          )
        })
      }
    </Menu>
  );
};

IntercoinDownMenu.defaultProps = {
  itemsType: 'avatar',
  AvatarItems: [
    {
      title: "Deactive"
    }
  ]
}

export default IntercoinDownMenu;
