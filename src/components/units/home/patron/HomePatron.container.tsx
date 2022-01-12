import { useQuery } from '@apollo/client';
import * as React from 'react';
import HomePatronUI from './HomePatron.presenter';
import { FETCH_USEDITEMS, FETCH_USER_LOGGED_IN } from './HomePatron.queries';
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

export default function HomePatron({ navigation }: Props) {
  const { data } = useQuery(FETCH_USEDITEMS, {
    variables: {
      search: '정기후원',
    },
  });

  const { data: dataForUser } = useQuery(FETCH_USER_LOGGED_IN);
  return <HomePatronUI data={data} dataForUser={dataForUser} navigation={navigation} />;

}
