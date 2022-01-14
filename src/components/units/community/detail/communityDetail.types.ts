import { Query } from '../../../../commons/types/generated/types';
import { RouteProp } from '@react-navigation/native';

type RootStackParamList = {
  home: undefined;
  community: { screen: string; boardId: string };
  news: undefined;
  mypage: undefined;
};

type CommunityListScreenRouteProp = RouteProp<RootStackParamList, 'community'>;

export type IPropsRoute = {
  route: CommunityListScreenRouteProp;
};

export interface IPropsCommunityDetailUI {
  data?: Pick<Query, 'fetchBoard'>;
  firedata?: any;
  onPressLike: () => void;
  route: CommunityListScreenRouteProp;
  commentData?: Pick<Query, 'fetchBoardComments'>;
}
