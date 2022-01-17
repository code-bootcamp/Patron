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
};

export interface IPropsHomePaymentUI {
  data?: Pick<Query, 'fetchUseditem'>;
  option: number[];
  onChangePrice: () => void;
  price: number;
  onPressPay: () => void;
}

