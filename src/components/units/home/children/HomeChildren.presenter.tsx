import * as React from 'react';
import { Image, ScrollView } from 'react-native';
import * as E from './HomeChildren.styles';
import Icon from 'react-native-vector-icons/Ionicons';
import ColoredTag from '../../../commons/tags/coloredtag/index';
import ViewMoreButton from '../../../commons/buttons/viewmorebutton';
import { IPropsHomeChildrenUI } from './HomeChildren.types';

export default function HomeChildrenUI(props: IPropsHomeChildrenUI) {
  return (
    <>
      <ScrollView>
        <E.Wrapper>
          <E.SelectionWrapper>
            <E.SelectionTitle>
              <E.SelectionTitleText>결연 아동</E.SelectionTitleText>
              <ViewMoreButton onPressBtn={() => props.navigation.navigate('childrenList')} />
            </E.SelectionTitle>
            <ScrollView horizontal={true}>
              <E.SelectionList>
                {props.data?.fetchUseditems
                  .map((el) => (
                    <E.Card key={el._id}>
                      <E.ImgWrapper
                        onPress={() =>
                          props.navigation.navigate('homeDetails', { useditemId: el._id })
                        }
                      >
                        <Image
                          style={{ width: 150, height: 200, borderRadius: 8 }}
                          source={{
                            uri: `https://${el.images[0]}`,
                          }}
                        />
                        <E.CardTag>
                          <ColoredTag
                            text={`#${el.tags[el.tags.length - 1]}`}
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
                          {!props.dataForPicked?.fetchUseditemsIPicked
                            .map((pick) => pick._id)
                            .includes(el._id) ? (
                            <Icon
                              name="bookmark-outline"
                              size={20}
                              color={'rgba(0, 0, 0, 0.4)'}
                              onPress={props.onPressPickChild(el)}
                            />
                          ) : (
                            <Icon
                              name="bookmark"
                              size={20}
                              color={'#448800'}
                              onPress={props.onPressPickChild(el)}
                            />
                          )}
                        </E.DetailsBookmark>
                      </E.CardDetails>
                    </E.Card>
                  ))
                  .reverse()
                  .slice(0, 3)}
              </E.SelectionList>
            </ScrollView>
          </E.SelectionWrapper>
          <E.RecommendWrapper>
            <E.RecommendTitle>
              <E.RecommendTitleText>
                <E.UserName>{props.dataForUser?.fetchUserLoggedIn.name || '김이웃'}</E.UserName>님의
                가치 여행을 기다려요!
              </E.RecommendTitleText>
            </E.RecommendTitle>
            {props.data?.fetchUseditems
              .map((el) => (
                <E.ChildrenList key={el._id}>
                  <E.ChildImgWrapper
                    onPress={() => props.navigation.navigate('homeDetails', { useditemId: el._id })}
                  >
                    <Image
                      style={{ width: 86, height: 86, borderRadius: 50 }}
                      source={{
                        uri: `https://${el.images[0]}`,
                      }}
                    />
                  </E.ChildImgWrapper>
                  <E.ChildDetails>
                    <E.ChildAbout
                      onPress={() =>
                        props.navigation.navigate('homeDetails', { useditemId: el._id })
                      }
                    >
                      <E.ChildName>{el.name.split('/')[1]}</E.ChildName>
                      <E.ChildBio>{el.remarks}</E.ChildBio>
                      <E.ChildrenTags key={el._id}>
                        {el.tags?.map((el, index) => (
                          <ColoredTag
                            key={index}
                            text={`#${el}`}
                            fontSize={'9px'}
                            padding={'2px 4px 2px 4px'}
                          />
                        ))}
                      </E.ChildrenTags>
                    </E.ChildAbout>
                    <E.ChildBookmark>
                      {!props.dataForPicked?.fetchUseditemsIPicked
                        .map((pick) => pick._id)
                        .includes(el._id) ? (
                        <Icon
                          name="bookmark-outline"
                          size={20}
                          color={'rgba(0, 0, 0, 0.4)'}
                          onPress={props.onPressPickChild(el)}
                        />
                      ) : (
                        <Icon
                          name="bookmark"
                          size={20}
                          color={'#448800'}
                          onPress={props.onPressPickChild(el)}
                        />
                      )}
                    </E.ChildBookmark>
                  </E.ChildDetails>
                </E.ChildrenList>
              ))
              .slice(0, 4)}
          </E.RecommendWrapper>
        </E.Wrapper>
      </ScrollView>
    </>
  );
}
