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
        <S.TitleInput placeholder="제목을 입력해 주세요." onChange={props.onChangeTitle} />
        <S.ContentsInput
          placeholder="내용을 입력해 주세요."
          multiline
          textAlignVertical="top"
          onChange={props.onChangeContents}
        />
        <S.HashWrap>
          <R.View>
            {props.hashArr.map((el: string, idx: number) => (
              <WhiteTag key={idx} text={el} onPress={props.deleteHash(idx)} />
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
      <GreenButton
        text="등록하기"
        height="10%"
        fontSize="16px"
        fontWeight={500}
        onPressBtn={props.onPressSubmit}
      />
    </>
  );
};

export default CommunityWriteUI;
