import * as React from 'react';
import * as E from './HomeListBottom.styles';
import { Image, ScrollView } from 'react-native';
import ClearProgressBar from '../../../../commons/progressbar/clearprogressbar';
import ColoredTag from '../../../../commons/tags/coloredtag';
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';

export default function HomeListBottomUI(props) {
  return (
    <>
      <E.RecommendWrapper>
        <E.RecommendTitle>
          {props.category === '캠페인' && (
            <E.RecommendTitleText>비슷한 캠페인이에요!</E.RecommendTitleText>
          )}
          {props.category === '결연아동' && (
            <E.RecommendTitleText>가치 여행을 기다리고 있어요!</E.RecommendTitleText>
          )}
          {props.category === '정기후원' && (
            <E.RecommendTitleText>후원을 기다리고 있어요!</E.RecommendTitleText>
          )}
        </E.RecommendTitle>
        <ScrollView horizontal={true}>
          <E.RecommendList>
            {props.data?.fetchUseditems
              .map((el) => (
                <E.RecommendCard key={el._id}>
                  <E.RImageWrpper
                    onPress={() => props.navigation.navigate('homeDetails', { useditemId: el._id })}
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
                      <ClearProgressBar createdAt={el.createdAt} height={'2px'} id={el._id} />
                    </E.CardTag>
                  </E.RImageWrpper>
                  <E.RecommendCardDetails>
                    <E.RecommendCardTitle>{el.name.split('/')[1]}</E.RecommendCardTitle>
                    <E.RecommendBookmark>
                      {!props.dataForPicked?.fetchUseditemsIPicked
                        .map((pick) => pick._id)
                        .includes(el._id) ? (
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
                    </E.RecommendBookmark>
                  </E.RecommendCardDetails>
                </E.RecommendCard>
              ))
              .splice(0, 4)}
          </E.RecommendList>
        </ScrollView>
      </E.RecommendWrapper>
    </>
  );
}
