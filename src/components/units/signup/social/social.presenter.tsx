import React from 'react';
import * as R from 'react-native';
import * as S from './social.styles';

const SocialUI = (props) => {
  return (
    <S.Wrapper>
      <S.Title_Wrapper>
        <S.Title>가장 좋은 이웃 GoodNeighbors</S.Title>
      </S.Title_Wrapper>
      <S.Kakao_Wrapper>
        <S.Icon source={require('../../../../../public/images/kakao.png')} />
        <R.Text>카카오로 시작하기</R.Text>
      </S.Kakao_Wrapper>
      <S.Google_Wrapper>
        <S.Icon source={require('../../../../../public/images/google.png')} />
        <R.Text>구글로 시작하기</R.Text>
      </S.Google_Wrapper>
      <S.Bottom_Wrapper>
        <R.View>
          <S.Login onPress={() => props.navigation.navigate('login')}>로그인</S.Login>
        </R.View>
        <R.View>
          <R.Text>|</R.Text>
        </R.View>
        <R.View>
          <S.Register onPress={() => props.navigation.navigate('register')}>회원가입</S.Register>
        </R.View>
      </S.Bottom_Wrapper>
    </S.Wrapper>
  );
};
export default SocialUI;
