/* eslint-disable no-unused-vars */
import { Query } from '../../../../../commons/types/generated/types';

export interface IPropsHomeListBottom {
  category?: string;
  navigation: any;
}

export interface IPropsHomeListBottomUI {
  category?: string;
  data?: Pick<Query, 'fetchUseditems'>;
  dataForPicked?: Pick<Query, 'fetchUseditemsIPicked'>;
  onPressPick: (el: any) => () => Promise<void>;
  navigation: any;
}
