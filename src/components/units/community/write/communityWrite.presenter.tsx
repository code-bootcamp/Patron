import React from 'react';
import * as S from './communityWrite.styles';
import * as R from 'react-native';
import GreenButton from '../../../commons/buttons/greenbutton';
import Icon from 'react-native-vector-icons/Ionicons';
import WhiteTag from '../../../commons/tags/whitetag';
import { IPropsCommunityWriteUI } from './communityWrite.types';

const CommunityWriteUI = (props: IPropsCommunityWriteUI) => {
  return (
    <>
      <S.Wrap>
        <S.TitleInput
          placeholder="제목을 입력해 주세요."
          onChange={props.onChangeTitle}
          defaultValue={props.data?.fetchBoard.title || ''}
        />
        <S.ContentsInput
          placeholder="내용을 입력해 주세요."
          multiline
          textAlignVertical="top"
          onChange={props.onChangeContents}
          defaultValue={props.data?.fetchBoard.contents || ''}
        />
        <S.HashWrap>
          <R.View style={{ flexDirection: 'row' }}>
            {props.hashArr?.map((el: string, idx: number) => (
              <WhiteTag key={idx} text={el} padding="4px 8px" onPress={props.deleteHash(idx)} />
            ))}
          </R.View>
          <S.TagInput
            placeholder="키워드를 입력해 주세요."
            onChange={props.onKeyUp}
            ref={props.tagInput}
          />
        </S.HashWrap>
        <S.photoWrap>
          {props.images?.map((el: string, idx: number) => (
            <S.PhotoUpload key={idx}>
              <R.Image style={{ width: '100%', height: '100%' }} source={{ uri: el }} />
            </S.PhotoUpload>
          ))}
          <S.PhotoUpload onPress={props.addImage}>
            <Icon name="add" size={20} color="white" />
          </S.PhotoUpload>
        </S.photoWrap>
      </S.Wrap>
      {!props.isEdit ? (
        <GreenButton
          text="등록하기"
          height="10%"
          fontSize="16px"
          fontWeight={500}
          onPressBtn={props.onPressSubmit}
        />
      ) : (
        <GreenButton
          text="수정하기"
          height="10%"
          fontSize="16px"
          fontWeight={500}
          onPressBtn={props.onPressUpdate}
        />
      )}
    </>
  );
};

export default CommunityWriteUI;
