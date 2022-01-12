import * as React from 'react';
import { ScrollView, Text } from 'react-native';
import * as E from './HomeDetails.styles';
import WhiteButton from '../../../commons/buttons/whitebutton/';
import AvatarGroup from '../../../commons/avatargroup/index';
import GreenButton from '../../../commons/buttons/greenbutton';
import LinearGradient from 'react-native-linear-gradient';
import WhiteTag from '../../../commons/tags/whitetag';
import ReadMore from 'react-native-read-more-text';

const HomeDetailsUI = (props) => {
  return (
    <>
      <E.Wrapper>
        <E.Top>
          <E.TopImgWrapper>
            <E.Img
              source={{
                uri: `https://${props.data?.fetchUseditem.images[0]}`,
              }}
            />
          </E.TopImgWrapper>
          <LinearGradient
            colors={['rgba(0, 0, 0, 0.42)', 'rgba(255,255,255,0)']}
            style={{ width: '100%', height: '100%', position: 'absolute' }}
            start={{ x: 0, y: 1 }}
            end={{ x: 0, y: 0 }}
          >
            <E.TopOverWrapper>
              <E.IconBtns>
                {/* <Text>버튼</Text>
                <Text>버튼</Text> */}
              </E.IconBtns>
              <E.Info>
                <E.InfoDetails>
                  <E.InfoDetailTitle>
                    {props.data?.fetchUseditem.name.split('/')[1]}
                  </E.InfoDetailTitle>
                  <E.DetailRemark>{props.data?.fetchUseditem.remarks.split('!')[0]}</E.DetailRemark>
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
              <E.SummaryContent>{props.data?.fetchUseditem.contents}</E.SummaryContent>
              <E.Tags>
                {props.data?.fetchUseditem.tags.map((el, index) => (
                  <WhiteTag key={index} text={el} fontSize={'12px'} />
                ))}
              </E.Tags>
              <E.Progress></E.Progress>
            </E.BottomSummaryWrapper>
            <E.BottomDetailsWrapper>
              <E.DetailTitle>번역 봉사단 계획</E.DetailTitle>
              <ReadMore
                numberOfLines={3}
                renderTruncatedFooter={_renderTruncatedFooter}
                renderRevealedFooter={_renderRevealedFooter}
              >
                <E.DetailContent>
                  후원자, 아동 편지 번역 번역봉사단으로 선발되면 후원자와 아동이 주고 받는 편지를
                  각각 한국어와 영어로 번역하는 봉사에 참여하게 되요! 후원자 및 아동 편지 한-영 번역
                  오프라인 모임 참석 번역봉사를 시작하기 전, 번역봉사자가 한 자리에 모이는
                  오리엔테이션에 참석해 주시면 번역봉사 활동이 가능해요. 온라인 커뮤니티 활동
                  비전메이커 번역봉사단 홈페이지의 번역 커뮤니티를 통해, 다른 봉사자님들과 편지 번역
                  및 봉사 활동에 대해 자유롭게 이야기를 나눌 수 있어요!
                </E.DetailContent>
              </ReadMore>
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
        {props.data?.fetchUseditem.name.split('/')[0] === '캠페인' ? (
          <E.SupportersTxt>여기는 캠페인 디테일 페이지</E.SupportersTxt>
        ) : (
          <E.SupportersTxt>여기는 정기후원 디테일 페이지</E.SupportersTxt>
        )}
      </E.Wrapper>
    </>
  );
};

const _renderTruncatedFooter = (handlePress) => {
  return (
    <>
      <LinearGradient
        colors={['#ffffff', 'rgba(0,0,0,0)']}
        style={{ width: '100%', height: '70%', position: 'absolute' }}
        start={{ x: 0, y: 1 }}
        end={{ x: 0, y: 0 }}
      />
      <WhiteButton onPressBtn={handlePress} text={'더 보기'} borderRadius={8} height={'48px'} />
    </>
  );
};

const _renderRevealedFooter = (handlePress) => {
  return (
    <Text style={{ textAlign: 'center' }} onPress={handlePress}>
      접기
    </Text>
  );
};

export default HomeDetailsUI;
