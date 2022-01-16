import { RouteProp } from '@react-navigation/native';
import { Query } from '../../../../commons/types/generated/types';

type RootStackParamList = {
  home: undefined;
  community: { screen: string; boardId: string; useditemId: string };
  news: undefined;
  mypage: undefined;
};

type CommunityListScreenRouteProp = RouteProp<RootStackParamList, 'community'>;

export type IPropsRoute = {
  route: CommunityListScreenRouteProp;
};

export interface IPropsCommunityListUI {
  data?: Pick<Query, 'fetchUseditem'>;
  getListDetail: () => void;
  firedata: any;
}
