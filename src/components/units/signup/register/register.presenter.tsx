import React from 'react';
import * as R from 'react-native';
import * as S from './register.style';
import { ScrollView } from 'react-native-gesture-handler';
import InputBasic from '../../../commons/inputs/basic/index';
import GreenButton from '../../../commons/buttons/greenbutton/index';

const RegisterUI = (props) => {
  return (
    <>
      <ScrollView>
        <S.Wrapper>
          <S.BackImage
            source={require('../../../../../public/images/ellipse.png')}
            resizeMode="cover"
          >
            <S.Profile_Image source={require('GoodNeighobrs/public/images/profile.png')} />
            <S.Profile_Camera source={require('../../../../../public/images/camera.png')} />
          </S.BackImage>
          <S.Email_Wrapper>
            <S.Email>이메일 :</S.Email>
            <InputBasic onChange={props.onChangeEmail} value={props.email} />
          </S.Email_Wrapper>
          <R.Text>{props.emailError}</R.Text>
          <S.Password_Wrapper>
            <S.Password>비밀번호 :</S.Password>
            <InputBasic
              onChange={props.onChangePassword}
              value={props.password}
              secureTextEntry={true}
            />
          </S.Password_Wrapper>
          <R.Text>{props.passwordError}</R.Text>
          <S.PasswordConfirm_Wrapper>
            <S.Password_Confirm>비밀번호 재확인 :</S.Password_Confirm>
            <InputBasic onChange={props.onChangePassConfirm} secureTextEntry={true} />
          </S.PasswordConfirm_Wrapper>
          <R.Text>{props.passwordConfirmError}</R.Text>
          <S.Name_Wrapper>
            <R.Text>닉네임 :</R.Text>
            <InputBasic onChange={props.onChangeName} value={props.name} />
          </S.Name_Wrapper>
          <R.Text>{props.nameError}</R.Text>
          <S.Submit_Wrapper>
            <GreenButton
              text="회원가입"
              fontSize="20px;"
              width="100%"
              onPressBtn={props.onPressSubmit}
            />
          </S.Submit_Wrapper>
        </S.Wrapper>
      </ScrollView>
    </>
  );
};
export default RegisterUI;
