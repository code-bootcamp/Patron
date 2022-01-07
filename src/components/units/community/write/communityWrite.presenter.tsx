import React from 'react';
import * as S from './communityWrite.styles';
import GreenButton from '../../../commons/buttons/greenbutton';
import Icon from 'react-native-vector-icons/Ionicons';

const CommunityWriteUI = () => {
  return (
    <>
      <S.Wrap>
        <S.TitleInput placeholder="제목을 입력해 주세요." />
        <S.ContentsInput placeholder="내용을 입력해 주세요." textAlignVertical="top" />
        <S.TagInput placeholder="키워드를 입력해 주세요." />
        <S.photoWrap>
          <S.PhotoUpload>
            <Icon name="add" size={20} color="white" />
          </S.PhotoUpload>
        </S.photoWrap>
      </S.Wrap>
      <GreenButton text="등록하기" height="10%" fontSize="16px" fontWeight={500} />
    </>
  );
};

export default CommunityWriteUI;
