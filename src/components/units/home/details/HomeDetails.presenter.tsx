import * as React from 'react';
import { ScrollView, Text } from 'react-native';
import * as E from './HomeDetails.styles';
import WhiteButton from '../../../commons/buttons/whitebutton/';
import AvatarGroup from '../../../commons/avatargroup/index';
import GreenButton from '../../../commons/buttons/greenbutton';
import LinearGradient from 'react-native-linear-gradient';

export default function HomeDetailsUI() {
  return (
    <>
      <E.Wrapper>
        <E.Top>
          <E.TopImgWrapper>
            <E.Img source={require('../../../../../public/images/home/detail_top01.png')} />
          </E.TopImgWrapper>
          <LinearGradient
            colors={['rgba(0, 0, 0, 0.42)', 'rgba(255,255,255,0)']}
            style={{ width: '100%', height: '100%', position: 'absolute' }}
            start={{ x: 0, y: 1 }}
            end={{ x: 0, y: 0 }}
          >
            <E.TopOverWrapper>
              <E.IconBtns>
                <Text>버튼</Text>
                <Text>버튼</Text>
              </E.IconBtns>
              <E.Info>
                <E.InfoDetails>
                  <E.InfoDetailTitle>Im Your Pen</E.InfoDetailTitle>
                  <E.DetailRemark>재능 나눔 번역 자원봉사 모임</E.DetailRemark>
                </E.InfoDetails>
                <E.InfoPeriod>
                  <E.PeriodTxt>기간 12.03 - 12.28</E.PeriodTxt>
                </E.InfoPeriod>
              </E.Info>
            </E.TopOverWrapper>
          </LinearGradient>
        </E.Top>
        <E.Bottom>
          <ScrollView>
            <E.BottomSummaryWrapper>
              <E.SummaryContent>
                Im Your Pen은 한국의 후원자와 해외 후원 아동이 언어의 장벽을 넘어 아름답고 친밀한
                관계를 맺어나갈 수 있도록 징검다리 역할을 하는 재능 나눔 봉사에요!
              </E.SummaryContent>
              <E.Tags>
                <Text>태그</Text>
                <Text>태그</Text>
                <Text>태그</Text>
              </E.Tags>
              <E.Progress></E.Progress>
            </E.BottomSummaryWrapper>
            <E.BottomDetailsWrapper>
              <E.DetailTitle>번역 봉사단 계획</E.DetailTitle>
              <E.DetailContent>
                후원자, 아동 편지 번역 번역봉사단으로 선발되면 후원자와 아동이 주고 받는 편지를 각각
                한국어와 영어로 번역하는 봉사에 참여하게 되요! 후원자 및 아동 편지 한-영 번역
                후원자, 아동 편지 번역 번역봉사단으로 선발되면 후원자와 아동이 주고 받는 편지를 각각
                한국어와 영어로 번역하는 봉사에 참여하게 되요! 후원자 및 아동 편지 한-영 번역
              </E.DetailContent>
              <WhiteButton text={'더 보기'} borderRadius={8} height={'48px'} />
            </E.BottomDetailsWrapper>
            <E.BottomSupporters>
              <E.SupportersTxt>
                <E.SupportersNums>+008 </E.SupportersNums>명의 사람들이 함께 참여 중입니다.
              </E.SupportersTxt>
              <AvatarGroup />
            </E.BottomSupporters>
            <E.BottomRecommendWrapper></E.BottomRecommendWrapper>
          </ScrollView>
        </E.Bottom>
        <GreenButton text={'나도 참여하기'} height={'52px'} />
      </E.Wrapper>
    </>
  );
}
