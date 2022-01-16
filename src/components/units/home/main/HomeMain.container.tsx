import * as React from 'react';
import HomeMainUI from './HomeMain.presenter';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
  home: { screen: string };
  community: { screen: string };
  news: undefined;
  mypage: undefined;
};

type ProfileScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'home'>;

type Props = {
  navigation: ProfileScreenNavigationProp;
};

export default function HomeMain({ navigation }: Props) {
  return <HomeMainUI navigation={navigation} />;
}
