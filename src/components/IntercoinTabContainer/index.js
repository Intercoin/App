
import { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import IntercoinTab from 'components/IntercoinTab';
import { isEmpty } from 'utils/utility';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    fontSize: 15,
    padding: theme.spacing(0, 7, 0, 7),
    [theme.breakpoints.down('sm')]: {
      padding: 0,
      '& .MuiTab-root': {
      },
    },
    marginBottom: theme.spacing(1),
    '& .MuiTab-root': {
      minWidth: '7.5%',
      height: 'max-content',
      fontSize: 16,
      fontWeight: 300
    },
    '& .MuiTabs-scrollButtonsDesktop': {
      display: 'none'
    }
  }
}));

const IntercoinTabContainer = ({ setFilterValue, initialSelectTab, TabList, isTabFullWidth }) => {
  let CategoryGroupTab = [];
  !isEmpty(TabList) && TabList.map((category, index) => {
    CategoryGroupTab.push({
      id: index,
      label: category && category.title,
      icon: category.icon
    })
  })

  const classes = useStyles();
  const [tab, setTab] = useState(0);
  useEffect(() => {
    setTab(initialSelectTab || 0)
  }, [initialSelectTab])

  const onChangeHandler = (event, selectedTab) => {
    setTab(selectedTab);
    setFilterValue(CategoryGroupTab[selectedTab].id)
  };

  return (
    <div className={classes.root}>
      <IntercoinTab
        value={tab}
        isTabFullWidth={isTabFullWidth}
        tabs={CategoryGroupTab}
        onChange={onChangeHandler}
      />
    </div>
  );
};

export default IntercoinTabContainer;
