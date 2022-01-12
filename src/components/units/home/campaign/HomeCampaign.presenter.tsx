import * as React from 'react';
import { Image, ScrollView } from 'react-native';
import * as E from './HomeCampaign.styles';
import { gql, useQuery } from '@apollo/client';
import ColoredTag from '../../../commons/tags/coloredtag';
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import ViewMoreButton from '../../../commons/buttons/viewmorebutton';

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

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      name
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

  const { data: dataForUser } = useQuery(FETCH_USER_LOGGED_IN);

  // const { data: dataForIPicked } = useQuery(FETCH_USEDITEMS_I_PICKED, {
  //   variables: {
  //     search: '캠페인',
  //   },
  // });

  return (
    <>
      <ScrollView>
        <E.Wrapper>
          <E.SelectionWrapper>
            <E.SelectionTitle>
              <E.SelectionTitleText>캠페인</E.SelectionTitleText>
              <ViewMoreButton onPressBtn={() => props.navigation.navigate('homelist')} />
            </E.SelectionTitle>
            <E.SelectionList>
              <ScrollView horizontal={true}>
                {data?.fetchUseditems
                  .map((el) => (
                    <E.Card key={el._id}>
                      <E.ImgWrapper
                        onPress={() =>
                          props.navigation.navigate('homeDetails', { useditemId: el._id })
                        }
                      >
                        {el.images && (
                          <Image
                            style={{ width: 277, height: 150, borderRadius: 8 }}
                            source={{
                              uri: `https://${el.images[0]}`,
                            }}
                          />
                        )}
                        <LinearGradient
                          colors={['rgba(0, 0, 0, 0.42)', 'rgba(255,255,255,0)']}
                          style={{
                            width: '100%',
                            height: '100%',
                            position: 'absolute',
                            borderRadius: 8,
                          }}
                          start={{ x: 0, y: 1 }}
                          end={{ x: 0, y: 0 }}
                        ></LinearGradient>
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
                <E.UserName>{dataForUser?.fetchUserLoggedIn.name || '김이웃'}</E.UserName>님과
                어울리는 캠페인이에요!
              </E.RecommendTitleText>
            </E.RecommendTitle>

            <E.RecommendList>
              {data?.fetchUseditems
                .map((el) => (
                  <E.RecommendCard key={el._id}>
                    <E.RImageWrpper
                      onPress={() =>
                        props.navigation.navigate('homeDetails', { useditemId: el._id })
                      }
                    >
                      <Image
                        style={{ width: 160, height: 160, borderRadius: 8 }}
                        source={{
                          uri: `https://${el.images[0]}`,
                        }}
                      />
                      <LinearGradient
                        colors={['rgba(0, 0, 0, 0.42)', 'rgba(255,255,255,0)']}
                        style={{
                          width: '100%',
                          height: '100%',
                          position: 'absolute',
                          borderRadius: 8,
                        }}
                        start={{ x: 0, y: 1 }}
                        end={{ x: 0, y: 0 }}
                      ></LinearGradient>
                      <E.CardTag>
                        <ColoredTag
                          key={el._id}
                          text={`#${el.tags[0]}`}
                          fontSize={'9px'}
                          padding={'2px 4px 2px 4px'}
                        />
                      </E.CardTag>
                    </E.RImageWrpper>
                    <E.RecommendCardDetails>
                      <E.RecommendCardTitle>{el.name.split('/')[1]}</E.RecommendCardTitle>
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
                ))
                .splice(0, 4)}
            </E.RecommendList>
          </E.RecommendWrapper>
        </E.Wrapper>
      </ScrollView>
    </>
  );
}
