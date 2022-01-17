import * as E from './edit.styles';
import React from 'react';
import GreenButton from '../../../commons/buttons/greenbutton';
import Icon from 'react-native-vector-icons/Ionicons';
import InputBasic from '../../../commons/inputs/basic';
import { IPropsEditUI } from './edit.types';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const EditUI = (props: IPropsEditUI) => {
  return (
    <E.WholeWrapper>
      <ScrollView>
        <E.EditWrapper>
          <E.Header>내 정보 수정</E.Header>
        </E.EditWrapper>
        <E.ProfileWrapper>
          <Icon name="person-circle" size={100} onPress={props.onImageLibraryPress} />
          <E.ProfileName>{props.data?.fetchUserLoggedIn.name}</E.ProfileName>
        </E.ProfileWrapper>
        <E.InputWrapper>
          <View>
            <E.InputNickName>닉네임</E.InputNickName>
            <InputBasic height="50px" onChange={props.onChangeName} value={props.name} />
          </View>
          <View>
            <E.InputCommon>비밀번호</E.InputCommon>
            <InputBasic height="50px" onChange={props.onChangePassword} value={props.password} />
          </View>
          <View>
            <E.InputCommon>생년월일</E.InputCommon>
            <InputBasic />
          </View>
          <View>
            <E.InputCommon>성별</E.InputCommon>
            <InputBasic />
          </View>
        </E.InputWrapper>
      </ScrollView>
      <GreenButton height="8%" text="수정완료" onPressBtn={props.onClickUpdate} />
    </E.WholeWrapper>
  );
};

export default EditUI;
