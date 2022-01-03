import * as React from 'react';
import { Image, ScrollView } from 'react-native';
import * as E from './HomeCampaign.styles';

export default function HomeCampaignUI() {
  const SelectionListItems = [
    { title: "I'm Your Pen", remark: '재능 나눔 번역 자원봉사 모임' },
    { title: '더욱 특별한 기념일', remark: '특별한 기념일을 위한 특별한 기부!' },
    { title: '벽화 그리기', remark: '회색빛 마을에 생기를 불어넣어 주세요!asdfasdfadadfasd' },
  ];

  const recommendListItems = [
    { name: '우리 산 살리기' },
    { name: '쓰담 달리기' },
    { name: '따뜻한 한 끼를 건네요' },
    { name: '치료가 필요해요' },
  ];

  return (
    <>
      <ScrollView>
        <E.Wrapper>
          <E.SelectionWrapper>
            <E.SelectionTitle>
              <E.SelectionTitleText>캠페인</E.SelectionTitleText>
            </E.SelectionTitle>
            <E.SelectionList>
              <ScrollView horizontal={true}>
                {SelectionListItems.map((el, index) => (
                  <E.Card key={index}>
                    <E.ImgWrapper>
                      <Image source={require('../../../../../public/images/home/card01.png')} />
                      <E.CardTag></E.CardTag>
                    </E.ImgWrapper>
                    <E.CardDetails>
                      <E.DetailsContent>
                        <E.ContentTitle>{el.title}</E.ContentTitle>
                        <E.ContentRemark numberOfLines={1} ellipsizeMode="tail">
                          {el.remark}
                        </E.ContentRemark>
                      </E.DetailsContent>
                      <E.DetailsBookmark></E.DetailsBookmark>
                    </E.CardDetails>
                  </E.Card>
                ))}
              </ScrollView>
            </E.SelectionList>
          </E.SelectionWrapper>

          <E.RecommendWrapper>
            <E.RecommendTitle>
              <E.RecommendTitleText>
                <E.UserName>김이웃</E.UserName>님과 어울리는 캠페인이에요!
              </E.RecommendTitleText>
            </E.RecommendTitle>

            <E.RecommendList>
              {/* <FlatList
              data={recommendListItems}
              renderItem={(items) => ( */}
              {recommendListItems.map((el, index) => (
                <E.RecommendCard key={index}>
                  <E.RImageWrpper>
                    <Image
                      source={require('../../../../../public/images/home/recommend_card01.png')}
                    />
                  </E.RImageWrpper>
                  <E.RecommendCardDetails>
                    <E.RecommendCardTitle>{el.name}</E.RecommendCardTitle>
                    <E.RecommendBookmark></E.RecommendBookmark>
                  </E.RecommendCardDetails>
                </E.RecommendCard>
              ))}

              {/* )}
            /> */}
            </E.RecommendList>
          </E.RecommendWrapper>
        </E.Wrapper>
      </ScrollView>
    </>
  );
}
