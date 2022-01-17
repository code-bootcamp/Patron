import { Query } from '../../../../commons/types/generated/types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export interface IPropsConfirmationUI {
  data?: Pick<Query, 'fetchUserLoggedIn'>;
  navigation: Props;
}

type RootStackParamList = {
  signup: undefined;
  mainScreen: undefined;
};

type Props = NativeStackNavigationProp<RootStackParamList, 'signup'>;

export type INavigation = {
  navigation: Props;
};
