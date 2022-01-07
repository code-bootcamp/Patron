import styled from '@emotion/native';

export const Wrapper = styled.View`
  width: 100%;
  height: 100%;
`;

export const Header = styled.View`
  flex: 0.6;
  padding: 20px;
`;

export const Title = styled.Text`
  font-size: 22px;
  font-weight: bold;
`;

export const ContentWrapper = styled.View`
  flex: 10;
  /* background-color: blue; */
`;

export const PostWrapper = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
`;

export const Image = styled.Image`
  width: 80px;
  height: 73px;
  background-color: gray;
  border-radius: 10px;
`;

export const InnerWrapper = styled.View`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;

export const TagWrapper = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 20%;
  padding-left: 10px;
`;

export const Content = styled.Text`
  padding-top: 5px;
`;

export const CountWrapper = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 5px;
  width: 40%;
`;
