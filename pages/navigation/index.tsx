import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../screens/home';
import CommunityScreen from '../screens/community';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/signup/index';
import NewsScreen from '../screens/news/index';
import MypageScreen from '../screens/mypage';

const MainScreen = () => {
  return (
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
        component={HomeScreen}
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
        component={NewsScreen}
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
        name="mypage"
        component={MypageScreen}
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
  );
};

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="signup"
          component={LoginScreen}
          options={() => ({
            headerShown: false,
          })}
        ></Stack.Screen>
        <Stack.Screen
          name="mainScreen"
          component={MainScreen}
          options={() => ({
            headerShown: false,
          })}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
