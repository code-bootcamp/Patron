/* eslint-disable no-unused-vars */
import { Query } from '../../../../commons/types/generated/types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { NativeSyntheticEvent, TextInputChangeEventData } from 'react-native';

export interface IPropsHomePatronUI {
  data?: Pick<Query, 'fetchUseditems'>;
  dataForPicked?: Pick<Query, 'fetchUseditemsIPicked'>;
  dataForUser?: Pick<Query, 'fetchUserLoggedIn'>;
  onPressPick: any;
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

export interface IPropsHomeSearchUI {
  onChangeSearchBar: (event: NativeSyntheticEvent<TextInputChangeEventData>) => void;
  keyword: string;
  data?: Pick<Query, 'fetchUseditems'>;
  dataForPicked?: Pick<Query, 'fetchUseditemsIPicked'>;
  onPressPick: (el: any) => () => void;
  images?: string[] | null | undefined;
  navigation: any;
}
