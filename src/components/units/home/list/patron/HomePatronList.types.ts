/* eslint-disable no-unused-vars */
import { Query } from '../../../../../commons/types/generated/types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export interface IPropsHomePatronListUI {
  data?: Pick<Query, 'fetchUseditems'>;
  dataForPicked?: Pick<Query, 'fetchUseditemsIPicked'>;
  onPressPick: (el: any) => () => Promise<void>;
  navigation: NativeStackNavigationProp<RootStackParamList, 'home'>;
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
