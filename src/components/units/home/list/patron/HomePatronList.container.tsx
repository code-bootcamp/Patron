import * as React from 'react';
import styled from '@emotion/native';
import { Image } from 'react-native';
import { gql, useQuery } from '@apollo/client';
import ColoredTag from '../../../../commons/tags/coloredtag';
import Icon from 'react-native-vector-icons/Ionicons';
import { ScrollView } from 'react-native-gesture-handler';

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

export const ChildrenList = styled.View`
  flex-direction: row;
  width: 100%;
  padding: 25px 0px 25px 20px;
  border-bottom-width: 1px;
  border-color: #f0f0f0;
  justify-content: space-between;
  background-color: white;
`;

export const ChildImgWrapper = styled.View`
  justify-content: center;
  align-items: center;
`;

export const ChildDetails = styled.View`
  /* background-color: lightcoral; */
  flex-direction: row;
  padding: 0px 0px 0px 15px;
  /* justify-content: space-between; */
  align-items: stretch;
`;

export const ChildAbout = styled.View`
  width: 80%;
  /* background-color: lightyellow; */
  justify-content: space-between;
`;

export const ChildName = styled.Text`
  color: #000;
  font-weight: 700;
  padding-bottom: 5px;
`;

export const ChildBio = styled.Text`
  color: #000;
`;

export const ChildrenTags = styled.View`
  flex-direction: row;
  /* background-color: lightskyblue; */
`;

export const ChildBookmark = styled.View`
  /* background-color: lightpink; */
`;

export default function HomePatronList() {
  const { data } = useQuery(FETCH_USEDITEMS, {
    variables: {
      search: '정기후원',
    },
  });
  return (
    <>
      <ScrollView>
        {data?.fetchUseditems.map((el) => (
          <ChildrenList key={el._id}>
            <ChildImgWrapper>
              <Image
                style={{ width: 86, height: 86, borderRadius: 8 }}
                source={{
                  uri: `https://${el.images[0]}`,
                }}
              />
            </ChildImgWrapper>
            <ChildDetails>
              <ChildAbout>
                <ChildName>{el.name.split('/')[1]}</ChildName>
                <ChildBio>{el.remarks}</ChildBio>
                <ChildrenTags key={el._id}>
                  {el.tags?.map((el, index) => (
                    <ColoredTag
                      key={index}
                      text={`#${el}`}
                      fontSize={'9px'}
                      padding={'2px 4px 2px 4px'}
                    />
                  ))}
                </ChildrenTags>
              </ChildAbout>
              <ChildBookmark>
                <Icon name="bookmark-outline" size={20} color={'rgba(0, 0, 0, 0.4)'} />
              </ChildBookmark>
            </ChildDetails>
          </ChildrenList>
        ))}
      </ScrollView>
    </>
  );
}
