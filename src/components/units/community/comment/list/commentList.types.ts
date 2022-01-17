import { RouteProp } from '@react-navigation/native';
import { Query } from '../../../../../commons/types/generated/types';

type RootStackParamList = {
  home: undefined;
  community: { screen: string; boardId: string };
  news: undefined;
  mypage: undefined;
};

type CommunityListScreenRouteProp = RouteProp<RootStackParamList, 'community'>;

export interface IPropsCommentList {
  route: CommunityListScreenRouteProp;
}

export interface IPropsCommentListUI {
  data?: Pick<Query, 'fetchBoardComments'>;
  boardId: string;
}

export interface IPropsCommentListUIItem {
  el?: any;
  boardId: string;
}
