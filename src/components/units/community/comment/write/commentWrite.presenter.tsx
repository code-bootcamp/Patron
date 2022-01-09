import React from 'react';
import InputComment from '../../../../commons/inputs/comment';
import { IPropsCommentWriteUI } from './commentWrite.types';

const CommentWriteUI = (props: IPropsCommentWriteUI) => {
  return (
    <InputComment
      placeholder="댓글을 입력해주세요"
      onChange={props.onChangeContents}
      onPress={props.onSubmitComment}
    />
  );
};

export default CommentWriteUI;
