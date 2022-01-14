import styled from '@emotion/native';

export const Wrapper = styled.View`
  width: 100%;
  height: 100%;
`;

export const Txt = styled.Text``;

export const SelectionWrapper = styled.View`
  flex: 1.5;
  padding: 30px 0px 30px 20px;
  background-color: #fff;
`;

export const SelectionTitle = styled.View`
  padding-bottom: 15px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const SelectionTitleText = styled.Text`
  font-size: 22px;
  font-weight: 700;
  color: #000;
`;

export const SelectionList = styled.View`
  flex-direction: row;
`;

export const Card = styled.View`
  padding-right: 20px;
  width: 170px;
  /* background-color: lightpink; */
  align-items: center;
`;

export const ImgWrapper = styled.Pressable``;

export const CardTag = styled.View`
  padding: 10px;
  position: absolute;
`;

export const CardDetails = styled.View`
  /* background-color: blue; */
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
`;

export const DetailsContent = styled.View`
  /* background-color: lightskyblue; */
  width: 100%;
`;

export const ContentTitle = styled.Text`
  font-weight: 700;
  color: #000;
`;

export const ContentRemark = styled.Text`
  color: #000;
`;

export const DetailsBookmark = styled.View`
  /* background-color: lightseagreen; */
`;

export const RecommendWrapper = styled.View`
  flex: 1;
  width: 100%;
  background-color: #fff;
  margin-top: 20px;
  padding: 30px 20px 30px 20px;
`;

export const RecommendTitle = styled.View`
  padding-bottom: 15px;
`;

export const RecommendTitleText = styled.Text`
  color: #000;
  font-weight: 700;
`;

export const UserName = styled.Text`
  color: #448800;
`;

export const ChildrenList = styled.View`
  flex-direction: row;
  width: 100%;
  /* background-color: yellow; */
  padding: 25px 0px 25px 0px;
  border-bottom-width: 1px;
  border-color: #f0f0f0;
  justify-content: space-between;
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
