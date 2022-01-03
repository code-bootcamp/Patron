import * as React from 'react';
import { Image, ScrollView } from 'react-native';
import * as E from './HomePatron.styles';

export default function HomePatronUI() {
  const SelectionListItems = [
    { title: '반짝이는 소녀에게, 소녀별', remark: '국내 여아 후원하기' },
    { title: '생명을 지키는 깨끗한 변화', remark: '식수위생 지원 사업' },
    { title: '미래를 꿈꾸는 힘', remark: '배움은 미래를 꿈꾸는 유일한 힘이에요!' },
  ];
  const recommendListItems = [
    { name: '미래를 꿈꾸는 힘' },
    { name: '따스한 울타리' },
    { name: '건강한 삶' },
    { name: '재난 구호 지원' },
  ];

  return (
    <>
      <ScrollView>
        <E.Wrapper>
          <E.SelectionWrapper>
            <E.SelectionTitle>
              <E.SelectionTitleText>정기 후원</E.SelectionTitleText>
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
                        <E.ContentRemark>{el.remark}</E.ContentRemark>
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
                <E.UserName>김이웃</E.UserName>님과 어울리는 정기후원이에요!
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
