/* eslint-disable no-unused-vars */
import { Query } from '../../../../commons/types/generated/types';

export interface IPropsCommunitySearchUI {
  data?: Pick<Query, 'fetchBoards'>;
  route: any;
  logindata?: Pick<Query, 'fetchUserLoggedIn'>;
  bestdata?: Pick<Query, 'fetchBoardsOfTheBest'>;
  getDetail: (id: string) => () => void;
}
