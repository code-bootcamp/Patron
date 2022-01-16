import React, { useState } from 'react';
import * as R from 'react-native';
import * as S from './commentList.styles';
import Icon from 'react-native-vector-icons/Ionicons';
import { displayedAt } from '../../../../../commons/libraries/utils';
import { Menu, MenuOptions, MenuOption, MenuTrigger } from 'react-native-popup-menu';
import CommentWrite from '../write/commentWrite.container';
import { useMutation, useQuery } from '@apollo/client';
import {
  Mutation,
  MutationDeleteBoardCommentArgs,
  Query,
  QueryFetchBoardCommentsArgs,
} from '../../../../../commons/types/generated/types';
import { DELETE_BOARD_COMMENT, FETCH_BOARD_COMMENTS } from './commentList.queries';
import { IPropsCommentListUIItem } from './commentList.types';

const CommentListUIItem = (props: IPropsCommentListUIItem) => {
  const { refetch } = useQuery<Pick<Query, 'fetchBoardComments'>, QueryFetchBoardCommentsArgs>(
    FETCH_BOARD_COMMENTS,
  );
  const [deleteBoardComment] = useMutation<
    Pick<Mutation, 'deleteBoardComment'>,
    MutationDeleteBoardCommentArgs
  >(DELETE_BOARD_COMMENT);
  const [isEdit, setIsEdit] = useState(false);

  const onSelectUpdate = () => {
    setIsEdit(true);
  };

  const onDeleteComment = async () => {
    try {
      const result = await deleteBoardComment({
        variables: { password: '123', boardCommentId: props.el._id },
      });
      console.log(result);
      refetch({ boardId: props.boardId });
    } catch (error) {
      if (error instanceof Error) console.log(error.message);
    }
  };

  return (
    <>
      {!isEdit && (
        <S.CommentWrap>
          <S.CommentImg onPress={onDeleteComment} />
          <S.ContentsSection>
            <S.UserWrap>
              <S.UserName>{props.el.writer}</S.UserName>
              <S.CreatedAt>{displayedAt(props.el.createdAt)}</S.CreatedAt>
            </S.UserWrap>
            <R.Text>{props.el.contents}</R.Text>
          </S.ContentsSection>
          <Menu>
            <MenuTrigger>
              <Icon name="ellipsis-vertical" color="#9f9f9f" size={16} style={{ padding: 10 }} />
            </MenuTrigger>
            <MenuOptions optionsContainerStyle={{ width: 100 }}>
              <MenuOption onSelect={onSelectUpdate} text="수정" style={{ padding: 10 }} />
              <MenuOption onSelect={onDeleteComment} text="삭제" style={{ padding: 10 }} />
            </MenuOptions>
          </Menu>
        </S.CommentWrap>
      )}
      {isEdit && (
        <CommentWrite isEdit={true} setIsEdit={setIsEdit} el={props.el} boardId={props.boardId} />
      )}
    </>
  );
};

export default CommentListUIItem;
