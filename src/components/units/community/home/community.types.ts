import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
  home: undefined;
  community: { screen: string };
  news: undefined;
  mypage: undefined;
};

type ProfileScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'community'>;

export interface IPropsCommunityUI {
  navigation: ProfileScreenNavigationProp;
}
