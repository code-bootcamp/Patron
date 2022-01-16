import { useMutation, useQuery } from '@apollo/client';
import React, { useEffect, useRef, useState } from 'react';
import { NativeSyntheticEvent, TextInputChangeEventData } from 'react-native';
import {
  Mutation,
  MutationCreateBoardCommentArgs,
  MutationUpdateBoardCommentArgs,
  Query,
  QueryFetchBoardCommentsArgs,
} from '../../../../../commons/types/generated/types';
import CommentWriteUI from './commentWrite.presenter';
import {
  CREATE_BOARD_COMMENT,
  FETCH_BOARD_COMMENTS,
  FETCH_USER_LOGGED_IN,
  UPDATE_BOARD_COMMENTS,
} from './commentWrite.queries';
import { IPropsCommentWrite } from './commentWrite.types';

const CommentWrite = (props: IPropsCommentWrite) => {
  const boardId = props.isEdit ? props.boardId : props.route?.params.boardId;
  const { refetch } = useQuery<Pick<Query, 'fetchBoardComments'>, QueryFetchBoardCommentsArgs>(
    FETCH_BOARD_COMMENTS,
    { variables: { boardId } },
  );
  const { data: userdata } = useQuery<Pick<Query, 'fetchUserLoggedIn'>>(FETCH_USER_LOGGED_IN);
  const [createBoardComment] = useMutation<
    Pick<Mutation, 'createBoardComment'>,
    MutationCreateBoardCommentArgs
  >(CREATE_BOARD_COMMENT);
  const [updateBoardComment] = useMutation<
    Pick<Mutation, 'updateBoardComment'>,
    MutationUpdateBoardCommentArgs
  >(UPDATE_BOARD_COMMENTS);
  const [contents, setContents] = useState<string>('');
  const commentInput = useRef();
  const [commentResult, setCommentResult] = useState({});

  const onChangeContents = (event: NativeSyntheticEvent<TextInputChangeEventData>) => {
    setContents(event.nativeEvent.text);
  };

  const onSubmitComment = async () => {
    const result = await createBoardComment({
      variables: {
        createBoardCommentInput: {
          writer: userdata?.fetchUserLoggedIn.name,
          password: '123',
          contents,
          rating: 5,
        },
        boardId,
      },
    });
    refetch({ boardId });
    setCommentResult(result);
  };

  useEffect(() => {
    (commentInput.current as any).clear();
  }, [commentResult]);

  if (!contents && props.isEdit) setContents(props.el.contents);

  const onUpdateComment = async () => {
    const result = await updateBoardComment({
      variables: {
        updateBoardCommentInput: { contents, rating: 5 },
        password: '123',
        boardCommentId: props.el._id,
      },
    });
    console.log(result);
    props.setIsEdit(false);
    refetch({ boardId: props.boardId });
  };

  return (
    <CommentWriteUI
      onChangeContents={onChangeContents}
      onSubmitComment={onSubmitComment}
      isEdit={props.isEdit}
      el={props.el}
      onUpdateComment={onUpdateComment}
      commentInput={commentInput}
    />
  );
};

export default CommentWrite;
