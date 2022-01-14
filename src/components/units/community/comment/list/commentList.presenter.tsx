import React from 'react';
import * as R from 'react-native';
import * as S from './commentList.styles';
import Icon from 'react-native-vector-icons/Ionicons';
import { displayedAt } from '../../../../../commons/libraries/utils';
import { IPropsCommentListUI } from './commentList.types';

const CommentListUI = (props: IPropsCommentListUI) => {
  return (
    <>
      <S.Wrap>
        <R.View></R.View>
        {props.data?.fetchBoardComments.map((el: any, idx: number) => (
          <S.CommentWrap key={idx}>
            <S.CommentImg />
            <S.ContentsSection>
              <S.UserWrap>
                <S.UserName>{el.writer}</S.UserName>
                <S.CreatedAt>{displayedAt(el.createdAt)}</S.CreatedAt>
              </S.UserWrap>
              <R.Text>{el.contents}</R.Text>
            </S.ContentsSection>
            <Icon name="ellipsis-vertical" color="#9f9f9f" size={16} style={{ padding: 10 }} />
          </S.CommentWrap>
        ))}
      </S.Wrap>
    </>
  );
};

export default CommentListUI;
