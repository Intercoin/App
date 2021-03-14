
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import IntercoinTabContainer from 'components/IntercoinTabContainer';
import { CommunityTabList } from 'constants/InterCoinTabList';
import OutlinedButton from 'components/UI/Buttons/OutlinedButton';
import TabContent from 'containers/Communities/CommunitiesDetail/TabContent';
import CardWrapper from 'hoc/CardWrapper';

const useStyles = makeStyles(theme => ({
  root: {
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(3, 0, 6, 0)
    },
    backgroundColor: theme.palette.background.main,
    maxHeight: '100vh',
    overflowY: 'scroll',
    overflowY:'none'
  },

}));

const DetailContext = ({ communityDetailData }) => {
  const classes = useStyles();
  const [filterValue, setFilterValue] = useState(0);

  return (
    <div className={classes.root}>
      <CardWrapper>
        <IntercoinTabContainer
          isTabFullWidth
          setFilterValue={setFilterValue}
          TabList={CommunityTabList}
        />
        <TabContent
          communityDetailData={communityDetailData}
          filterValue={filterValue}
        />
      </CardWrapper>
    </div>
  );
};

export default DetailContext;
