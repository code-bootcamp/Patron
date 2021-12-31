import React from 'react';
import * as R from 'react-native';
import * as S from './register.style';
import { ScrollView } from 'react-native-gesture-handler';
import InputBasic from '../../../commons/inputs/basic/index';
import GreenButton from '../../../commons/buttons/greenbutton/index';

const RegisterUI = () => {
  return (
    <>
      <S.Wrapper>
        <ScrollView>
          <R.View>
            <R.Text>이메일: </R.Text>
            <InputBasic />
          </R.View>
          <R.View>
            <R.Text>비밀번호: </R.Text>
            <InputBasic />
          </R.View>
          <R.View>
            <R.Text>비밀번호 재확인: </R.Text>
            <InputBasic />
          </R.View>
          <R.View>
            <R.Text>닉네임: </R.Text>
            <InputBasic />
          </R.View>
          <S.SubmitWrapper>
            <GreenButton text="회원가입" fontSize="20px;" width="100%" />
          </S.SubmitWrapper>
        </ScrollView>
      </S.Wrapper>
    </>
  );
};
export default RegisterUI;
