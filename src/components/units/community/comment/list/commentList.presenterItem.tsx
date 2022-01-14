import React, { useState } from 'react';
import * as R from 'react-native';
import * as S from './commentList.styles';
import Icon from 'react-native-vector-icons/Ionicons';
import { displayedAt } from '../../../../../commons/libraries/utils';
import { Menu, MenuOptions, MenuOption, MenuTrigger } from 'react-native-popup-menu';
import CommentWrite from '../write/commentWrite.container';

const CommentListUIItem = (props) => {
  const [isEdit, setIsEdit] = useState(false);

  const onSelectUpdate = () => {
    setIsEdit(true);
  };

  return (
    <>
      {!isEdit && (
        <S.CommentWrap>
          <S.CommentImg />
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
              <MenuOption text="삭제" style={{ padding: 10 }} />
            </MenuOptions>
          </Menu>
        </S.CommentWrap>
      )}
      {isEdit && <CommentWrite isEdit={true} setIsEdit={setIsEdit} el={props.el} />}
    </>
  );
};

export default CommentListUIItem;
