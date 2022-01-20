/* eslint-disable no-unused-vars */
import { Query } from '../../../../commons/types/generated/types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export interface IPropsHomeCampaignUI {
  data?: Pick<Query, 'fetchUseditems'>;
  tags?: string[];
  dataForPicked?: Pick<Query, 'fetchUseditemsIPicked'>;
  dataForUser?: Pick<Query, 'fetchUserLoggedIn'>;
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

export type IPropNavigation = {
  navigation: ProfileScreenNavigationProp;
};
