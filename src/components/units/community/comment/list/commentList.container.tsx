import { useQuery } from '@apollo/client';
import React from 'react';
import { Query, QueryFetchBoardCommentsArgs } from '../../../../../commons/types/generated/types';
import CommentListUI from './commentList.presenter';
import { FETCH_BOARD_COMMENTS } from './commentList.queries';
import { IPropsCommentList } from './commentList.types';

const CommentList = (props: IPropsCommentList) => {
  const boardId = props.route.params.boardId;
  const { data } = useQuery<Pick<Query, 'fetchBoardComments'>, QueryFetchBoardCommentsArgs>(
    FETCH_BOARD_COMMENTS,
    { variables: { boardId } },
  );

  return <CommentListUI data={data} boardId={boardId} />;
};

export default CommentList;
