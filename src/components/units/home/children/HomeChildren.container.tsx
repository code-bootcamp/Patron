import * as React from 'react';
import HomeChildrenUI from './HomeChildren.presenter';
import { FETCH_USEDITEMS } from './HomeChildren.queries';
import { useQuery } from '@apollo/client';
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

export default function HomeChildren({ navigation }: Props) {
  const { data } = useQuery(FETCH_USEDITEMS, {
    variables: {
      search: '결연아동',
    },
  });
  return <HomeChildrenUI data={data} navigation={navigation} />;
}