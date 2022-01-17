import { Query } from '../../../../commons/types/generated/types';

export interface IPropsHomePaymentUI {
  data?: Pick<Query, 'fetchUseditem'>;
  option: number[];
  onChangePrice: () => void;
}
