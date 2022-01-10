import * as React from 'react';
import { Image, ScrollView } from 'react-native';
import * as E from './HomeChildren.styles';
import Icon from 'react-native-vector-icons/Ionicons';
import ColoredTag from '../../../commons/tags/coloredtag/index';

export default function HomeChildrenUI() {
  const SelectionListItems = [
    { name: '하론 온원가 9', remark: '전 축구를 좋아해요!', from: '케냐' },
    { name: '리투 로이 7', remark: '엄마가 보고싶어요', from: '요르단' },
    { name: '아스마 악터 9', remark: '저는 그림 그리는 걸 좋아해요', from: '방글라데시' },
  ];

  const recommendListItems = [
    {
      name: '존 테일러 클레어 9',
      bio: '저는 필리핀에 살고 있어요.',
      tags: ['필리핀', '생활지원', '여아'],
    },
    {
      name: '로이스 난타워 8',
      bio: '저는 목요일을 좋아해요, 목요일은 학교를 가는 날이라...',
      tags: ['남아프리카공화국', '교육지원', '여아'],
    },
    {
      name: '사미르 호시모브 10',
      bio: '저는 꿈이 의사에요! 많이 배워서 아픈 할머니를 치료하고 싶어요.',
      tags: ['타지키스탄', '교육지원', '남아'],
    },
  ];

  return (
    <>
      <ScrollView>
        <E.Wrapper>
          <E.SelectionWrapper>
            <E.SelectionTitle>
              <E.SelectionTitleText>결연 아동</E.SelectionTitleText>
            </E.SelectionTitle>
            <ScrollView horizontal={true}>
              <E.SelectionList>
                {SelectionListItems.map((el, index) => (
                  <E.Card key={index}>
                    <E.ImgWrapper>
                      <Image
                        source={require('../../../../../public/images/home/child_card01.png')}
                      />
                      <E.CardTag>
                        <ColoredTag
                          text={`#${el.from}`}
                          fontSize={'9px'}
                          padding={'2px 4px 2px 4px'}
                        />
                      </E.CardTag>
                    </E.ImgWrapper>
                    <E.CardDetails>
                      <E.DetailsContent>
                        <E.ContentTitle>{el.name}</E.ContentTitle>
                        <E.ContentRemark numberOfLines={1} ellipsizeMode="tail">
                          {el.remark}
                        </E.ContentRemark>
                      </E.DetailsContent>
                      <E.DetailsBookmark>
                        <Icon name="bookmark-outline" size={20} color={'rgba(0, 0, 0, 0.4)'} />
                      </E.DetailsBookmark>
                    </E.CardDetails>
                  </E.Card>
                ))}
              </E.SelectionList>
            </ScrollView>
          </E.SelectionWrapper>
          <E.RecommendWrapper>
            <E.RecommendTitle>
              <E.RecommendTitleText>
                <E.UserName>김이웃</E.UserName>님의 가치 여행을 기다려요!
              </E.RecommendTitleText>
            </E.RecommendTitle>
            {recommendListItems.map((el, index) => (
              <E.ChildrenList key={index}>
                <E.ChildImgWrapper>
                  <Image source={require('../../../../../public/images/home/child_list01.png')} />
                </E.ChildImgWrapper>
                <E.ChildDetails>
                  <E.ChildAbout>
                    <E.ChildName>{el.name}</E.ChildName>
                    <E.ChildBio>{el.bio}</E.ChildBio>
                    <E.ChildrenTags key={index}>
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
                    <Icon name="bookmark-outline" size={20} color={'rgba(0, 0, 0, 0.4)'} />
                  </E.ChildBookmark>
                </E.ChildDetails>
              </E.ChildrenList>
            ))}
          </E.RecommendWrapper>
        </E.Wrapper>
      </ScrollView>
    </>
  );
}
