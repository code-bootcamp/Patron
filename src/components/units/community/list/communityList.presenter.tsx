/* eslint-disable react/no-children-prop */
import React from 'react';
import * as R from 'react-native';
import * as S from './communityList.styles';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import 'react-native-gesture-handler';
import ColoredTag from '../../../commons/tags/coloredtag';
import Icon from 'react-native-vector-icons/Ionicons';
import GreenButton from '../../../commons/buttons/greenbutton';
import {
  IPropsCommunityListUI,
  IPropsLatestScreen,
  IPropsPopularScreen,
} from './communityList.types';
import { useQuery } from '@apollo/client';
import { Query, QueryFetchBoardsArgs } from '../../../../commons/types/generated/types';
import { FETCH_BOARDS } from './communityList.queries';
import { useNavigation } from '@react-navigation/core';

const Tab = createMaterialTopTabNavigator();

function PopularScreen(props: IPropsPopularScreen) {
  const { data } = useQuery<Pick<Query, 'fetchBoards'>, QueryFetchBoardsArgs>(FETCH_BOARDS, {
    variables: { search: props.data?.fetchUseditem.name.split('/')[1] },
  });
  const navigation = useNavigation();

  const getDetail = (id: string) => () => {
    navigation.navigate('community', { screen: 'detail', params: { boardId: id } });
  };

  return (
    <>
      <R.ScrollView style={{ width: '100%' }}>
        <R.View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
          {data?.fetchBoards.map((el: any, idx: number) => (
            <S.BodyContent key={idx} onPress={getDetail(el._id)}>
              <R.Image style={{ width: '100%', height: '100%' }} source={{ uri: el.images[0] }} />
            </S.BodyContent>
          ))}
        </R.View>
      </R.ScrollView>
    </>
  );
}

function LatestScreen(props: IPropsLatestScreen) {
  const { data } = useQuery<Pick<Query, 'fetchBoards'>, QueryFetchBoardsArgs>(FETCH_BOARDS, {
    variables: { search: props.data?.fetchUseditem.name.split('/')[1] },
  });
  const navigation = useNavigation();

  const getDetail = (id: string) => () => {
    navigation.navigate('community', { screen: 'detail', params: { boardId: id } });
  };

  return (
    <>
      <R.ScrollView style={{ width: '100%' }}>
        <R.View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
          {data?.fetchBoards.map((el: any, idx: number) => (
            <S.BodyContent key={idx} onPress={getDetail(el._id)}>
              <R.Image style={{ width: '100%', height: '100%' }} source={{ uri: el.images[0] }} />
            </S.BodyContent>
          ))}
        </R.View>
      </R.ScrollView>
    </>
  );
}

const CommunityListUI = (props: IPropsCommunityListUI) => {
  return (
    <>
      <S.Wrap>
        <S.ListHeader
          source={{
            uri: `https://${props.data?.fetchUseditem.images?.[0]}`,
          }}
        >
          <ColoredTag
            text={props.data?.fetchUseditem.name.split('/')[0]}
            fontSize="10px"
            padding="4px 8px"
          />
          <S.HeaderInner>
            <S.HeaderTitle>{props.data?.fetchUseditem.name.split('/')[1]}</S.HeaderTitle>
            {/* <GetDday id={props.data?.fetchUseditem._id} /> */}
          </S.HeaderInner>
        </S.ListHeader>
        <S.ListBody>
          <Tab.Navigator
            screenOptions={{
              tabBarLabelStyle: { fontSize: 12 },
              tabBarItemStyle: { width: 200 },
              tabBarActiveTintColor: '#448800',
              tabBarInactiveTintColor: 'rgba(0, 0, 0, 0.4)',
              tabBarIndicatorStyle: { backgroundColor: '#448800' },
            }}
          >
            <Tab.Screen name="인기" children={() => <PopularScreen data={props.data} />} />
            <Tab.Screen name="최근" children={() => <LatestScreen data={props.data} />} />
          </Tab.Navigator>
        </S.ListBody>
        <S.ListFooter>
          <Icon name="heart-outline" size={20} />
          <S.FooterInner>
            <R.Text>
              <R.Text style={{ color: 'black' }}>{props.firedata?.suppoters}</R.Text>명 참여중
            </R.Text>
            <GreenButton
              text="나도 참여하기"
              width="50%"
              height={38}
              fontSize="16px"
              borderRadius={8}
              onPressBtn={props.getListDetail}
            />
          </S.FooterInner>
        </S.ListFooter>
      </S.Wrap>
    </>
  );
};

export default CommunityListUI;
