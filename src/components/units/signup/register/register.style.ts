import styled from '@emotion/native';

export const Wrapper = styled.View`
  flex: 1;
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 45px;
  background-color: #ffffff;
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
  margin-top: 15px;
`;

export const Profile_Camera = styled.Image`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  margin: 75px 0px 0px 65px;
`;

export const Email_Wrapper = styled.View`
  flex: 1;
  width: 100%;
  margin-top: 10px;
`;

export const Email = styled.Text`
  font-size: 15px;
  font-weight: 400;
  margin-bottom: 5px;
`;

export const Password_Wrapper = styled.View`
  flex: 1;
  width: 100%;
`;

export const Password = styled.Text`
  font-size: 15px;
  font-weight: 400;
  margin-bottom: 5px;
`;

export const PasswordConfirm_Wrapper = styled.View`
  flex: 1;
  width: 100%;
`;

export const Password_Confirm = styled.Text`
  font-size: 15px;
  font-weight: 400;
  margin-bottom: 5px;
`;

export const Name_Wrapper = styled.View`
  flex: 1;
  width: 100%;
`;

export const Name = styled.Text`
  font-size: 15px;
  font-weight: 400;
  margin-bottom: 5px;
`;

export const Email_Auth = styled.View`
  flex: 1;
  width: 100%;
  margin-bottom: 10px;
`;

export const Email_Authentication = styled.Text`
  font-size: 15px;
  font-weight: 400;
  margin-bottom: 5px;
`;

export const Auth = styled.View`
  flex: 1;
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-bottom: 15px;
`;

export const Submit_Wrapper = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const GreenButton = styled.TextInput`
  text-align: center;
`;

export const Error_Text = styled.Text`
  color: red;
`;
