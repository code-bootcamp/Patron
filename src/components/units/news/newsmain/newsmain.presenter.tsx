import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Campaign from '../campagin/campagin.container';
import Children from '../children/children.container';
import Patron from '../patron/patron.container';
import * as M from './newsmain.styles';
import * as React from 'react';

const Tab = createMaterialTopTabNavigator();
const NewsmainUI = () => {
  return (
    <M.WholeWrapper>
      <M.Wrapper>
        <M.Header>소식</M.Header>
      </M.Wrapper>
      <Tab.Navigator
        screenOptions={{
          tabBarLabelStyle: { fontSize: 12 },
          tabBarActiveTintColor: '#448800',
          tabBarInactiveTintColor: 'rgba(0, 0, 0, 0.4)',
          tabBarIndicatorStyle: { backgroundColor: '#448800' },
          tabBarStyle: {},
        }}
      >
        <Tab.Screen name="캠페인" component={Campaign} />
        <Tab.Screen name="결연 아동" component={Children} />
        <Tab.Screen name="정기 후원" component={Patron} />
      </Tab.Navigator>
    </M.WholeWrapper>
  );
};
export default NewsmainUI;
