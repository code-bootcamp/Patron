import React from 'react';
import Social from '../../../src/components/units/signup/social/social.container';
import Register from '../../../src/components/units/signup/register/register.container';
import Login from '../../../src/components/units/signup/login/login.container';
import Confirmation from '../../../src/components/units/signup/confirmation/confirmation.container';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const LoginScreen = () => {
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen name="social" component={Social} />
        <Stack.Screen name="register" component={Register} />
        <Stack.Screen name="confirmation" component={Confirmation} />
        <Stack.Screen name="login" component={Login} />
      </Stack.Navigator>
    </>
  );
};
export default LoginScreen;