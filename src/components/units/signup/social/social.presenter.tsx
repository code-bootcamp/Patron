import React from 'react';
import * as R from 'react-native';
import * as S from './social.styles';
import { GoogleSigninButton } from '@react-native-google-signin/google-signin';
import ClearButton from '../../../commons/buttons/clearbutton';
import { IPropsSocialUI } from './social.types';

const SocialUI = (props: IPropsSocialUI) => {
  return (
    <S.Wrapper>
      <S.Title_Wrapper>
        <S.Logo_Image source={require('../../../../../public/images/logo.png')} />
        <S.Title>가장 좋은 이웃 GoodNeighbors</S.Title>
      </S.Title_Wrapper>
      <S.Google_Wrapper>
        <GoogleSigninButton
          onPress={props.onGoogleButtonPress}
          style={{ width: 328, height: 48 }}
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Light}
        />
      </S.Google_Wrapper>
      <S.Firebase_Wrapper>
        <ClearButton
          text="이메일로 시작하기"
          width="328px"
          height="50px"
          onPressBtn={() => props.navigation.navigate('firebaselogin')}
        />
      </S.Firebase_Wrapper>
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
