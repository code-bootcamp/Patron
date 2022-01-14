import React from 'react';
import * as S from './commentList.styles';
import { IPropsCommentListUI } from './commentList.types';
import CommentListUIItem from './commentList.presenterItem';

const CommentListUI = (props: IPropsCommentListUI) => {
  return (
    <>
      <S.Wrap>
        {props.data?.fetchBoardComments.map((el: any, idx: number) => (
          <CommentListUIItem key={idx} el={el} boardId={props.boardId} />
        ))}
      </S.Wrap>
    </>
  );
};

export default CommentListUI;
