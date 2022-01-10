import { useMutation } from '@apollo/client';
import React, { useContext, useState } from 'react';
import { GlobalContext } from '../../../../../App';
import LoginUI from './login.presenter';
import { LOGIN_USER } from './login.queries';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({ navigation }) => {
  const { setAccessToken }: any = useContext(GlobalContext);

  const [loginUser] = useMutation(LOGIN_USER);

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const onChangeEmail = (event) => {
    setEmail(event.nativeEvent.text);
  };

  const onChangePassword = (event) => {
    setPassword(event.nativeEvent.text);
  };

  const onPressLogin = async () => {
    if (!email || !password) return;
    try {
      const result = await loginUser({
        variables: {
          email,
          password,
        },
      });
      console.log(result);
      AsyncStorage.setItem('refreshToken', 'true');
      AsyncStorage.setItem('refreshToken', result.data?.loginUser.accessToken || '');
      console.log(result.data?.loginUser.accessToken);
      setAccessToken?.(result.data?.loginUser.accessToken || '');
      navigation.navigate('confirmation');
    } catch (error) {
      if (error instanceof Error) console.log('LoginError:', error.message);
    }
  };

  return (
    <LoginUI
      email={email}
      password={password}
      onChangeEmail={onChangeEmail}
      onChangePassword={onChangePassword}
      onPressLogin={onPressLogin}
    />
  );
};
export default Login;
