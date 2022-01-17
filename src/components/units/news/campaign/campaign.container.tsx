import * as React from 'react';
import { useState } from 'react';
import NewsCampaignUI from './campaign.presenter';
import { withAuth } from '../../../commons/withAuth/withAuth';

const NewsCampaign = () => {
  const [isMore, setIsMore] = useState<boolean>(false);
  const [secondIsMore, secondSetIsMore] = useState<boolean>(false);

  const onPressIsMore = () => {
    setIsMore((prev) => !prev);
  };

  const onPressSecondIsMore = () => {
    secondSetIsMore((prev) => !prev);
  };

  return (
    <NewsCampaignUI
      isMore={isMore}
      onPressIsMore={onPressIsMore}
      secondIsMore={secondIsMore}
      onPressSecondIsMore={onPressSecondIsMore}
    />
  );
};
export default withAuth(NewsCampaign);
