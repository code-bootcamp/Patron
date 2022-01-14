import styled from '@emotion/native';

export const Wrapper = styled.View``;

export const ChildrenList = styled.View`
  flex-direction: row;
  width: 100%;
  padding: 25px 0px 25px 20px;
  border-bottom-width: 1px;
  border-color: #f0f0f0;
  justify-content: space-between;
  background-color: white;
`;

export const ChildImgWrapper = styled.Pressable`
  justify-content: center;
  align-items: center;
`;

export const ChildDetails = styled.View`
  /* background-color: lightcoral; */
  flex-direction: row;
  padding: 0px 0px 0px 15px;
  /* justify-content: space-between; */
  align-items: stretch;
`;

export const ChildAbout = styled.Pressable`
  width: 80%;
  /* background-color: lightyellow; */
  justify-content: center;
`;

export const ChildName = styled.Text`
  color: #000;
  font-weight: 700;
  padding-bottom: 5px;
`;

export const ChildBio = styled.Text`
  color: #000;
`;

export const InputWrapper = styled.View`
  background-color: white;
  padding: 0px 20px 25px 20px;
`;

export const BottomColor = styled.View`
  border-bottom-width: 2px;
  border-bottom-color: #448800;
`;
export const EnterPrice = styled.TextInput``;

export const TotalWrapper = styled.View`
  background-color: white;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  padding: 25px 20px 25px 20px;
`;

export const TotalTitle = styled.Text`
  color: #000;
  font-weight: 700;
  font-size: 16px;
`;

export const TotalPrice = styled.Text`
  color: #000;
  font-weight: 700;
  font-size: 22px;
`;

export const Agree = styled.Text`
  padding: 25px 20px 25px 20px;
  text-align: center;
`;
