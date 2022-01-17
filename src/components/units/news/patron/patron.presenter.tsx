import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import * as S from './patron.styles';
import * as R from 'react-native';
import ColoredTag from '../../../commons/tags/coloredtag';
import WhiteButton from '../../../commons/buttons/whitebutton';
import { IPropsNewsPatronUI } from './patron.types';

const NewsPatronUI = (props: IPropsNewsPatronUI) => {
  return (
    <S.WholeWrapper>
      <ScrollView>
        <S.First_Wrapper>
          <S.ContentWrapper>
            <S.HeaderWrapper>
              <R.Image source={require('../../../../../public/images/news/students.png')} />
              <R.View>
                <S.Title>반짝이는 소녀에게</S.Title>
                <S.Content>국내 여아 후원하기</S.Content>
                <S.TagWrapper>
                  <ColoredTag text={'#여아'} padding={'3px 8px 5px 8px'} fontSize={'8px'} />
                  <ColoredTag text={'#생활지원'} padding={'3px 8px 5px 8px'} fontSize={'8px'} />
                  <ColoredTag text={'#교육지원'} padding={'3px 8px 5px 8px'} fontSize={'8px'} />
                </S.TagWrapper>
              </R.View>
            </S.HeaderWrapper>
            {props.isMore && (
              <S.BodyWrapper>
                <S.ParagraphWrapper>
                  <S.DataWraper>
                    <R.Image source={require('../../../../../public/images/news/dot.png')} />
                    <S.Data>22.01.19</S.Data>
                  </S.DataWraper>
                  <S.LineWrapper>
                    <R.Image source={require('../../../../../public/images/news/line1.png')} />
                    <S.InnerWrapper>
                      <S.Title>생리대 키트를 전달했어요!</S.Title>
                      <S.Content>
                        6개월 치의 생리대, 초경 교육서, 파우치 등 여아들에게 꼭 필요한 키트를
                        822명의 학생들에게 전달해드렸습니다.
                      </S.Content>
                      <S.ImageWrapper>
                        <R.Image
                          source={require('../../../../../public/images/news/bedroom.png')}
                          style={{ marginRight: 10 }}
                        />
                      </S.ImageWrapper>
                    </S.InnerWrapper>
                  </S.LineWrapper>
                </S.ParagraphWrapper>
                <S.ParagraphWrapper>
                  <S.DataWraper>
                    <R.Image source={require('../../../../../public/images/news/dot.png')} />
                    <R.Text>22.01.19</R.Text>
                  </S.DataWraper>
                  <S.LineWrapper>
                    <R.Image source={require('../../../../../public/images/news/line2.png')} />
                    <S.InnerWrapper>
                      <S.Title>마스크를 전달했어요!</S.Title>
                      <S.Content>
                        국가마다 국경을 차단하고 식품과 생필품에 대한 조달이 이루어지지 않으면서
                        식품과 생필품 등의 가격이 오르게 되었고, 노동시간에 제약을 받으면서
                        생계유지가 어려웠던 라이베리아 사람들. 코코넛은 요원들과 함께 마을 곳곳을
                        돌아다니며 코로나 19와 외로운 싸움을 하고있는 도움이 필요한 이들에게 물품을
                        전달하며 손을 잡아주었습니다.
                      </S.Content>
                      <R.Image source={require('../../../../../public/images/news/mask.png')} />
                    </S.InnerWrapper>
                  </S.LineWrapper>
                </S.ParagraphWrapper>
                <S.ParagraphWrapper>
                  <S.DataWraper>
                    <R.Image source={require('../../../../../public/images/news/dot.png')} />
                    <R.Text>22.01.18</R.Text>
                  </S.DataWraper>
                  <S.LineWrapper>
                    <R.Image source={require('../../../../../public/images/news/line3.png')} />
                    <S.InnerWrapper>
                      <S.Title>모금 진행중</S.Title>
                      <S.Content>
                        모금액 80,000,000의 80% 목표를 달성했어요! 은국님 정말 감사합니다.
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
              <R.Image source={require('../../../../../public/images/news/rescue.png')} />
              <R.View>
                <S.Title>재난 구호 지원</S.Title>
                <S.Content>화재 위험의 코알라들을 구해주세요</S.Content>
                <S.TagWrapper>
                  <ColoredTag text={'#해외'} padding={'3px 8px 5px 8px'} fontSize={'8px'} />
                  <ColoredTag text={'#동물'} padding={'3px 8px 5px 8px'} fontSize={'8px'} />
                  <ColoredTag text={'#재난'} padding={'3px 8px 5px 8px'} fontSize={'8px'} />
                </S.TagWrapper>
              </R.View>
            </S.HeaderWrapper>
          </S.ContentWrapper>
        </S.Second_Wrapper>
      </ScrollView>
    </S.WholeWrapper>
  );
};
export default NewsPatronUI;
