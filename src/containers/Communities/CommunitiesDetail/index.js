
import React, { useEffect, useState, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { AppContext } from 'contexts';

import CardWrapper from 'hoc/CardWrapper';
import IntercoinTabContainer from 'components/IntercoinTabContainer';
import { CommunityTabList } from 'constants/InterCoinTabList';
import OutlinedButton from 'components/UI/Buttons/OutlinedButton';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  tabHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end'
  },
  button: {
    backgroundColor: theme.custom.palette.green
  }
}));

const CommunitiesDetail = () => {
  const classes = useStyles();
  const { setLoadingInfo, account } = useContext(AppContext);
  const [filterValue, setFilterValue] = useState("");
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    setLoadingInfo(true);
    setTimeout(() => {
      setLoadingInfo(false);
    }, 2000);
  }, [setLoadingInfo]);

  return (
    <div className={classes.root}>
      <CardWrapper noPaddingTop>
        <IntercoinTabContainer
          isTabFullWidth
          setFilterValue={setFilterValue}
          TabList={CommunityTabList}
        />
        <div className={classes.tabHeader} >
          <Typography variant='body1'>15 members </Typography>
          <OutlinedButton className={classes.button}>+ Invite </OutlinedButton>
        </div>
      </CardWrapper>
    </div>
  );
};

export default CommunitiesDetail;
