import * as E from './edit.styles';
import React from 'react';
import GreenButton from '../../../commons/buttons/greenbutton';
import Icon from 'react-native-vector-icons/Ionicons';
import InputBasic from '../../../commons/inputs/basic';
import { IPropsEditUI } from './edit.types';
import { View, Text } from 'react-native';

const EditUI = (props: IPropsEditUI) => {
  return (
    <E.WholeWrapper>
      <E.EditWrapper>
        <E.Header>내 정보 수정</E.Header>
      </E.EditWrapper>
      <E.ProfileWrapper>
        <Icon name="person-circle" size={100}></Icon>
        <E.ProfileName>{props.data?.fetchUserLoggedIn.name}</E.ProfileName>
      </E.ProfileWrapper>
      <E.InputWrapper>
        <View>
          <Text>닉네임</Text>
          <InputBasic height="50px" onChange={props.onChangeName} value={props.name} />
        </View>
        <View>
          <Text>비밀번호</Text>
          <InputBasic height="50px" onChange={props.onChangePassword} value={props.password} />
        </View>
      </E.InputWrapper>
      <GreenButton height="8%" text="수정완료" onPressBtn={props.onClickUpdate} />
    </E.WholeWrapper>
  );
};

export default EditUI;
