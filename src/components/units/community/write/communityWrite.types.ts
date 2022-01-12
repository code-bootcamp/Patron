/* eslint-disable no-unused-vars */
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { NativeSyntheticEvent, TextInputChangeEventData } from 'react-native';

type RootStackParamList = {
  home: undefined;
  community: { screen: string };
  news: undefined;
  mypage: undefined;
};

type ProfileScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'community'>;

export type IPropsNavigation = {
  navigation: ProfileScreenNavigationProp;
};

export interface IPropsCommunityWriteUI {
  onChangeTitle: (event: NativeSyntheticEvent<TextInputChangeEventData>) => void;
  onChangeContents: (event: NativeSyntheticEvent<TextInputChangeEventData>) => void;
  hashArr: string[] | [];
  deleteHash: (idx: number) => () => void;
  onKeyUp: (event: any) => void;
  tagInput: any;
  images: string[] | [];
  addImage: () => void;
  onPressSubmit: () => void;
  isEdit: boolean;
  data: any;
  firedata: any;
  onPressUpdate: () => void;
}
