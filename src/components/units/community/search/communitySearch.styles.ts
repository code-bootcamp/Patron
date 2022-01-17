import styled from '@emotion/native';

export const SearchContainer = styled.View`
  height: 149px;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  border-top-width: 1px;
  border-top-color: #f0f0f0;
`;

export const BoldText = styled.Text`
  color: #448800;
  font-size: 15px;
  font-weight: 500;
`;

export const SearchText = styled.Text`
  padding-top: 6px;
  font-size: 15px;
  font-weight: 500;
`;

export const BestContainer = styled.View`
  margin-top: 10px;
  padding: 10px;
  background-color: #ffffff;
`;

export const BestText = styled.Text`
  margin-bottom: 20px;
  padding: 10px;
  color: #000000;
  font-size: 15px;
  font-weight: 500;
`;

export const BoardContainer = styled.ScrollView`
  width: 100%;
`;

export const SearchHeader = styled.Text`
  padding: 10px 20px;
  color: #000000;
`;

export const Board = styled.Pressable`
  width: 100%;
  height: 178px;
  margin-bottom: 8px;
  background-color: #ffffff;
`;

export const BoardHeader = styled.View`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 138px;
  padding: 16px 24px;
  border-bottom-color: #f0f0f0;
  border-bottom-width: 1px;
`;

export const BoardWrap = styled.View`
  display: flex;
  flex-direction: row;
`;

export const BoardImg = styled.Image`
  width: 80px;
  height: 80px;
  margin-right: 16px;
  background-color: #9f9f9f;
`;

export const ContentWrap = styled.View`
  display: flex;
  justify-content: space-between;
  width: 60%;
  height: 80px;
`;

export const BoardTitle = styled.Text`
  width: 100%;
  height: 30%;
  color: #000000;
  font-size: 16px;
  font-weight: 400;
`;

export const BoardContent = styled.Text`
  height: 50%;
  color: #000000;
  font-size: 12px;
  font-weight: 400;
`;

export const TagContainer = styled.View`
  height: 20%;
  display: flex;
  flex-direction: row;
`;

export const UserWrap = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
export const UserText = styled.Text`
  color: #000000;
  font-size: 10px;
  font-weight: 400;
`;
export const BoardFooter = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 40px;
  padding: 11px 27px;
`;

export const FooterLeft = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 126px;
  height: 24px;
`;

export const LeftInnerWrap = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 53px;
`;

export const FooterText = styled.Text`
  margin-left: 10px;
  color: black;
  font-size: 10px;
`;
