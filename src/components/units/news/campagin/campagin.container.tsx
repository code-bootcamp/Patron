import CampaginUI from './campagin.presenter';
import * as React from 'react';
import { useState } from 'react';

const Campaign = () => {
  const [isMore, setIsMore] = useState(false);

  const onPressIsMore = () => {
    setIsMore((prev) => !prev);
  };

  return <CampaginUI isMore={isMore} onPressIsMore={onPressIsMore} />;
};
export default Campaign;
