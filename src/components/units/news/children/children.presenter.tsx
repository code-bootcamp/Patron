import React from 'react';
import * as R from 'react-native';
import * as S from './children.styles';
import { ScrollView } from 'react-native-gesture-handler';
import ColoredTag from '../../../commons/tags/coloredtag';
import WhiteButton from '../../../commons/buttons/whitebutton';
import { IPropsNewsChildrenUI } from './children.types';

const NewsChildrenUI = (props: IPropsNewsChildrenUI) => {
  return (
    <S.WholeWrapper>
      <ScrollView>
        <S.First_Wrapper>
          <S.ContentWrapper>
            <S.HeaderWrapper>
              <R.Image source={require('../../../../../public/images/news/acosta.png')} />
              <R.View>
                <S.Title>아코스타 12</S.Title>
                <S.Content>부모님을 잃은 소녀를 보듬어 주세요</S.Content>
                <S.TagWrapper>
                  <ColoredTag text={'#니키라과'} padding={'3px 8px 5px 8px'} fontSize={'8px'} />
                  <ColoredTag text={'#교육지원'} padding={'3px 8px 5px 8px'} fontSize={'8px'} />
                  <ColoredTag text={'#여아'} padding={'3px 8px 5px 8px'} fontSize={'8px'} />
                </S.TagWrapper>
              </R.View>
            </S.HeaderWrapper>
            {props.isMore && (
              <S.BodyWrapper>
                <S.ParagraphWrapper>
                  <S.DataWraper>
                    <R.Image source={require('../../../../../public/images/news/dot.png')} />
                    <S.Data>21.12.22</S.Data>
                  </S.DataWraper>
                  <S.LineWrapper>
                    <R.Image source={require('../../../../../public/images/news/line1.png')} />
                    <S.InnerWrapper>
                      <S.Title>12살이 되었어요!</S.Title>
                      <S.Content>
                        후원자님, 잘 계시나요? 저는 올해 12살이 되었어요! 요즘 저는 토요일을 가장
                        좋아해요! 친구들과 같이 떠들면서 놀고, 요리도 해먹고, 다른 사람들을
                        도와줄수있어서 하루하루 너무 재미있게 보내는거같아요. 그리고 제게 꿈이 하나
                        생겼어요! 저는 나중에 커서 의사가되서 다른 사람들을 많이 도와주고 병도 많이
                        고치고싶어요!
                      </S.Content>
                      <S.ImageWrapper>
                        <S.ParagraphWrapper>
                          <S.TopImageWrapper>
                            <R.Image
                              source={require('../../../../../public/images/news/hospital.jpg')}
                              style={{ width: 150, height: 150, marginRight: 5 }}
                            />
                          </S.TopImageWrapper>
                          <S.BottomImageWrapper>
                            <R.Image
                              source={require('../../../../../public/images/news/doctor.jpg')}
                              style={{ marginRight: 5, width: 100, height: 100 }}
                            />
                          </S.BottomImageWrapper>
                        </S.ParagraphWrapper>
                      </S.ImageWrapper>
                    </S.InnerWrapper>
                  </S.LineWrapper>
                </S.ParagraphWrapper>
                <S.ParagraphWrapper>
                  <S.DataWraper>
                    <R.Image source={require('../../../../../public/images/news/dot.png')} />
                    <R.Text>21.12.20</R.Text>
                  </S.DataWraper>
                  <S.LineWrapper>
                    <R.Image source={require('../../../../../public/images/news/line2.png')} />
                    <S.InnerWrapper>
                      <S.Title>아늑한 집으로 이사했어요!</S.Title>
                      <S.Content>
                        전세 보증금을 지원하여 편의시설, 학교 등 접근성이 용이한 시내로 이사했어요
                        새로운 집은 작은방 2개, 부엌 1개 통로 겸 거실 1개로 이루어진 아늑한
                        집입니다. 아버지는 안정적인 주거 환경에서 형제를 키울 수 있어 기뻐하셨고,
                        민웅이와 지웅이는 집 밖으로 나오고 싶어 하지 않을 정도로 좋아했어요
                      </S.Content>
                      <R.Image source={require('../../../../../public/images/news/house.png')} />
                    </S.InnerWrapper>
                  </S.LineWrapper>
                </S.ParagraphWrapper>
                <S.ParagraphWrapper>
                  <S.DataWraper>
                    <R.Image source={require('../../../../../public/images/news/dot.png')} />
                    <R.Text>21.11.08</R.Text>
                  </S.DataWraper>
                  <S.LineWrapper>
                    <R.Image source={require('../../../../../public/images/news/line3.png')} />
                    <S.InnerWrapper>
                      <S.Title>모금 진행중</S.Title>
                      <S.Content>
                        모금액 3,000,000의 80% 목표를 달성했어요! 여러분들 정말 감사합니다.
                      </S.Content>
                    </S.InnerWrapper>
                  </S.LineWrapper>
                </S.ParagraphWrapper>
              </S.BodyWrapper>
            )}
          </S.ContentWrapper>
          {props.isMore ? (
            <S.ButtonWrapper>
              <WhiteButton
                text="접기"
                borderRadius={8}
                height="52px"
                fontSize="15px"
                width="287px"
                onPressBtn={props.onPressIsMore}
              />
            </S.ButtonWrapper>
          ) : (
            <S.ButtonWrapper>
              <WhiteButton
                text="더보기"
                borderRadius={8}
                height="52px"
                fontSize="15px"
                width="287px"
                onPressBtn={props.onPressIsMore}
              />
            </S.ButtonWrapper>
          )}
        </S.First_Wrapper>
        <S.Second_Wrapper>
          <S.ContentWrapper>
            <S.HeaderWrapper>
              <R.Image source={require('../../../../../public/images/news/roy.png')} />
              <R.View>
                <S.Title>더욱 특별한 기념일</S.Title>
                <S.Content>특별한 기념일을 위한 특별한 기부!</S.Content>
                <S.TagWrapper>
                  <ColoredTag text={'#요르단'} padding={'3px 8px 5px 8px'} fontSize={'8px'} />
                  <ColoredTag text={'#생활지원'} padding={'3px 8px 5px 8px'} fontSize={'8px'} />
                  <ColoredTag text={'#남아'} padding={'3px 8px 5px 8px'} fontSize={'8px'} />
                </S.TagWrapper>
              </R.View>
            </S.HeaderWrapper>
          </S.ContentWrapper>
        </S.Second_Wrapper>
        <S.Third_Wrapper>
          <S.ContentWrapper>
            <S.HeaderWrapper>
              <R.Image source={require('../../../../../public/images/news/samir.png')} />
              <R.View>
                <S.Title>사미르 호시모브 10</S.Title>
                <S.Content>아이의 꿈을 도와주세요</S.Content>
                <S.TagWrapper>
                  <ColoredTag text={'#타지키스탄'} padding={'3px 8px 5px 8px'} fontSize={'8px'} />
                  <ColoredTag text={'#교육지원'} padding={'3px 8px 5px 8px'} fontSize={'8px'} />
                  <ColoredTag text={'#남아'} padding={'3px 8px 5px 8px'} fontSize={'8px'} />
                </S.TagWrapper>
              </R.View>
            </S.HeaderWrapper>
            {props.secondIsMore && (
              <S.BodyWrapper>
                <S.ParagraphWrapper>
                  <S.DataWraper>
                    <R.Image source={require('../../../../../public/images/news/dot.png')} />
                    <S.Data>21.12.22</S.Data>
                  </S.DataWraper>
                  <S.LineWrapper>
                    <R.Image source={require('../../../../../public/images/news/line1.png')} />
                    <S.InnerWrapper>
                      <S.Title>아이의 감사편지가 왔어요!</S.Title>
                      <S.Content>
                        보내주신 편지를 받고 혼자가 아님에 정말 행복하고 감사했어요. 이렇게 이야기할
                        기회가 생겨서 좋아요. 어디에 있든지 저의 가장 친한 친구가 있다는 게 정말
                        행복해요. 후원자님이 저를 자랑스러워할 수 있도록 열심히 공부할게요!
                      </S.Content>
                      <S.ImageWrapper>
                        <R.Image
                          source={require('../../../../../public/images/news/bedroom.png')}
                          style={{ marginRight: 10 }}
                        />
                        <S.ParagraphWrapper>
                          <S.TopImageWrapper>
                            <R.Image
                              source={require('../../../../../public/images/news/fatherson.png')}
                              style={{ marginRight: 5 }}
                            />
                            <R.Image
                              source={require('../../../../../public/images/news/desk.png')}
                            />
                          </S.TopImageWrapper>
                          <S.BottomImageWrapper>
                            <R.Image
                              source={require('../../../../../public/images/news/kitchen.png')}
                              style={{ marginRight: 5 }}
                            />
                            <R.Image source={require('../../../../../public/images/news/tv.png')} />
                          </S.BottomImageWrapper>
                        </S.ParagraphWrapper>
                      </S.ImageWrapper>
                    </S.InnerWrapper>
                  </S.LineWrapper>
                </S.ParagraphWrapper>
                <S.ParagraphWrapper>
                  <S.DataWraper>
                    <R.Image source={require('../../../../../public/images/news/dot.png')} />
                    <R.Text>21.12.20</R.Text>
                  </S.DataWraper>
                  <S.LineWrapper>
                    <R.Image source={require('../../../../../public/images/news/line2.png')} />
                    <S.InnerWrapper>
                      <S.Title>아늑한 집으로 이사했어요!</S.Title>
                      <S.Content>
                        전세 보증금을 지원하여 편의시설, 학교 등 접근성이 용이한 시내로 이사했어요
                        새로운 집은 작은방 2개, 부엌 1개 통로 겸 거실 1개로 이루어진 아늑한
                        집입니다. 아버지는 안정적인 주거 환경에서 형제를 키울 수 있어 기뻐하셨고,
                        민웅이와 지웅이는 집 밖으로 나오고 싶어 하지 않을 정도로 좋아했어요
                      </S.Content>
                      <R.Image source={require('../../../../../public/images/news/house.png')} />
                    </S.InnerWrapper>
                  </S.LineWrapper>
                </S.ParagraphWrapper>
                <S.ParagraphWrapper>
                  <S.DataWraper>
                    <R.Image source={require('../../../../../public/images/news/dot.png')} />
                    <R.Text>21.11.08</R.Text>
                  </S.DataWraper>
                  <S.LineWrapper>
                    <R.Image source={require('../../../../../public/images/news/line3.png')} />
                    <S.InnerWrapper>
                      <S.Title>모금 완료</S.Title>
                      <S.Content>
                        모금액 80,000,000의 100% 목표를 달성했어요! 은국님 정말 감사합니다.
                      </S.Content>
                    </S.InnerWrapper>
                  </S.LineWrapper>
                </S.ParagraphWrapper>
              </S.BodyWrapper>
            )}
          </S.ContentWrapper>
          {props.secondIsMore ? (
            <S.ButtonWrapper>
              <WhiteButton
                text="접기"
                borderRadius={8}
                height="52px"
                fontSize="15px"
                width="287px"
                onPressBtn={props.onPressSecondIsMore}
              />
            </S.ButtonWrapper>
          ) : (
            <S.ButtonWrapper>
              <WhiteButton
                text="더보기"
                borderRadius={8}
                height="52px"
                fontSize="15px"
                width="287px"
                onPressBtn={props.onPressSecondIsMore}
              />
            </S.ButtonWrapper>
          )}
        </S.Third_Wrapper>
      </ScrollView>
    </S.WholeWrapper>
  );
};
export default NewsChildrenUI;
