/* eslint-disable no-unused-vars */
import { Query } from '../../../../commons/types/generated/types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { NativeSyntheticEvent, TextInputChangeEventData } from 'react-native';

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

export interface IPropsHomePaymentUI {
  data?: Pick<Query, 'fetchUseditem'>;
  option: number[];
  onChangePrice: (event: NativeSyntheticEvent<TextInputChangeEventData>) => void;
  price: number;
  onPressPay: () => void;
  onPressOption: (el: number) => () => void;
}
