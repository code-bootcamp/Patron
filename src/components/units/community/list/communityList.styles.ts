import styled from '@emotion/native';

export const Wrap = styled.View`
  width: 100%;
  height: 100%;
`;

export const ListHeader = styled.ImageBackground`
  flex: 4;
  justify-content: flex-end;
  padding: 24px;
  background-color: #9f9f9f;
`;

export const HeaderInner = styled.View`
  flex-direction: row;
  align-items: flex-end;
  width: 100%;
`;

export const HeaderTitle = styled.Text`
  width: 50%;
  margin-top: 8px;
  color: white;
  font-size: 20px;
  font-weight: 700;
`;

export const HeaderDday = styled.Text`
  width: 50%;
  color: white;
  text-align: right;
`;

export const ListBody = styled.View`
  flex: 10;
`;

export const BodyContent = styled.Pressable`
  width: 33.3%;
  height: 130px;
  overflow: hidden;
  border: 1px solid white;
  background-color: #9f9f9f;
`;

export const ListFooter = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex: 0.6;
  padding: 16px 24px;
  background-color: #ffffff;
`;

export const FooterInner = styled.View`
  width: 85%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 20px;
  border-left: 1px solid #f0f0f0;
`;
