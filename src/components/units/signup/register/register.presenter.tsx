import React from 'react';
import * as R from 'react-native';
import * as S from './register.style';
import { ScrollView } from 'react-native-gesture-handler';
import InputBasic from '../../../commons/inputs/basic/index';
import GreenButton from '../../../commons/buttons/greenbutton/index';
import { IPropsRegisterUI } from './register.types';

const RegisterUI = (props: IPropsRegisterUI) => {
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
          <S.Error_Text>{props.emailError}</S.Error_Text>
          <S.Password_Wrapper>
            <S.Password>비밀번호 :</S.Password>
            <InputBasic
              onChange={props.onChangePassword}
              value={props.password}
              secureTextEntry={true}
            />
          </S.Password_Wrapper>
          <S.Error_Text>{props.passwordError}</S.Error_Text>
          <S.PasswordConfirm_Wrapper>
            <S.Password_Confirm>비밀번호 재확인 :</S.Password_Confirm>
            <InputBasic onChange={props.onChangePassConfirm} secureTextEntry={true} />
          </S.PasswordConfirm_Wrapper>
          <S.Error_Text>{props.passwordConfirmError}</S.Error_Text>
          <S.Name_Wrapper>
            <S.Name>닉네임 :</S.Name>
            <InputBasic onChange={props.onChangeName} value={props.name} />
          </S.Name_Wrapper>
          <S.Error_Text>{props.nameError}</S.Error_Text>
          <S.Email_Auth>
            <S.Email_Authentication>이메일 인증 :</S.Email_Authentication>
            <InputBasic onChange={props.onChangeEmailConfirm} />
          </S.Email_Auth>
          <S.Auth>
            <InputBasic
              width="65%"
              height="95%"
              placeholder="인증번호"
              onChange={props.onChangeTempNumber}
            />
            {!props.isAuth ? (
              <GreenButton
                text="인증받기"
                onPressBtn={props.onPressAuth}
                width="108px"
                height="48px"
              />
            ) : (
              <GreenButton
                text="인증하기"
                onPressBtn={props.onPressAuth}
                width="108px"
                height="48px"
              />
            )}
          </S.Auth>
          <R.Text>{props.tempNumber}</R.Text>
          <S.Submit_Wrapper>
            <GreenButton
              text="회원가입"
              fontSize="20px;"
              width="100%"
              height="50px"
              onPressBtn={props.onPressSubmit}
            />
          </S.Submit_Wrapper>
        </S.Wrapper>
      </ScrollView>
    </>
  );
};
export default RegisterUI;
