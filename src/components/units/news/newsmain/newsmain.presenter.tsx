import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import NewsCampaign from '../campaign/campaign.container';
import NewsChildren from '../children/children.container';
import NewsPatron from '../patron/patron.container';

const Tab = createMaterialTopTabNavigator();

const NewsMainUI = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: { fontSize: 12 },
        tabBarItemStyle: { width: 140 },
        tabBarActiveTintColor: '#448800',
        tabBarInactiveTintColor: 'rgba(0, 0, 0, 0.4)',
        tabBarIndicatorStyle: { backgroundColor: '#448800' },
      }}
    >
      <Tab.Screen name="캠페인" component={NewsCampaign} />
      <Tab.Screen name="결연 아동" component={NewsChildren} />
      <Tab.Screen name="정기 후원" component={NewsPatron} />
    </Tab.Navigator>
  );
};
export default NewsMainUI;
