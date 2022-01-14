import React, { useEffect } from 'react';
import SocialUI from './social.presenter';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import { Alert } from 'react-native';

const Social = ({ navigation }) => {
  useEffect(() => {
    GoogleSignin.configure({
      webClientId: '658624640581-fvgmel5t0e1tsmiimse2k04ss3eq1gng.apps.googleusercontent.com',
    });
  }, []);

  async function onGoogleButtonPress() {
    try {
      const { idToken, accessToken }: any = await GoogleSignin.signIn();
      const googleCredential = auth.GoogleAuthProvider.credential(idToken, accessToken);
      return auth().signInWithCredential(googleCredential);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log(statusCodes.SIGN_IN_CANCELLED);
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log(statusCodes.IN_PROGRESS);
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log(statusCodes.PLAY_SERVICES_NOT_AVAILABLE);
      } else {
        if (error instanceof Error) console.log(error.message);
      }
    }
    Alert.alert('로그인 되셨습니다. 환영합니다!');
    navigation.navigate('mainScreen');
  }

  return <SocialUI navigation={navigation} onGoogleButtonPress={onGoogleButtonPress} />;
};
export default Social;
