import React from 'react';
import * as R from 'react-native';
import * as S from './register.style';
import { ScrollView } from 'react-native-gesture-handler';
import InputBasic from '../../../commons/inputs/basic/index';
import GreenButton from '../../../commons/buttons/greenbutton/index';

const RegisterUI = () => {
  return (
    <>
      <ScrollView>
        <S.Wrapper>
          <S.BackImage
            source={require('../../../../../public/images/ellipse.png')}
            resizeMode="cover"
          >
            <R.Image source={require('GoodNeighobrs/public/images/profile.png')} />
            <R.Image source={require('../../../../../public/images/camera.png')} />
          </S.BackImage>
          <S.Email_Wrapper>
            <S.Email>이메일: </S.Email>
            <InputBasic />
          </S.Email_Wrapper>
          <R.Text>Error Message</R.Text>
          <S.Password_Wrapper>
            <S.Password>비밀번호: </S.Password>
            <InputBasic />
          </S.Password_Wrapper>
          <R.Text>Error Message</R.Text>
          <S.PasswordConfirm_Wrapper>
            <S.Password_Confirm>비밀번호 재확인: </S.Password_Confirm>
            <InputBasic />
          </S.PasswordConfirm_Wrapper>
          <R.Text>Error Message</R.Text>
          <S.Name_Wrapper>
            <R.Text>닉네임: </R.Text>
            <InputBasic />
          </S.Name_Wrapper>
          <R.Text>Error Message</R.Text>
          <S.Submit_Wrapper>
            <GreenButton text="회원가입" fontSize="20px;" width="100%" />
          </S.Submit_Wrapper>
        </S.Wrapper>
      </ScrollView>
    </>
  );
};
export default RegisterUI;
