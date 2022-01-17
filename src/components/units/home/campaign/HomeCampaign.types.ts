import { Query } from '../../../../commons/types/generated/types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export interface IPropsHomeCampaignUI {
  data?: Pick<Query, 'fetchUseditems'>;
  tags?: string[];
  dataForPicked?: Pick<Query, 'fetchUseditemsIPicked'>;
  dataForUser?: Pick<Query, 'fetchUserLoggedIn'>;
  onPressPick: any;
  navigation: any;
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
