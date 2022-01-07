import styled from '@emotion/native';

export const Wrapper = styled.View`
  flex: 1;
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const Image_Wrapper = styled.View`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;
`;

export const BackImage = styled.ImageBackground`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 110px;
  height: 110px;
`;

export const Profile_Image = styled.Image`
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
`;

export const Profile_Camera = styled.Image`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  margin: 75px 0px 0px 65px;
`;

export const Welcome_Wrapper = styled.View`
  flex: 1;
  display: flex;
  align-items: center;
  width: 100%;
`;

export const Welcome_Letter = styled.Text`
  font-size: 30px;
  font-weight: 700;
  text-align: center;
`;

export const Submit_Wrapper = styled.View`
  flex: 0.2;
  width: 100%;
`;
