import CommunityUI from './community.presenter';
import React from 'react';
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

const Community = ({ navigation }: Props) => {
  return <CommunityUI navigation={navigation} />;
};

export default Community;
