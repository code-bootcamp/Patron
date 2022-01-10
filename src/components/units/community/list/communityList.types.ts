import { RouteProp } from '@react-navigation/native';

type RootStackParamList = {
  home: undefined;
  community: { screen: string; params: { boardId: string } };
  news: undefined;
  mypage: undefined;
};

type CommunityListScreenRouteProp = RouteProp<RootStackParamList, 'community'>;

export type IPropsRoute = {
  route: CommunityListScreenRouteProp;
};
