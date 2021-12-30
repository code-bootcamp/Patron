import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import 'react-native-gesture-handler';
import { View, Text } from 'react-native';

const DefaultScreen = () => {
  return (
    <>
      <View>
        <Text>hello world</Text>
      </View>
    </>
  );
};

const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: '#448800',
          tabBarStyle: {
            height: 64,
            paddingTop: 10,
            paddingBottom: 10,
            paddingLeft: 30,
            paddingRight: 30,
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={DefaultScreen}
          options={{
            tabBarLabel: '홈',
          }}
        ></Tab.Screen>
        <Tab.Screen
          name="Community"
          component={DefaultScreen}
          options={{
            tabBarLabel: '커뮤니티',
          }}
        ></Tab.Screen>
        <Tab.Screen
          name="News"
          component={DefaultScreen}
          options={{
            tabBarLabel: '소식',
          }}
        ></Tab.Screen>
        <Tab.Screen
          name="Mypage"
          component={DefaultScreen}
          options={{
            tabBarLabel: '내정보',
          }}
        ></Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
