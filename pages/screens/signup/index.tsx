import React from 'react';
import Social from '../../../src/components/units/signup/social/social.container';
import Register from '../../../src/components/units/signup/register/register.container';
import Login from '../../../src/components/units/signup/login/login.container';
import Confirmation from '../../../src/components/units/signup/confirmation/confirmation.container';
import { createStackNavigator } from '@react-navigation/stack';
import Firebase from '../../../src/components/units/signup/firebase/firebase.container';

const Stack = createStackNavigator();

const LoginScreen = () => {
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen
          name="social"
          component={Social}
          options={() => ({
            headerShown: false,
          })}
        />
        <Stack.Screen
          name="firebaselogin"
          component={Firebase}
          options={() => ({
            headerTitle: '간단 이메일 회원가입',
            headerTitleStyle: { fontSize: 22, fontWeight: '700' },
          })}
        />
        <Stack.Screen
          name="register"
          component={Register}
          options={() => ({
            headerTitle: '등록페이지',
            headerTitleStyle: { fontSize: 22, fontWeight: '700' },
          })}
        />
        <Stack.Screen
          name="login"
          component={Login}
          options={() => ({
            headerTitle: '로그인페이지',
            headerTitleStyle: { fontSize: 22, fontWeight: '700' },
          })}
        />
        <Stack.Screen
          name="confirmation"
          component={Confirmation}
          options={() => ({
            headerShown: false,
          })}
        />
      </Stack.Navigator>
    </>
  );
};
export default LoginScreen;
