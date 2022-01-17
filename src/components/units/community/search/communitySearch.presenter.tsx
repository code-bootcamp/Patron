import React from 'react';
import GetHashs from '../../../../commons/libraries/getHashs';
import { displayedAt } from '../../../../commons/libraries/utils';
import * as S from './communitySearch.styles';
import Icon from 'react-native-vector-icons/Ionicons';
import CommentsCount from '../../../../commons/libraries/commentsCount';
import { ScrollView } from 'react-native-gesture-handler';
import { IPropsCommunitySearchUI } from './communitySearch.types';

const CommunitySearchUI = (props: IPropsCommunitySearchUI) => {
  return (
    <ScrollView>
      {props.data?.fetchBoards.length === 0 ? (
        <>
          <S.SearchContainer>
            <Icon name="alert-circle-outline" size={22} />
            <S.SearchText>
              <S.BoldText>{props.route.params?.search}</S.BoldText>의 검색결과가 없어요.
            </S.SearchText>
            <S.SearchText>검색어를 다시 확인해 주세요!</S.SearchText>
          </S.SearchContainer>
          <S.BestContainer>
            <S.BestText>{props.logindata?.fetchUserLoggedIn.name}님 이 포스팅은 어때요?</S.BestText>
            {props.bestdata?.fetchBoardsOfTheBest.map((el: any, idx: number) => (
              <S.Board key={idx} onPress={props.getDetail(el._id)}>
                <S.BoardHeader>
                  <S.BoardWrap>
                    <S.BoardImg source={{ uri: el.images[0] }} />
                    <S.ContentWrap>
                      <S.BoardTitle numberOfLines={1}>{el.title.split('/')[1]}</S.BoardTitle>
                      <S.BoardContent numberOfLines={2}>{el.contents}</S.BoardContent>
                      <S.TagContainer>
                        <GetHashs id={el._id} />
                      </S.TagContainer>
                    </S.ContentWrap>
                  </S.BoardWrap>
                  <S.UserWrap>
                    <S.UserText>{el.writer}</S.UserText>
                    <S.UserText>{displayedAt(el.createdAt)}</S.UserText>
                  </S.UserWrap>
                </S.BoardHeader>
                <S.BoardFooter>
                  <S.FooterLeft>
                    <S.LeftInnerWrap>
                      <Icon name="heart-outline" size={24} />
                      <S.FooterText>{el.likeCount}</S.FooterText>
                    </S.LeftInnerWrap>
                    <S.LeftInnerWrap>
                      <Icon name="chatbubble-outline" size={20} />
                      <S.FooterText>
                        <CommentsCount boardId={el._id} />
                      </S.FooterText>
                    </S.LeftInnerWrap>
                  </S.FooterLeft>
                  <Icon name="bookmark-outline" size={20} color="white" />
                </S.BoardFooter>
              </S.Board>
            ))}
          </S.BestContainer>
        </>
      ) : (
        <S.BoardContainer>
          <S.SearchHeader>커뮤니티 검색결과({props.data?.fetchBoards.length})</S.SearchHeader>
          {props.data?.fetchBoards.map((el: any, idx: number) => (
            <S.Board key={idx} onPress={props.getDetail(el._id)}>
              <S.BoardHeader>
                <S.BoardWrap>
                  <S.BoardImg source={{ uri: el.images[0] }} />
                  <S.ContentWrap>
                    <S.BoardTitle numberOfLines={1}>{el.title.split('/')[1]}</S.BoardTitle>
                    <S.BoardContent numberOfLines={2}>{el.contents}</S.BoardContent>
                    <S.TagContainer>
                      <GetHashs id={el._id} />
                    </S.TagContainer>
                  </S.ContentWrap>
                </S.BoardWrap>
                <S.UserWrap>
                  <S.UserText>{el.writer}</S.UserText>
                  <S.UserText>{displayedAt(el.createdAt)}</S.UserText>
                </S.UserWrap>
              </S.BoardHeader>
              <S.BoardFooter>
                <S.FooterLeft>
                  <S.LeftInnerWrap>
                    <Icon name="heart-outline" size={24} />
                    <S.FooterText>{el.likeCount}</S.FooterText>
                  </S.LeftInnerWrap>
                  <S.LeftInnerWrap>
                    <Icon name="chatbubble-outline" size={20} />
                    <S.FooterText>
                      <CommentsCount boardId={el._id} />
                    </S.FooterText>
                  </S.LeftInnerWrap>
                </S.FooterLeft>
                <Icon name="bookmark-outline" size={20} color="white" />
              </S.BoardFooter>
            </S.Board>
          ))}
        </S.BoardContainer>
      )}
    </ScrollView>
  );
};

export default CommunitySearchUI;
