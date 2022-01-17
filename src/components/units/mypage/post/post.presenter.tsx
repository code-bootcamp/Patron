import { ScrollView } from 'react-native';
import * as P from './post.styles';
import React from 'react';
import ColoredTag from '../../../commons/tags/coloredtag';
import Icon from 'react-native-vector-icons/Ionicons';
import { IPropsPostUI } from './post.types';

const MypagePostUI = (props: IPropsPostUI) => {
  return (
    <P.Wrapper>
      <ScrollView>
        <P.ContentWrapper>
          {props.data?.fetchBoards.map((el: any, idx: any) => (
            <P.PostWrapper key={idx}>
              <P.Image source={{ uri: el.images[0] }} />
              <P.InnerWrapper>
                <P.TagWrapper>
                  <ColoredTag></ColoredTag>
                  <ColoredTag></ColoredTag>
                  <ColoredTag></ColoredTag>
                </P.TagWrapper>
                <P.Content numberOfLines={4} ellipsizeMode="tail">
                  {el.contents}
                </P.Content>
                <P.CountWrapper>
                  <Icon name="heart-outline" size={20}></Icon>
                  <P.LikeCount>{el.likeCount}</P.LikeCount>
                </P.CountWrapper>
              </P.InnerWrapper>
            </P.PostWrapper>
          ))}
        </P.ContentWrapper>
      </ScrollView>
    </P.Wrapper>
  );
};

export default MypagePostUI;
