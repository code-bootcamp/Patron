import styled from '@emotion/native';

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
  flex-direction: row;
  padding: 0px 0px 0px 15px;
  align-items: stretch;
`;

export const ChildAbout = styled.Pressable`
  width: 80%;
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
`;

export const ChildBookmark = styled.View``;
