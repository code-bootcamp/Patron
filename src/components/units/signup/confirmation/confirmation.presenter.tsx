import React from 'react';
// import * as R from 'react-native';
import * as S from './confirmation.styles';
import GreenButton from '../../../commons/buttons/greenbutton/index';
import { IPropsConfirmationUI } from './confirmation.types';

const ConfirmationUI = (props: IPropsConfirmationUI) => {
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
          <S.Welcome_Letter>어서오세요</S.Welcome_Letter>
          <S.User>{props.data?.fetchUserLoggedIn.name}</S.User>
          <S.Welcome_Letter>님!</S.Welcome_Letter>
        </S.Welcome_Wrapper>
        <S.Submit_Wrapper>
          <GreenButton
            text="홈으로"
            width="100%"
            fontSize="20px"
            height="50px"
            onPressBtn={() => props.navigation.navigate('mainScreen')}
          />
        </S.Submit_Wrapper>
      </S.Wrapper>
    </>
  );
};
export default ConfirmationUI;
