import MypagePostUI from './post.presenter';
import * as React from 'react';
import { useQuery } from '@apollo/client';
import { FETCH_BOARDS } from './post.queries';

const MypagePost = () => {
  const { data } = useQuery(FETCH_BOARDS);

  return <MypagePostUI data={data} />;
};

export default MypagePost;
