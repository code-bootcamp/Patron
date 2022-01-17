import styled from '@emotion/native';

export const Wrapper = styled.View`
  background-color: #fff;
  flex: 1;
`;

export const SearchContainer = styled.View`
  border: 1px solid lightgray;
  border-radius: 8px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 12px 0px 12px;
  margin: 0px 10px 0px 50px;
`;

export const SearchInput = styled.TextInput`
  width: 90%;
`;

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
  justify-content: space-between;
`;

export const ChildName = styled.Text`
  color: #000;
  font-weight: 700;
  padding-bottom: 5px;
`;

export const ChildBio = styled.Text`
  color: #000;
`;

export const ChildrenTags = styled.View`
  flex-direction: row;
  /* background-color: lightskyblue; */
`;

export const ChildBookmark = styled.View`
  /* background-color: lightpink; */
`;

export const NoneWrapper = styled.View`
  justify-content: center;
  align-items: center;
  padding-top: 25px;
`;

export const FirstLine = styled.View`
  padding-top: 10px;
  flex-direction: row;
`;

export const KeywordColor = styled.Text`
  color: #448800;
  font-size: 16px;
`;

export const NoSearchInfo = styled.Text`
  font-size: 16px;
`;
