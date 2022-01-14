import React from 'react';
// import * as R from 'react-native';
import GreenButton from '../../../commons/buttons/greenbutton';
import InputBasic from '../../../commons/inputs/basic';
import * as S from './firebase.styles';

const FirebaseUI = (props) => {
  return (
    <>
      <S.Wrapper>
        <S.Title_Wrapper>
          <S.Title>가장 좋은 이웃 GoodNeighbors</S.Title>
        </S.Title_Wrapper>
        <S.Email_Wrapper>
          <InputBasic
            width="328px"
            height="58px"
            placeholder="이메일"
            onChange={props.onChangeEmail}
          />
          {/* <R.TextInput placeholder="이메일" onChange={props.onChangeEmail} /> */}
        </S.Email_Wrapper>
        <S.Password_Wrapper>
          <InputBasic
            width="328px"
            height="58px"
            placeholder="비밀번호"
            onChange={props.onChangePassword}
          />
          {/* <R.TextInput placeholder="비밀번호" onChange={props.onChangePassword} /> */}
        </S.Password_Wrapper>
        <S.Submit_Wrapper>
          <GreenButton
            text="등록하기"
            onPressBtn={props.onPressLogin}
            width="100%"
            fontSize="20px"
            height="50px"
          />
        </S.Submit_Wrapper>
      </S.Wrapper>
    </>
  );
};
export default FirebaseUI;
