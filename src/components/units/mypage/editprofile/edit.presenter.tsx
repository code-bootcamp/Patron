import * as E from './edit.styles';
import React from 'react';
import GreenButton from '../../../commons/buttons/greenbutton';
import Icon from 'react-native-vector-icons/Ionicons';
import InputBasic from '../../../commons/inputs/basic';
import { IPropsEditUI } from './edit.types';

const EditUI = (props: IPropsEditUI) => {
  return (
    <E.WholeWrapper>
      <E.EditWrapper>
        <E.Header>내 정보 수정</E.Header>
      </E.EditWrapper>
      <E.ProfileWrapper>
        <Icon name="person-circle" size={100}></Icon>
        <E.ProfileName>김이웃</E.ProfileName>
      </E.ProfileWrapper>
      <E.InputWrapper>
        <E.InputNickName>닉네임</E.InputNickName>
        <InputBasic height="15%" />
        <E.InputEmail>이메일</E.InputEmail>
        <InputBasic height="15%" />
      </E.InputWrapper>
      <GreenButton
        height="8%"
        text="수정완료"
        onPressBtn={() => props.navigation.navigate('mypage', { screen: 'personalinformation' })}
      />
    </E.WholeWrapper>
  );
};

export default EditUI;
