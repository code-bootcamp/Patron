import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
  home: undefined;
  community: undefined;
  news: undefined;
  mypage: { screen: string };
};

type ProfileScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'mypage'>;

export interface IPropsEditUI {
  navigation: ProfileScreenNavigationProp;
}
