import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
  social: undefined;
  mainScreen: undefined;
  firebaselogin: undefined;
  login: undefined;
  register: undefined;
};

type Props = NativeStackNavigationProp<RootStackParamList, 'social'>;

export type IPropsNavigation = {
  navigation: Props;
};

export interface IPropsSocialUI {
  navigation: Props;
  onGoogleButtonPress: () => void;
}
