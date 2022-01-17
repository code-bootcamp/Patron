/* eslint-disable no-unused-vars */
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import {
  NativeSyntheticEvent,
  TextInputChangeEventData,
  GestureResponderEvent,
} from 'react-native';

type RootStackParamList = {
  home: undefined;
  community: undefined;
  news: undefined;
  mypage: { screen: string };
};

type ProfileScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'mypage'>;

export interface IPropsEditUI {
  onPress: ((event: GestureResponderEvent) => void) | undefined;
  navigation: ProfileScreenNavigationProp;
  data: any;
  name: string;
  onClickUpdate: () => Promise<void>;
  password: string;
  onChangeName: (event: NativeSyntheticEvent<TextInputChangeEventData>) => void;
  onChangePassword: (event: NativeSyntheticEvent<TextInputChangeEventData>) => void;
  uri: any;
  onImageLibraryPress: () => void;
}
