import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

function TabOne() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>탭1</Text>
    </View>
  );
}

function TabTwo() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>탭2</Text>
    </View>
  );
}

function TabThree() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>탭3</Text>
    </View>
  );
}

const Tab = createMaterialTopTabNavigator();

export default function Tab03() {
  return (
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
        <Tab.Screen name="탭1" component={TabOne} />
        <Tab.Screen name="탭2" component={TabTwo} />
        <Tab.Screen name="탭3" component={TabThree} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
