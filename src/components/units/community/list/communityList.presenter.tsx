import React from 'react';
import * as R from 'react-native';
import * as S from './communityList.styles';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import 'react-native-gesture-handler';
import ColoredTag from '../../../commons/tags/coloredtag';

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

const CommunityListUI = () => {
  return (
    <>
      <S.Wrap>
        <S.ListHeader>
          <ColoredTag text="정기후원" />
          <S.HeaderInner>
            <S.HeaderTitle>오늘, 당신의 천원은 어떻게 쓰였나요?</S.HeaderTitle>
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
        <S.ListFooter></S.ListFooter>
      </S.Wrap>
    </>
  );
};

export default CommunityListUI;
