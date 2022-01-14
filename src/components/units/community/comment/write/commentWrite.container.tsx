import { useMutation, useQuery } from '@apollo/client';
import React, { useState } from 'react';
import { NativeSyntheticEvent, TextInputChangeEventData } from 'react-native';
import {
  Mutation,
  MutationCreateBoardCommentArgs,
  Query,
  QueryFetchBoardCommentsArgs,
} from '../../../../../commons/types/generated/types';
import CommentWriteUI from './commentWrite.presenter';
import { CREATE_BOARD_COMMENT, FETCH_BOARD_COMMENTS } from './commentWrite.queries';
import { IPropsCommentWrite } from './commentWrite.types';

const CommentWrite = (props: IPropsCommentWrite) => {
  const boardId = props.route.params?.boardId;
  const { refetch } = useQuery<Pick<Query, 'fetchBoardComments'>, QueryFetchBoardCommentsArgs>(
    FETCH_BOARD_COMMENTS,
    { variables: { boardId } },
  );
  const [createBoardComment] = useMutation<
    Pick<Mutation, 'createBoardComment'>,
    MutationCreateBoardCommentArgs
  >(CREATE_BOARD_COMMENT);
  const [contents, setContents] = useState<string>('');

  const onChangeContents = (event: NativeSyntheticEvent<TextInputChangeEventData>) => {
    setContents(event.nativeEvent.text);
  };

  const onSubmitComment = async () => {
    const result = await createBoardComment({
      variables: {
        createBoardCommentInput: { writer: '박이웃', password: '123', contents, rating: 5 },
        boardId,
      },
    });
    console.log(result);
    refetch({ boardId });
  };

  return <CommentWriteUI onChangeContents={onChangeContents} onSubmitComment={onSubmitComment} />;
};

export default CommentWrite;
