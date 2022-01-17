import * as React from 'react';
import * as E from './HomeSearch.styles';
import { ScrollView, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import ColoredTag from '../../../commons/tags/coloredtag/index';
import { IPropsHomeSearchUI } from './HomeSearch.types';

export default function HomeSearchUI(props: IPropsHomeSearchUI) {
  return (
    <>
      <E.Wrapper>
        <E.SearchContainer>
          <E.SearchInput onChange={props.onChangeSearchBar} placeholder="검색" />
          <Icon name="search" size={20} color="rgba(143, 148, 156, 1)" />
        </E.SearchContainer>

        <ScrollView>
          {props.data?.fetchUseditems.length === 0 && props.keyword !== '' && (
            <>
              <E.NoneWrapper>
                <Icon name="alert-circle-outline" size={20} color="rgba(143, 148, 156, 1)" />
                <E.FirstLine>
                  <E.KeywordColor>{props.keyword}</E.KeywordColor>
                  <E.NoSearchInfo>의 검색결과가 없어요.</E.NoSearchInfo>
                </E.FirstLine>
                <E.NoSearchInfo>검색어를 다시 확인해 주세요!</E.NoSearchInfo>
              </E.NoneWrapper>
            </>
          )}
          {props.data?.fetchUseditems.map((el) => (
            <E.ChildrenList key={el._id}>
              <E.ChildImgWrapper
                onPress={() => props.navigation.navigate('homeDetails', { useditemId: el._id })}
              >
                <Image
                  style={{ width: 86, height: 86, borderRadius: 8 }}
                  source={{
                    uri: `https://${el.images[0]}`,
                  }}
                />
              </E.ChildImgWrapper>
              <E.ChildDetails>
                <E.ChildAbout
                  onPress={() => props.navigation.navigate('homeDetails', { useditemId: el._id })}
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
                </E.ChildBookmark>
              </E.ChildDetails>
            </E.ChildrenList>
          ))}
        </ScrollView>
      </E.Wrapper>
    </>
  );
}
