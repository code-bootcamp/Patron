import styled from '@emotion/native';

export const Wrapper = styled.View`
  padding: 20px 0px 20px 0px;
  background-color: white;
  flex-direction: row;
  border-bottom-width: 1px;
  border-bottom-color: #f0f0f0;
`;

export const PhotoWrapper = styled.View`
  width: 32px;
  height: 32px;
  border-radius: 50px;
  background-color: lightgray;
`;

export const CommentWrapper = styled.View`
  width: 85%;
  padding-left: 10px;
`;

export const CommentTop = styled.View`
  flex-direction: row;
  align-items: center;
  padding-bottom: 5px;
`;

export const Name = styled.Text`
  font-size: 12px;
  color: rgba(0, 0, 0, 0.9);
`;

export const Time = styled.Text`
  font-size: 10px;
  color: rgba(0, 0, 0, 0.4);
  padding-left: 10px;
`;

export const CommentBottom = styled.View``;

export const Contents = styled.Text`
  color: rgba(0, 0, 0, 0.9);
`;

export const EandDWrapper = styled.View`
  align-items: center;
`;
