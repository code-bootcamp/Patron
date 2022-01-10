/* eslint-disable no-unused-vars */
import { NativeSyntheticEvent, TextInputChangeEventData } from 'react-native';
import { RouteProp } from '@react-navigation/native';

export interface IPropsCommentWriteUI {
  onChangeContents: (event: NativeSyntheticEvent<TextInputChangeEventData>) => void;
  onSubmitComment: () => void;
}

type RootStackParamList = {
  home: undefined;
  community: { screen: string; params: { boardId: string } };
  news: undefined;
  mypage: undefined;
};

type CommunityListScreenRouteProp = RouteProp<RootStackParamList, 'community'>;

export interface IPropsCommentWrite {
  route: CommunityListScreenRouteProp;
}
