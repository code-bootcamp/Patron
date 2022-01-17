import React from 'react';
import NewsMainUI from './newsmain.presenter';
import { withAuth } from '../../../commons/withAuth/withAuth';

const NewsMain = () => {
  return <NewsMainUI />;
};
export default withAuth(NewsMain);
