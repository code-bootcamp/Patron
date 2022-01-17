import { Query } from '../../../../../commons/types/generated/types';

export interface IPropsHomeLetterUI {
  data?: Pick<Query, 'fetchUseditemQuestions'>;
  useditemId: string;
}

export interface IPropsHomeLetter {}

export interface IPropsHomeLetterUIItem {
  isEdit: boolean;
  el: any;
  useditemId?: string;
}
