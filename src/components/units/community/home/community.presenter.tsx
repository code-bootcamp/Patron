/* eslint-disable react/jsx-no-duplicate-props */
import React, { useState } from 'react';
import * as R from 'react-native';
import * as S from './community.styles';
import Icon from 'react-native-vector-icons/Ionicons';
import ColoredTag from '../../../commons/tags/coloredtag';
import WhiteTag from '../../../commons/tags/whitetag';
import { IPropsCommunityUI } from './community.types';
import { displayedAt } from '../../../../commons/libraries/utils';
import { CommentsCount } from '../../../../commons/libraries/commentsCount';

const CommunityUI = (props: IPropsCommunityUI) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      {/* <R.StatusBar barStyle="dark-content" backgroundColor={'transparent'} translucent={true} /> */}
      <R.View style={{ flex: 1 }}>
        <R.ScrollView>
          <S.Wrap>
            <S.CommunityHeader>
              <S.SubTitle>김이웃님!</S.SubTitle>
              <S.SubTitle>이런 활동은 어떠세요?</S.SubTitle>
              <S.CardContainer horizontal={true} showsHorizontalScrollIndicator={false}>
                {props.bestData?.fetchUseditemsOfTheBest.map((el: any, idx: number) => (
                  <S.Card key={idx} onPress={props.getList(el._id)}>
                    <S.CardBackground
                      style={{ width: 100, height: 100 }}
                      source={{ uri: `https://${el.images[0]}` }}
                    >
                      <ColoredTag text={el.name.split('/')[0]} padding="4px 8px" fontSize="10px" />
                      <S.CardTitle>{el.name.split('/')[1]}</S.CardTitle>
                      <S.DDay>D-3</S.DDay>
                    </S.CardBackground>
                  </S.Card>
                ))}
              </S.CardContainer>
            </S.CommunityHeader>
            <S.HashSection>
              <R.Pressable onPress={() => setModalVisible(true)}>
                <R.View>
                  <S.HashTitle>관심 있는 해시태그를 설정해보세요!</S.HashTitle>
                </R.View>
                <S.HashSubtitle>그에 맞는 주제의 후원을 찾아드릴게요.</S.HashSubtitle>
              </R.Pressable>
              <S.TBD>
                <S.TBDText>TBD</S.TBDText>
              </S.TBD>
            </S.HashSection>
            <S.BoardContainer>
              {props.data?.fetchBoards.map((el: any, idx: number) => (
                <S.Board key={idx} onPress={props.getDetail(el._id)}>
                  <S.BoardHeader>
                    <S.BoardWrap>
                      <S.BoardImg source={{ uri: el.images[0] }} />
                      <S.ContentWrap>
                        <S.BoardTitle numberOfLines={1}>{el.title}</S.BoardTitle>
                        <S.BoardContent numberOfLines={2}>{el.contents}</S.BoardContent>
                        <S.TagContainer>
                          {props.firedata?.tags?.map((el: string, idx: number) => (
                            <S.Tag key={idx}># {el}</S.Tag>
                          ))}
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
          </S.Wrap>
          <R.Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              R.Alert.alert('Modal has been closed.');
              setModalVisible(!modalVisible);
            }}
          >
            <S.ModalWrap>
              <S.ModalHash>
                <S.Close onPress={() => setModalVisible(!modalVisible)}>
                  <Icon name="close" size={20} />
                </S.Close>
                <R.View>
                  <S.ModalHeader>
                    <S.ModalTitle>
                      <R.Text style={{ fontWeight: 'bold' }}>관심있는해시태그</R.Text>를
                      설정해보세요!
                    </S.ModalTitle>
                    <S.ModalSubtitle>
                      선택한 해시태그의 후원이 추천되고, 알림을 받을 수 있어요.
                    </S.ModalSubtitle>
                  </S.ModalHeader>
                  <S.ModalBody>
                    <S.ModalTagWrap>
                      {new Array(6).fill(1).map((_, idx) => (
                        <WhiteTag key={idx} text="태그" />
                      ))}
                    </S.ModalTagWrap>
                    <S.SubmitBtn>
                      <S.SubmitText>확인</S.SubmitText>
                    </S.SubmitBtn>
                  </S.ModalBody>
                </R.View>
              </S.ModalHash>
            </S.ModalWrap>
          </R.Modal>
        </R.ScrollView>
        <S.WriteIcon onPress={() => props.navigation.navigate('community', { screen: 'write' })}>
          <Icon name="pencil" size={20} color="#ffffff" />
        </S.WriteIcon>
      </R.View>
    </>
  );
};

export default CommunityUI;