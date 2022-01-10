import * as React from 'react';
import { Image, ScrollView } from 'react-native';
import * as E from './HomeCampaign.styles';
import { gql, useQuery } from '@apollo/client';
import ColoredTag from '../../../commons/tags/coloredtag';
import Icon from 'react-native-vector-icons/Ionicons';

const FETCH_USEDITEMS = gql`
  query fetchUseditems($isSoldout: Boolean, $search: String, $page: Int) {
    fetchUseditems(isSoldout: $isSoldout, search: $search, page: $page) {
      _id
      name
      remarks
      contents
      tags
      pickedCount
      images
    }
  }
`;

// const FETCH_USEDITEMS_I_PICKED = gql`
//   query fetchUseditemsIPicked($search: String) {
//     fetchUseditemsIPicked(search: $search) {
//       _id
//       name
//       pickedCount
//     }
//   }
// `;

export default function HomeCampaignUI(props) {
  const { data } = useQuery(FETCH_USEDITEMS, {
    variables: {
      search: '캠페인',
    },
  });

  // const { data: dataForIPicked } = useQuery(FETCH_USEDITEMS_I_PICKED, {
  //   variables: {
  //     search: '캠페인',
  //   },
  // });

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
                {data?.fetchUseditems
                  .map((el) => (
                    <E.Card key={el._id}>
                      <E.ImgWrapper>
                        {el.images ? (
                          <Image
                            style={{ width: 277, height: 150 }}
                            source={{
                              uri: `https://${el.images[0]}`,
                            }}
                          />
                        ) : (
                          <Image source={require('../../../../../public/images/home/card01.png')} />
                        )}
                        {/* <Image source={require('../../../../../public/images/home/card01.png')} /> */}
                        <E.CardTag>
                          <ColoredTag
                            key={el._id}
                            text={`#${el.tags[0]}`}
                            fontSize={'9px'}
                            padding={'2px 4px 2px 4px'}
                          />
                        </E.CardTag>
                      </E.ImgWrapper>
                      <E.CardDetails>
                        <E.DetailsContent>
                          <E.ContentTitle>{el.name.split('/')[1]}</E.ContentTitle>
                          <E.ContentRemark numberOfLines={1} ellipsizeMode="tail">
                            {el.remarks}
                          </E.ContentRemark>
                        </E.DetailsContent>
                        <E.DetailsBookmark>
                          {!props.isPicked ? (
                            <Icon
                              name="bookmark-outline"
                              size={20}
                              color={'rgba(0, 0, 0, 0.4)'}
                              onPress={props.onPressPick(el)}
                            />
                          ) : (
                            <Icon
                              name="bookmark"
                              size={20}
                              color={'#448800'}
                              onPress={props.onPressPick(el)}
                            />
                          )}
                        </E.DetailsBookmark>
                      </E.CardDetails>
                    </E.Card>
                  ))
                  .splice(0, 3)}
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
              {recommendListItems.map((el, index) => (
                <E.RecommendCard key={index}>
                  <E.RImageWrpper>
                    <Image
                      source={require('../../../../../public/images/home/recommend_card01.png')}
                    />
                  </E.RImageWrpper>
                  <E.RecommendCardDetails>
                    <E.RecommendCardTitle>{el.name}</E.RecommendCardTitle>
                    <E.RecommendBookmark>
                      {!props.isPicked ? (
                        <Icon
                          name="bookmark-outline"
                          size={20}
                          color={'rgba(0, 0, 0, 0.4)'}
                          // onPress={props.onPressPick}
                        />
                      ) : (
                        <Icon
                          name="bookmark"
                          size={20}
                          color={'#448800'}
                          // onPress={props.onPressPick}
                        />
                      )}
                    </E.RecommendBookmark>
                  </E.RecommendCardDetails>
                </E.RecommendCard>
              ))}
            </E.RecommendList>
          </E.RecommendWrapper>
        </E.Wrapper>
      </ScrollView>
    </>
  );
}
