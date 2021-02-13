
import { useContext } from 'react';
import ListItem from '@material-ui/core/ListItem';
import { makeStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';

import { AppContext } from 'contexts';
import TopAppBarMenuItem from './TopAppBarMenuItem';

const useStyles = makeStyles(theme => ({
  menuItem: {
    flexDirection: 'row',
    width : 'fit-content',
    minHeight: '100%',
    padding: 0
  }
}));

const TopAppBarMenu = ({ menuItems, history, location }) => {
  const classes = useStyles();
  const { topAppMenu, topMenuChageHandler } = useContext(AppContext);

  const menuItemClickHandler = (event, index) => {
    topMenuChageHandler(index)
    history.push(menuItems[index].url)
  };

  return (
    <ListItem className={classes.menuItem}>
      {menuItems.map((menuItem, index) => (
        <TopAppBarMenuItem
          key={menuItem.id}
          selected={topAppMenu === index}
          menuItem={menuItem}
          onClick={event => menuItemClickHandler(event, index)} />
      ))}
    </ListItem>
  );
};

export default withRouter(TopAppBarMenu);
