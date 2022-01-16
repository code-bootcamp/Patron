/* eslint-disable no-unused-vars */
import { NativeSyntheticEvent, TextInputChangeEventData } from 'react-native';
import { RouteProp } from '@react-navigation/native';

export interface IPropsCommentWriteUI {
  onChangeContents: (event: NativeSyntheticEvent<TextInputChangeEventData>) => void;
  onSubmitComment: () => void;
  isEdit: boolean;
  el: any;
  onUpdateComment: () => void;
  commentInput: any;
}

type RootStackParamList = {
  home: undefined;
  community: { screen: string; boardId: string };
  news: undefined;
  mypage: undefined;
};

type CommunityListScreenRouteProp = RouteProp<RootStackParamList, 'community'>;

export interface IPropsCommentWrite {
  route?: CommunityListScreenRouteProp;
  isEdit?: boolean;
  boardId?: string;
  el?: any;
  setIsEdit?: any;
}
