import * as N from './campaign.style';
import * as R from 'react-native';
import * as React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import WhiteButton from '../../../commons/buttons/whitebutton';
import ColoredTag from '../../../commons/tags/coloredtag';
import { IPropsNewsCampaignUI } from './campaign.types';

const NewsCampaignUI = (props: IPropsNewsCampaignUI) => {
  return (
    <N.WholeWrapper>
      <ScrollView>
        <N.First_Wrapper>
          <N.ContentWrapper>
            <N.HeaderWrapper>
              <R.Image source={require('../../../../../public/images/news/children.png')} />
              <R.View>
                <N.Title>산골 형제 민웅이와 지웅이</N.Title>
                <N.Content>두 소년의 따뜻한 울타리가 되어주세요!</N.Content>
                <N.TagWrapper>
                  <ColoredTag text={'#주거'} padding={'3px 8px 5px 8px'} fontSize={'8px'} />
                  <ColoredTag text={'#소외계층'} padding={'3px 8px 5px 8px'} fontSize={'8px'} />
                </N.TagWrapper>
              </R.View>
            </N.HeaderWrapper>
            {props.isMore && (
              <N.BodyWrapper>
                <N.ParagraphWrapper>
                  <N.DataWraper>
                    <R.Image source={require('../../../../../public/images/news/dot.png')} />
                    <N.Data>22.01.22</N.Data>
                  </N.DataWraper>
                  <N.LineWrapper>
                    <R.Image source={require('../../../../../public/images/news/line1.png')} />
                    <N.InnerWrapper>
                      <N.Title>가구를 변경했어요!</N.Title>
                      <N.Content>
                        냉장고, 가스레인지, 세탁기 등 노후된 가구와 가전을 변경했어요! 특히 두
                        형제는 처음으로 자신만의 깨끗한 책상과 침대가 생겨서 매우 기뻐했답니다.
                      </N.Content>
                      <N.ImageWrapper>
                        <R.Image
                          source={require('../../../../../public/images/news/bedroom.png')}
                          style={{ marginRight: 10 }}
                        />
                        <N.ParagraphWrapper>
                          <N.TopImageWrapper>
                            <R.Image
                              source={require('../../../../../public/images/news/fatherson.png')}
                              style={{ marginRight: 5 }}
                            />
                            <R.Image
                              source={require('../../../../../public/images/news/desk.png')}
                            />
                          </N.TopImageWrapper>
                          <N.BottomImageWrapper>
                            <R.Image
                              source={require('../../../../../public/images/news/kitchen.png')}
                              style={{ marginRight: 5 }}
                            />
                            <R.Image source={require('../../../../../public/images/news/tv.png')} />
                          </N.BottomImageWrapper>
                        </N.ParagraphWrapper>
                      </N.ImageWrapper>
                    </N.InnerWrapper>
                  </N.LineWrapper>
                </N.ParagraphWrapper>
                <N.ParagraphWrapper>
                  <N.DataWraper>
                    <R.Image source={require('../../../../../public/images/news/dot.png')} />
                    <R.Text>22.01.21</R.Text>
                  </N.DataWraper>
                  <N.LineWrapper>
                    <R.Image source={require('../../../../../public/images/news/line2.png')} />
                    <N.InnerWrapper>
                      <N.Title>아늑한 집으로 이사했어요!</N.Title>
                      <N.Content>
                        전세 보증금을 지원하여 편의시설, 학교 등 접근성이 용이한 시내로 이사했어요
                        새로운 집은 작은방 2개, 부엌 1개 통로 겸 거실 1개로 이루어진 아늑한
                        집입니다. 아버지는 안정적인 주거 환경에서 형제를 키울 수 있어 기뻐하셨고,
                        민웅이와 지웅이는 집 밖으로 나오고 싶어 하지 않을 정도로 좋아했어요
                      </N.Content>
                      <R.Image source={require('../../../../../public/images/news/house.png')} />
                    </N.InnerWrapper>
                  </N.LineWrapper>
                </N.ParagraphWrapper>
                <N.ParagraphWrapper>
                  <N.DataWraper>
                    <R.Image source={require('../../../../../public/images/news/dot.png')} />
                    <R.Text>22.01.19</R.Text>
                  </N.DataWraper>
                  <N.LineWrapper>
                    <R.Image source={require('../../../../../public/images/news/line3.png')} />
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
        </N.First_Wrapper>
        <N.Second_Wrapper>
          <N.ContentWrapper>
            <N.HeaderWrapper>
              <R.Image source={require('../../../../../public/images/news/gift.png')} />
              <R.View>
                <N.Title>더욱 특별한 기념일</N.Title>
                <N.Content>특별한 기념일을 위한 특별한 기부!</N.Content>
                <N.TagWrapper>
                  <ColoredTag text={'#기부'} padding={'3px 8px 5px 8px'} fontSize={'8px'} />
                  <ColoredTag text={'#소외계층'} padding={'3px 8px 5px 8px'} fontSize={'8px'} />
                  <ColoredTag text={'#모금중'} padding={'3px 8px 5px 8px'} fontSize={'8px'} />
                </N.TagWrapper>
              </R.View>
            </N.HeaderWrapper>
          </N.ContentWrapper>
        </N.Second_Wrapper>
        <N.Third_Wrapper>
          <N.ContentWrapper>
            <N.HeaderWrapper>
              <R.Image source={require('../../../../../public/images/news/dahyun.png')} />
              <R.View>
                <N.Title>다현아 힘을 내</N.Title>
                <N.Content>근이영양증을 앓는 다현이</N.Content>
                <N.TagWrapper>
                  <ColoredTag text={'#기부'} padding={'3px 8px 5px 8px'} fontSize={'8px'} />
                  <ColoredTag text={'#치료'} padding={'3px 8px 5px 8px'} fontSize={'8px'} />
                </N.TagWrapper>
              </R.View>
            </N.HeaderWrapper>
            {props.secondIsMore && (
              <N.BodyWrapper>
                <N.ParagraphWrapper>
                  <N.DataWraper>
                    <R.Image source={require('../../../../../public/images/news/dot.png')} />
                    <N.Data>21.12.22</N.Data>
                  </N.DataWraper>
                  <N.LineWrapper>
                    <R.Image source={require('../../../../../public/images/news/line1.png')} />
                    <N.InnerWrapper>
                      <N.Title>휠체어를 전달했어요!</N.Title>
                      <N.Content>
                        목욕용 휠체어뿐만 아니라, 외부 활동용 휠체어 또한 지원하였어요! 다현이에게
                        맞는 특수전동휠체어를 찾아보는데 과정이 결코 녹녹치 않았습니다.
                        헤드컨트롤러와 호환이 되고 제동이 잘 되야 하며 몸을 뒤로 젖히는 기능과 좁은
                        공간에서 이동과 회전이 가능하고 흔들림에 강해야 했습니다. 우선 국내 제품에
                        옵션을 추가하는 방법을 알아봤지만 결국 실패. 해외 제품으로 알아보는데
                        다현이에게 맞는 제품의 가격이 너무 고가여서 모금액으로도 엄두를 낼 수
                        없었습니다.
                      </N.Content>
                      <N.ImageWrapper>
                        <R.Image
                          source={require('../../../../../public/images/news/wheelchair.jpg')}
                          style={{ width: 100, height: 100, marginRight: 10 }}
                        />
                        <N.ParagraphWrapper>
                          <N.TopImageWrapper>
                            <R.Image
                              source={require('../../../../../public/images/news/fatherson.png')}
                              style={{ marginRight: 5 }}
                            />
                            <R.Image
                              source={require('../../../../../public/images/news/desk.png')}
                            />
                          </N.TopImageWrapper>
                          <N.BottomImageWrapper>
                            <R.Image
                              source={require('../../../../../public/images/news/kitchen.png')}
                              style={{ marginRight: 5 }}
                            />
                            <R.Image source={require('../../../../../public/images/news/tv.png')} />
                          </N.BottomImageWrapper>
                        </N.ParagraphWrapper>
                      </N.ImageWrapper>
                    </N.InnerWrapper>
                  </N.LineWrapper>
                </N.ParagraphWrapper>
                <N.ParagraphWrapper>
                  <N.DataWraper>
                    <R.Image source={require('../../../../../public/images/news/dot.png')} />
                    <R.Text>21.12.20</R.Text>
                  </N.DataWraper>
                  <N.LineWrapper>
                    <R.Image source={require('../../../../../public/images/news/line2.png')} />
                    <N.InnerWrapper>
                      <N.Title>휠체어에 앉아서 운동할수있어요!</N.Title>
                      <N.Content>
                        휠체어를 사용하는 장애인은 주거 환경에서 접근성이 부족하여 일상생활활동에
                        어려움을 겪는다. 다양한 스마 트 기술을 이용한 스마트홈은 휠체어 사용
                        장애인의 일상생활활동에 있어 접근성을 높여줄 수 있다. 본 연구에서는 휠체어를
                        사용하는 장애인을 위해 스마트홈을 구축하였고, 구축된 스마트홈에 대한
                        사용성평가를 실시하였다. 사용 성평가는 시나리오기반사용경험평가, 도구적
                        일상생활활동평가, 그리고 심층설문방법을 사용하였다
                      </N.Content>
                      <R.Image
                        source={require('../../../../../public/images/news/danny.jpg')}
                        style={{ width: 150, height: 150 }}
                      />
                    </N.InnerWrapper>
                  </N.LineWrapper>
                </N.ParagraphWrapper>
              </N.BodyWrapper>
            )}
          </N.ContentWrapper>
          {props.secondIsMore ? (
            <N.ButtonWrapper>
              <WhiteButton
                text="접기"
                borderRadius={8}
                height="52px"
                fontSize="15px"
                width="287px"
                onPressBtn={props.onPressSecondIsMore}
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
                onPressBtn={props.onPressSecondIsMore}
              />
            </N.ButtonWrapper>
          )}
        </N.Third_Wrapper>
      </ScrollView>
    </N.WholeWrapper>
  );
};
export default NewsCampaignUI;
