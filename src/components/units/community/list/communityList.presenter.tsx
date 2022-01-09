import React from 'react';
import * as R from 'react-native';
import * as S from './communityList.styles';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import 'react-native-gesture-handler';
import ColoredTag from '../../../commons/tags/coloredtag';
import Icon from 'react-native-vector-icons/Ionicons';
import GreenButton from '../../../commons/buttons/greenbutton';
import { IPropsCommunityListUI } from './communityList.types';

const Tab = createMaterialTopTabNavigator();

function HomeScreen() {
  return (
    <>
      <R.ScrollView style={{ width: '100%' }}>
        <R.View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
          {new Array(12).fill(1).map((_, idx) => (
            <S.BodyContent key={idx}></S.BodyContent>
          ))}
        </R.View>
      </R.ScrollView>
    </>
  );
}

function SettingsScreen() {
  return (
    <>
      <R.ScrollView style={{ width: '100%' }}>
        <R.View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
          {new Array(12).fill(1).map((_, idx) => (
            <S.BodyContent key={idx}></S.BodyContent>
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
            uri: `https://storage.googleapis.com/${props.data?.fetchUseditem.images?.[0]}`,
          }}
        >
          <ColoredTag
            text={props.data?.fetchUseditem.name.split('/')[0]}
            fontSize="10px"
            padding="4px 8px"
          />
          <S.HeaderInner>
            <S.HeaderTitle>{props.data?.fetchUseditem.name.split('/')[1]}</S.HeaderTitle>
            <S.HeaderDday>D-3</S.HeaderDday>
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
            <Tab.Screen name="인기" component={HomeScreen} />
            <Tab.Screen name="최근" component={SettingsScreen} />
          </Tab.Navigator>
        </S.ListBody>
        <S.ListFooter>
          <Icon name="heart-outline" size={20} />
          <S.FooterInner>
            <R.Text>
              <R.Text style={{ color: 'black' }}>+999</R.Text>명 참여중
            </R.Text>
            <GreenButton
              text="나도 참여하기"
              width="50%"
              height={38}
              fontSize="16px"
              borderRadius={8}
            />
          </S.FooterInner>
        </S.ListFooter>
      </S.Wrap>
    </>
  );
};

export default CommunityListUI;
