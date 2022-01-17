import React, { useState } from 'react';
import NewsChildrenUI from './children.presenter';
import { withAuth } from '../../../commons/withAuth/withAuth';

const NewsChildren = () => {
  const [isMore, setIsMore] = useState<boolean>(false);
  const [secondIsMore, secondSetIsMore] = useState<boolean>(false);

  const onPressIsMore = () => {
    setIsMore((prev) => !prev);
  };

  const onPressSecondIsMore = () => {
    secondSetIsMore((prev) => !prev);
  };

  return (
    <NewsChildrenUI
      isMore={isMore}
      secondIsMore={secondIsMore}
      onPressIsMore={onPressIsMore}
      onPressSecondIsMore={onPressSecondIsMore}
    />
  );
};
export default withAuth(NewsChildren);
