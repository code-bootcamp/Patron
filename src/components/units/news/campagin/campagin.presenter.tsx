import * as N from './campagin.styles';
import { View, Text, Image } from 'react-native';
import * as React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import WhiteButton from '../../../commons/buttons/whitebutton';
import ColoredTag from '../../../commons/tags/coloredtag';

const CampaginUI = (props) => {
  return (
    <N.WholeWrapper>
      <ScrollView>
        <N.TotalWrapper>
          <N.ContentWrapper>
            <N.HeaderWrapper>
              <Image source={require('../../../../../public/images/news/brothers.png')} />
              <View>
                <N.Title>산골 형제 민웅이와 지웅이</N.Title>
                <N.Content>두 소년의 따뜻한 울타리가 되어주세요!</N.Content>
                <N.TagWrapper>
                  <ColoredTag text={'#주거'} padding={'3px 8px 5px 8px'} fontSize={'8px'} />
                  <ColoredTag text={'#주거'} padding={'3px 8px 5px 8px'} fontSize={'8px'} />
                </N.TagWrapper>
              </View>
            </N.HeaderWrapper>
            {props.isMore && (
              <N.BodyWrapper>
                <N.ParagraphWrapper>
                  <N.DataWraper>
                    <Image source={require('../../../../../public/images/news/dot.png')} />
                    <N.Data>21.12.22</N.Data>
                  </N.DataWraper>
                  <N.LineWrapper>
                    <Image source={require('../../../../../public/images/news/line1.png')} />
                    <N.InnerWrapper>
                      <N.Title>가구를 변경했어요!</N.Title>
                      <N.Content>
                        냉장고, 가스레인지, 세탁기 등 노후된 가구와 가전을 변경했어요! 특히 두
                        형제는 처음으로 자신만의 깨끗한 책상과 침대가 생겨서 매우 기뻐했답니다.
                      </N.Content>
                      <N.ImageWrapper>
                        <Image
                          source={require('../../../../../public/images/news/livingroom.png')}
                          style={{ marginRight: 10 }}
                        />
                        <N.ParagraphWrapper>
                          <N.TopImageWrapper>
                            <Image
                              source={require('../../../../../public/images/news/paint.png')}
                              style={{ marginRight: 5 }}
                            />
                            <Image source={require('../../../../../public/images/news/desk.png')} />
                          </N.TopImageWrapper>
                          <N.BottomImageWrapper>
                            <Image
                              source={require('../../../../../public/images/news/furniture.png')}
                              style={{ marginRight: 5 }}
                            />
                            <Image source={require('../../../../../public/images/news/tv.png')} />
                          </N.BottomImageWrapper>
                        </N.ParagraphWrapper>
                      </N.ImageWrapper>
                    </N.InnerWrapper>
                  </N.LineWrapper>
                </N.ParagraphWrapper>
                <N.ParagraphWrapper>
                  <N.DataWraper>
                    <Image source={require('../../../../../public/images/news/dot.png')} />
                    <Text>21.12.20</Text>
                  </N.DataWraper>
                  <N.LineWrapper>
                    <Image source={require('../../../../../public/images/news/line2.png')} />
                    <N.InnerWrapper>
                      <N.Title>아늑한 집으로 이사했어요!</N.Title>
                      <N.Content>
                        전세 보증금을 지원하여 편의시설, 학교 등 접근성이 용이한 시내로 이사했어요
                        새로운 집은 작은방 2개, 부엌 1개 통로 겸 거실 1개로 이루어진 아늑한
                        집입니다. 아버지는 안정적인 주거 환경에서 형제를 키울 수 있어 기뻐하셨고,
                        민웅이와 지웅이는 집 밖으로 나오고 싶어 하지 않을 정도로 좋아했어요
                      </N.Content>
                      <Image source={require('../../../../../public/images/news/house.png')} />
                    </N.InnerWrapper>
                  </N.LineWrapper>
                </N.ParagraphWrapper>
                <N.ParagraphWrapper>
                  <N.DataWraper>
                    <Image source={require('../../../../../public/images/news/dot.png')} />
                    <Text>21.11.08</Text>
                  </N.DataWraper>
                  <N.LineWrapper>
                    <Image source={require('../../../../../public/images/news/line3.png')} />
                    <N.InnerWrapper>
                      <N.Title>모금 완료</N.Title>
                      <N.Content>
                        모금액 80,000,000의 100% 목표를 달성했어요! 운지님 정말 감사합니다.
                      </N.Content>
                    </N.InnerWrapper>
                  </N.LineWrapper>
                </N.ParagraphWrapper>
              </N.BodyWrapper>
            )}
          </N.ContentWrapper>
          {props.isMore ? (
            <N.ButtonWrapper>
              <WhiteButton
                text="접기"
                borderRadius={8}
                height="52px"
                fontSize="15px"
                width="287px"
                onPressBtn={props.onPressIsMore}
              />
            </N.ButtonWrapper>
          ) : (
            <N.ButtonWrapper>
              <WhiteButton
                text="더보기"
                borderRadius={8}
                height="52px"
                fontSize="15px"
                width="287px"
                onPressBtn={props.onPressIsMore}
              />
            </N.ButtonWrapper>
          )}
        </N.TotalWrapper>
      </ScrollView>
    </N.WholeWrapper>
  );
};
export default CampaginUI;
