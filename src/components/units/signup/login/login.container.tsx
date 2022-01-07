import { useMutation, useQuery } from '@apollo/client';
import React, { useContext, useState } from 'react';
import { GlobalContext } from '../../../../../App';
import LoginUI from './login.presenter';
import { LOGIN_USER, FETCH_USER_LOGGED_IN } from './login.queries';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({ navigation }) => {
  const { setAccessToken }: any = useContext(GlobalContext);

  const [loginUser] = useMutation(LOGIN_USER);
  // const [logoutUser] = useMutation(LOGOUT_USER);

  const { data } = useQuery(FETCH_USER_LOGGED_IN);

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const onChangeEmail = (event) => {
    // console.log(event.nativeEvent.text);
    setEmail(event.nativeEvent.text);
  };

  const onChangePassword = (event) => {
    // console.log(event.nativeEvent.text);
    setPassword(event.nativeEvent.text);
  };

  const onPressLogin = async () => {
    // if (!email || !password) return;
    try {
      const result = await loginUser({
        variables: {
          email,
          password,
        },
      });
      console.log(result);
      console.log(result.data?.loginUser.accessToken);
      setAccessToken(result.data?.loginUser.accessToken || '');
      AsyncStorage.setItem('accessToken', 'true');
      AsyncStorage.setItem('refreshToken', result.data?.loginUser.accessToken);
      navigation.navigate('confirmation');
    } catch (error) {
      if (error instanceof Error) console.log('LoginError:', error.message);
    }
  };

  // const onPressLogout = async () => {
  //   try {
  //     AsyncStorage.removeItem('refreshToken');
  //     const result = await logoutUser;
  //     console.log(result);
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };

  return (
    <LoginUI
      email={email}
      password={password}
      onChangeEmail={onChangeEmail}
      onChangePassword={onChangePassword}
      onPressLogin={onPressLogin}
      // onPressLogout={onPressLogout}
      data={data}
    />
  );
};
export default Login;
