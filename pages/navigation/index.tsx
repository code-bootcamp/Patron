import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import 'react-native-gesture-handler';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import CommunityScreen from '../screens/community';

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
        screenOptions={() => ({
          headerShown: false,
          tabBarActiveTintColor: '#448800',
          tabBarStyle: {
            height: 64,
            paddingTop: 10,
            paddingBottom: 10,
            paddingLeft: 30,
            paddingRight: 30,
          },
        })}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Icon name="home" size={20} color="#448800" />
              ) : (
                <Icon name="home-outline" size={20} />
              ),
            tabBarLabel: '홈',
          }}
        ></Tab.Screen>
        <Tab.Screen
          name="community"
          component={CommunityScreen}
          options={() => ({
            tabBarLabel: '커뮤니티',
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Icon name="chatbubble-ellipses" size={20} color="#448800" />
              ) : (
                <Icon name="chatbubble-ellipses-outline" size={20} />
              ),
          })}

        ></Tab.Screen>
        <Tab.Screen
          name="News"
          component={DefaultScreen}
          options={{
            tabBarLabel: '소식',
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Icon name="mail" size={20} color="#448800" />
              ) : (
                <Icon name="mail-outline" size={20} />
              ),
          }}
        ></Tab.Screen>
        <Tab.Screen
          name="Mypage"
          component={DefaultScreen}
          options={{
            tabBarLabel: '내정보',
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Icon name="person" size={20} color="#448800" />
              ) : (
                <Icon name="person-outline" size={20} />
              ),
          }}
        ></Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
