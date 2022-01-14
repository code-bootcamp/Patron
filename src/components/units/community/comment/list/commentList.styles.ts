import styled from '@emotion/native';

export const Wrap = styled.View`
  background-color: #ffffff;
`;
export const CommentWrap = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 10px 24px;
`;

export const CommentImg = styled.Pressable`
  width: 32px;
  height: 32px;
  background-color: #f5f5f5;
  border-radius: 16px;
`;

export const ContentsSection = styled.View`
  width: 75%;
`;

export const UserWrap = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 12px;
`;

export const UserName = styled.Text`
  color: black;
  font-size: 12px;
  margin-right: 8px;
`;

export const CreatedAt = styled.Text`
  color: #9f9f9f;
  font-size: 10px;
`;
