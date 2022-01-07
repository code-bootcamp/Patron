import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
  mypage: { screen: string };
  home: undefined;
  news: undefined;
  community: undefined;
};

type ProfileScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'mypage'>;

export type IPropsPersonalinformationUI = {
  navigation: ProfileScreenNavigationProp;
};
