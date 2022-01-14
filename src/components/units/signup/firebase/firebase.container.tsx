import React, { useState } from 'react';
import FirebaseUI from './firebase.presenter';
import auth from '@react-native-firebase/auth';
import { Alert } from 'react-native';

const Firebase = ({ navigation }) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPasswrd] = useState<string>('');

  const onChangeEmail = (event) => {
    setEmail(event.nativeEvent.text);
  };

  const onChangePassword = (event) => {
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
