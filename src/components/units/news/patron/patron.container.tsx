import React, { useState } from 'react';
import NewsPatronUI from './patron.presenter';
import { withAuth } from '../../../commons/withAuth/withAuth';

const NewsPatron = () => {
  const [isMore, setIsMore] = useState<boolean>(false);

  const onPressIsMore = () => {
    setIsMore((prev) => !prev);
  };

  return <NewsPatronUI isMore={isMore} onPressIsMore={onPressIsMore} />;
};
export default withAuth(NewsPatron);
