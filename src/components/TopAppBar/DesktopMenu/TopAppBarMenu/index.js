
import { AppContext } from 'contexts';
import { useContext } from 'react';
import ListItem from '@material-ui/core/ListItem';
import { makeStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';

import TopAppBarMenuItem from './TopAppBarMenuItem';

const useStyles = makeStyles(theme => ({
  menuItem: {
    [theme.breakpoints.down('sm')]: {
  
    },
    flexDirection: 'row',
    width: 'fit-content',
    minHeight: '100%',
    padding: 0
  }
}));

const TopAppBarMenu = ({ menuItems, mobileMenu, history, location }) => {
  const classes = useStyles();

  const { topAppMenu } = useContext(AppContext);

  const menuItemClickHandler = (event, index) => {
    history.push(menuItems[index].url)
  };

  return (
   <>
    <ListItem className={classes.menuItem}>
      {menuItems.map((menuItem, index) => (
        <TopAppBarMenuItem
          key={menuItem.id}
          mobileMenu={mobileMenu}
          selected={topAppMenu === index}
          menuItem={menuItem}
          onClick={event => menuItemClickHandler(event, index)} />
      ))}
      </ListItem>
      </>
  );
};

export default withRouter(TopAppBarMenu);
