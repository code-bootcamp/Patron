import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
  mypage: { screen: string };
  home: undefined;
  news: undefined;
  community: undefined;
};

type ProfileScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'mypage'>;

export type IPropsPersonalinformation = {
  navigation: ProfileScreenNavigationProp;
  onPressLogout: () => Promise<void>;
};

export interface IPropsPersonalinformationUI {
  data: any;
  navigation: ProfileScreenNavigationProp;
  onPress: () => void;
  onPressLogout: () => Promise<void>;
}
