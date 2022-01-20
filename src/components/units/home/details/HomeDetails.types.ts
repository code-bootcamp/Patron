/* eslint-disable no-unused-vars */
import { Query } from '../../../../commons/types/generated/types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
  home: { screen: string };
  community: { screen: string };
  news: undefined;
  mypage: undefined;
};

type ProfileScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'home'>;

export type IPropNavigation = {
  navigation: ProfileScreenNavigationProp;
  route: any;
};

export interface IPropsHomeDetailsUI {
  data?: Pick<Query, 'fetchUseditem'>;
  dataForPicked?: Pick<Query, 'fetchUseditemsIPicked'>;
  planTitle?: string;
  people?: number;
  route: any;
  onPressSupport: () => void;
  getDate: Date;
  onPressPick: (el: any) => () => Promise<void>;
  navigation: NativeStackNavigationProp<RootStackParamList, 'home'>;
}
