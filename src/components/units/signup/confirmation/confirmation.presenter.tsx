import React from 'react';
// import * as R from 'react-native';
import * as S from './confirmation.styles';
import GreenButton from '../../../commons/buttons/greenbutton/index';

const ConfirmationUI = (props) => {
  return (
    <>
      <S.Wrapper>
        <S.Image_Wrapper>
          <S.BackImage
            source={require('../../../../../public/images/ellipse.png')}
            resizeMode="cover"
          >
            <S.Profile_Image source={require('GoodNeighobrs/public/images/profile.png')} />
            <S.Profile_Camera source={require('../../../../../public/images/camera.png')} />
          </S.BackImage>
        </S.Image_Wrapper>
        <S.Welcome_Wrapper>
          <S.Welcome_Letter>축하합니다!</S.Welcome_Letter>
          <S.Welcome_Letter>{props.data?.fetchUserLoggedIn.name}</S.Welcome_Letter>
          <S.Welcome_Letter>님의 계정이 생성되었어요!</S.Welcome_Letter>
        </S.Welcome_Wrapper>
        <S.Submit_Wrapper>
          <GreenButton
            text="완료"
            width="100%"
            fontSize="20px"
            height="50px"
            onPressBtn={() => props.navigation.navigate('home')}
          />
        </S.Submit_Wrapper>
      </S.Wrapper>
    </>
  );
};
export default ConfirmationUI;
