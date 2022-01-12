import React from 'react';
import * as R from 'react-native';
import * as S from './login.styles';
import InputBasic from '../../../commons/inputs/basic/index';
import GreenButton from '../../../commons/buttons/greenbutton/index';

const LoginUI = (props) => {
  return (
    <S.Wrapper>
      <S.Title_Wrapper>
        <S.Title>가장 좋은 이웃 GoodNeighbors</S.Title>
      </S.Title_Wrapper>
      <S.Email_Wrapper>
        <InputBasic
          placeholder="이메일"
          value={props.email}
          onChange={props.onChangeEmail}
          height="55px"
        />
      </S.Email_Wrapper>
      <S.Password_Wrapper>
        <InputBasic
          placeholder="비밀번호"
          height="55px"
          value={props.password}
          secureTextEntry={true}
          onChange={props.onChangePassword}
        />
      </S.Password_Wrapper>
      <S.Button_Wrapper>
        <GreenButton
          text={'로그인'}
          width={'100%'}
          height={'48px'}
          borderRadius={15}
          fontSize={'20px'}
          onPressBtn={props.onPressLogin}
        />
      </S.Button_Wrapper>
      <S.Bottom_Wrapper>
        <R.View>
          <S.Search_Email>아이디 찾기</S.Search_Email>
        </R.View>
        <R.View>
          <R.Text>|</R.Text>
        </R.View>
        <R.View>
          <S.Search_Password>비밀번호 찾기</S.Search_Password>
        </R.View>
      </S.Bottom_Wrapper>
    </S.Wrapper>
  );
};
export default LoginUI;
