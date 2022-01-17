/* eslint-disable no-unused-vars */
import { Query } from '../../../../commons/types/generated/types';

import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export interface IPropsHomePatronUI {
  data?: Pick<Query, 'fetchUseditems'>;
  dataForPicked?: Pick<Query, 'fetchUseditemsIPicked'>;
  dataForUser?: Pick<Query, 'fetchUserLoggedIn'>;
  onPressPick: (el: any) => () => void;
  navigation: any;
  tags?: string[] | null | undefined;
  images?: string[] | null | undefined;
}

type RootStackParamList = {
  home: { screen: string };
  community: { screen: string };
  news: undefined;
  mypage: undefined;
};

type ProfileScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'home'>;

export type IPropsNavigation = {
  navigation: ProfileScreenNavigationProp;
};
