import React from 'react';
import InputComment from '../../../../commons/inputs/comment';
import { IPropsCommentWriteUI } from './commentWrite.types';

const CommentWriteUI = (props: IPropsCommentWriteUI) => {
  return (
    <>
      {!props.isEdit ? (
        <InputComment
          text="등록"
          placeholder="댓글을 입력해주세요"
          onChange={props.onChangeContents}
          onPress={props.onSubmitComment}
          ref={props.commentInput}
        />
      ) : (
        <InputComment
          text="수정"
          placeholder="댓글을 입력해주세요"
          onChange={props.onChangeContents}
          onPress={props.onUpdateComment}
          defaultValue={props.el.contents}
          ref={props.commentInput}
        />
      )}
    </>
  );
};

export default CommentWriteUI;
