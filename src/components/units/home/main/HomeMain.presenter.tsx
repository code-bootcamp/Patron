import * as React from 'react';
import SearchInput from '../../../commons/inputs/search';
import * as E from './HomeMain.styles';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import HomeCampaign from '../campaign/HomeCampaign.container';
import HomeChildren from '../children/HomeChildren.container';
import HomePatron from '../patron/HomePatron.container';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createMaterialTopTabNavigator();
export default function HomeMainUI() {
  return (
    <>
      <E.SearchWrapper>
        <E.Logo source={require('../../../../../public/images/logo_green.jpg')} />
        <SearchInput width={'80%'} />
      </E.SearchWrapper>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            tabBarLabelStyle: { fontSize: 12 },
            tabBarActiveTintColor: '#448800',
            tabBarInactiveTintColor: 'rgba(0, 0, 0, 0.4)',
            tabBarIndicatorStyle: { backgroundColor: '#448800' },
            tabBarStyle: {},
          }}
        >
          <Tab.Screen name="캠페인" component={HomeCampaign} />
          <Tab.Screen name="결연 아동" component={HomeChildren} />
          <Tab.Screen name="정기 후원" component={HomePatron} />
        </Tab.Navigator>
      </NavigationContainer>
      <E.Wrapper>
        <E.ContentsWrapper></E.ContentsWrapper>
        <E.RecommandWrapper></E.RecommandWrapper>
      </E.Wrapper>
    </>
  );
}
