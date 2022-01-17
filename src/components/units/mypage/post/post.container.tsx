import MypagePostUI from './post.presenter';
import * as React from 'react';
import { useQuery } from '@apollo/client';
import { FETCH_BOARDS } from './post.queries';
import { Query, QueryFetchBoardsArgs } from '../../../../commons/types/generated/types';

const MypagePost = () => {
  const { data } = useQuery<Pick<Query, 'fetchBoards'>, QueryFetchBoardsArgs>(FETCH_BOARDS);

  return <MypagePostUI data={data} />;
};

export default MypagePost;
