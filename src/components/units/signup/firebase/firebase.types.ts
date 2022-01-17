/* eslint-disable no-unused-vars */
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { NativeSyntheticEvent, TextInputChangeEventData } from 'react-native';

type RootStackParamList = {
  firebaselogin: undefined;
  mainScreen: undefined;
};

type Props = NativeStackNavigationProp<RootStackParamList, 'firebaselogin'>;

export type IPropsNavigation = {
  navigation: Props;
  email: string;
  password: string;
};

export interface IPropsFirebaseUI {
  onPressLogin: () => void;
  onChangeEmail: (event: NativeSyntheticEvent<TextInputChangeEventData>) => void;
  onChangePassword: (event: NativeSyntheticEvent<TextInputChangeEventData>) => void;
}
