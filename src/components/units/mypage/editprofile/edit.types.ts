import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
  home: undefined;
  community: undefined;
  news: undefined;
  mypage: { screen: string };
};

type ProfileScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'mypage'>;

export interface IPropsEditUI {
  onChangeName: any;
  data: any;
  fetchUserLoggedIn: any;
  navigation: ProfileScreenNavigationProp;
  name: string;
  password: string;
  onChangePassword: any;
  onClickUpdate: () => Promise<void>;
}
