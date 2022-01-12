import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Query } from '../../../../commons/types/generated/types';

type RootStackParamList = {
  home: undefined;
  community: { screen: string; params?: { boardId?: string; useditemId?: string } };
  news: undefined;
  mypage: undefined;
};

type ProfileScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'community'>;

export type IPropsNavigation = {
  navigation: ProfileScreenNavigationProp;
};

export interface IPropsCommunityUI {
  [x: string]: any;
  navigation: ProfileScreenNavigationProp;

  data?: Pick<Query, 'fetchBoards'>;
}
