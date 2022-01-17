/* eslint-disable no-unused-vars */
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { NativeSyntheticEvent, TextInputChangeEventData } from 'react-native';
import { Mutation } from '../../../../commons/types/generated/types';

type RootStackParamList = {
  login: undefined;
  confirmation: undefined;
};

type Props = NativeStackNavigationProp<RootStackParamList, 'login'>;

export type IPropsNavigation = {
  navigation: Props;
  loginUser?: Pick<Mutation, 'loginUser'>;
};

export interface IPropsLoginUI {
  email: string;
  password: string;
  onPressLogin: () => void;
  onChangeEmail: (event: NativeSyntheticEvent<TextInputChangeEventData>) => void;
  onChangePassword: (event: NativeSyntheticEvent<TextInputChangeEventData>) => void;
}
