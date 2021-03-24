
import React, { useState } from 'react';

import FullScreenDialog from 'components/UI/FullScreenDialog';
import { useHistory, useLocation } from 'react-router-dom';
import DetailContext from 'containers/Communities/CommunitiesDetail/DetailContext';

import { PAGES } from 'utils/links/pages';

const Mobile = ({ communityDetailData }) => {

  const history = useHistory();
  const location = useLocation();
  const [open, setOpen] = useState(true);

  const handleCloseOpen = () => {
    setOpen(false);
    history.push(PAGES.COMMUNITIES.url)
  };

  return (
    <FullScreenDialog
      open={open}
      setOpen={setOpen}
      onClose={handleCloseOpen}
      comunityInfo={location.state}
      children={
        <DetailContext
          communityDetailData={communityDetailData}
        />}
    />
  );
};

export default Mobile;
