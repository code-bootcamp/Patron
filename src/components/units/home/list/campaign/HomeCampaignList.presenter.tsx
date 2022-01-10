import * as React from 'react';
import * as E from './HomeCampaignList.styles';
import { Image } from 'react-native';
import ColoredTag from '../../../../commons/tags/coloredtag';
import Icon from 'react-native-vector-icons/Ionicons';
import { ScrollView } from 'react-native-gesture-handler';

export default function HomeCampaignListUI(props) {
  return (
    <>
      <ScrollView>
        {props.data?.fetchUseditems.map((el) => (
          <E.ChildrenList key={el._id}>
            <E.ChildImgWrapper>
              <Image
                style={{ width: 86, height: 86, borderRadius: 8 }}
                source={{
                  uri: `https://${el.images[0]}`,
                }}
              />
            </E.ChildImgWrapper>
            <E.ChildDetails>
              <E.ChildAbout>
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
                <Icon name="bookmark-outline" size={20} color={'rgba(0, 0, 0, 0.4)'} />
              </E.ChildBookmark>
            </E.ChildDetails>
          </E.ChildrenList>
        ))}
      </ScrollView>
    </>
  );
}
