import { Text, ScrollView } from 'react-native';
import * as P from './post.styles';
import React from 'react';
import ColoredTag from '../../../commons/tags/coloredtag';
import Icon from 'react-native-vector-icons/Ionicons';

const MypagePostUI = () => {
  const ContentitemList = [{ content: '저와 함께 여행중인 데르가 어느덧 성인이 되었습니다.' }];

  return (
    <P.Wrapper>
      <P.Header>
        <P.Title>커뮤니티 글 목록</P.Title>
      </P.Header>
      <P.ContentWrapper>
        <ScrollView horizontal={true}>
          {ContentitemList.map((el, index) => (
            <P.PostWrapper key={index}>
              <P.Image source={require('../../../../../public/images/child.png')} />
              <P.InnerWrapper>
                <P.TagWrapper>
                  <ColoredTag></ColoredTag>
                  <ColoredTag></ColoredTag>
                  <ColoredTag></ColoredTag>
                </P.TagWrapper>
                <P.Content numberOfLines={1} ellipsizeMode="tail">
                  {el.content}
                </P.Content>
                <P.CountWrapper>
                  <Icon name="heart-outline" size={20}></Icon>
                  <Text>2321</Text>
                  <Icon name="chatbubble-outline" size={20}></Icon>
                  <Text>32</Text>
                </P.CountWrapper>
              </P.InnerWrapper>
            </P.PostWrapper>
          ))}
        </ScrollView>
      </P.ContentWrapper>
    </P.Wrapper>
  );
};

export default MypagePostUI;
