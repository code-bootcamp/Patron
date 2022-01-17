import { Query } from '../../../../../commons/types/generated/types';

export interface IPropsHomeLetterUI {
  data?: Pick<Query, 'fetchUseditemQuestions'>;
  useditemId: string;
}

export interface IPropsHomeLetter {
  route: any;
}

export interface IPropsHomeLetterUIItem {
  el: any;
  useditemId?: string;
}
