
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import RoleIcon from 'components/Icons/RoleIcon';
import LabelIcon from 'components/Icons/LabelIcon';

import IntercoinTabContainer from 'components/IntercoinTabContainer';
import { CommunityTabList } from 'constants/InterCoinTabList';
import OutlinedButton from 'components/UI/Buttons/OutlinedButton';
import TabContent from 'containers/Communities/CommunitiesDetail/TabContent';
import CardWrapper from 'hoc/CardWrapper';
import CircleButton from 'components/UI/Buttons/CircleButton';

const useStyles = makeStyles(theme => ({
  root: {
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(3, 0, 6, 0)
    },
    backgroundColor: theme.palette.background.main,
    Height: '100vh',
    overflowY: 'scroll',
    overflowY: 'none'
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  buttonsContainer: {
    display: 'flex',
    width: '100%',
    justifyContent:'space-between'
  }
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
        {/* <div className={classes.buttonsContainer}>
          <div className={classes.buttonContainer}>
            <CircleButton
              style={{ display: 'flex', backgroundColor: '#292C40' }} icon={<RoleIcon style={{ color: '#fff' }} fontSize='large' />} />
            <Typography variant='h6'>All Roles </Typography>
          </div>
          <div className={classes.buttonContainer}>
            <CircleButton
              style={{ display: 'flex', backgroundColor: '#292C40' }} icon={<LabelIcon style={{ color: '#fff' }} fontSize='large' />} />
            <Typography variant='h6'>All Tags </Typography>
          </div>
        </div> */}
      </CardWrapper>
    </div>
  );
};

export default DetailContext;
