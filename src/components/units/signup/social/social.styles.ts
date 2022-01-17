import styled from '@emotion/native';

export const Wrapper = styled.View`
  flex: 1;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: #ffffff;
`;

export const Title_Wrapper = styled.View`
  flex: 2;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const Logo_Image = styled.Image`
  margin: 20px 0px 15px 0px;
`;

export const Title = styled.Text`
  font-size: 40px;
  font-weight: 700;
`;

export const Firebase_Wrapper = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 15px;
`;

export const Google_Wrapper = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
`;

export const Icon = styled.Image`
  margin-right: 15px;
`;

export const Bottom_Wrapper = styled.View`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Login = styled.Text`
  margin-right: 10px;
`;

export const Register = styled.Text`
  margin-left: 10px;
`;
