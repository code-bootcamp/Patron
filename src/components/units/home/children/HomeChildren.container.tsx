import * as React from 'react';
import HomeChildrenUI from './HomeChildren.presenter';
import { FETCH_USEDITEMS, FETCH_USER_LOGGED_IN } from './HomeChildren.queries';
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

  const { data: dataForUser } = useQuery(FETCH_USER_LOGGED_IN);

  return <HomeChildrenUI data={data} dataForUser={dataForUser} navigation={navigation} />;
}
