import React from 'react';
import SocialUI from './social.presenter';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
  home: undefined;
  community: { screen: string };
  news: undefined;
  mypage: undefined;
};

type ProfileScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'community'>;

type Props = {
  navigation: ProfileScreenNavigationProp;
};

const Social = ({ navigation }: Props) => {
  return <SocialUI navigation={navigation} />;
};
export default Social;
