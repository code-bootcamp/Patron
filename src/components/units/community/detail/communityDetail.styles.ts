import styled from '@emotion/native';

export const Wrap = styled.ScrollView`
  width: 100%;
  background-color: #f6f6f7;
`;

export const DetailHeader = styled.ImageBackground`
  justify-content: flex-end;
  width: 100%;
  height: 260px;
  padding: 23px;
  background-color: #f0f0f0;
`;

export const HeaderTitle = styled.Text`
  width: 85%;
  margin-bottom: 12px;
  color: white;
  font-size: 22px;
  font-weight: 700;
`;

export const HeaderFooter = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

export const FooterInner = styled.View`
  flex-direction: row;
`;

export const HeaderFooterText = styled.Text`
  color: #ffffff;
  font-size: 10px;
`;

export const DetailBody = styled.View`
  padding: 24px;
  background-color: #ffffff;
`;

export const DetailTitle = styled.Text`
  color: #000000;
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 20px;
`;

export const DetailImg = styled.Image`
  width: 100%;
  height: 140px;
  margin-bottom: 16px;
  background-color: #9f9f9f;
`;

export const DetailContents = styled.Text`
  width: 100%;
  color: #000000;
  font-size: 14px;
  margin-bottom: 32px;
`;

export const HashWrap = styled.View`
  flex-wrap: wrap;
  flex-direction: row;
  width: 100%;
  margin-bottom: 36px;
`;

export const PicWrap = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding-top: 20px;
  border-top: 1px solid black;
`;

export const PicTitle = styled.Text`
  color: #000000;
  font-size: 14px;
  font-weight: 500;
`;

export const BigPic = styled.Image`
  width: 49%;
  height: 160px;
  border-radius: 8px;
  background-color: #9f9f9f;
`;

export const SmaillPicWrap = styled.View`
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-around;
  width: 49%;
  height: 160px;
`;

export const SmallPic = styled.Image`
  width: 78px;
  height: 78px;
  margin-bottom: 4px;
  border-radius: 8px;
  background-color: #9f9f9f;
`;

export const MapWrap = styled.View`
  margin-top: 8px;
  background-color: #ffffff;
`;

export const MapHeader = styled.Text`
  padding: 12px 24px;
  color: #000000;
`;

export const MapFooter = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 12px 24px;
  color: #000000;
`;

export const MapFooterLeft = styled.View`
  flex-direction: row;
`;

export const MapFooterText = styled.Text`
  color: #000000;
`;

export const DetailFooter = styled.View`
  margin-top: 8px;
  background-color: #ffffff;
`;

export const FooterHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 48px;
  border-bottom-width: 1px;
  border-bottom-color: #f6f6f7;
`;

export const IconWrap = styled.Pressable`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 50%;
  padding: 0 17%;
`;
