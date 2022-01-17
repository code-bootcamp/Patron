import React, { useState } from 'react';
import FirebaseUI from './firebase.presenter';
import auth from '@react-native-firebase/auth';
import { Alert, NativeSyntheticEvent, TextInputChangeEventData } from 'react-native';
import { IPropsNavigation } from './firebase.types';

const Firebase = ({ navigation }: IPropsNavigation) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPasswrd] = useState<string>('');

  const onChangeEmail = (event: NativeSyntheticEvent<TextInputChangeEventData>) => {
    setEmail(event.nativeEvent.text);
  };

  const onChangePassword = (event: NativeSyntheticEvent<TextInputChangeEventData>) => {
    setPasswrd(event.nativeEvent.text);
  };

  const onPressLogin = async () => {
    if (!/\w+@\w+\.\w+/.test(email) || !password || password.length <= 2) {
      Alert.alert('이메일과 비밀번호를 등록해주세요');
      return;
    }
    try {
      auth().createUserWithEmailAndPassword(email, password);
    } catch (error) {
      if (error instanceof Error) Alert.alert(error.message);
    }
    Alert.alert('로그인되셨습니다!');
    navigation.navigate('mainScreen');
  };
  return (
    <FirebaseUI
      onPressLogin={onPressLogin}
      onChangeEmail={onChangeEmail}
      onChangePassword={onChangePassword}
    />
  );
};
export default Firebase;
