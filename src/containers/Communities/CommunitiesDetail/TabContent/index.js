
import React from 'react';

import People from './People';
import Currency from './Currency';
import Governance from './Governance';
import Voting from './Voting';

const TabContent = ({ filterValue, communityDetailData }) => {
  const switchContent = (title) => {
    switch (title) {
      case 0:
        return <People communityDetailData={communityDetailData} />;
      case 1:
        return <Currency />;
      case 2:
        return <Governance />;
      case 3:
        return <Voting />;
      default:
        return <People />;
    }
  }

  return (
    switchContent(filterValue, communityDetailData)
  );
};

export default TabContent;