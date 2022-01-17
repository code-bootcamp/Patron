import { Query } from '../../../../../commons/types/generated/types';

export interface IPropsHomeListBottom {
  category?: string;
  navigation: any;
}

export interface IPropsHomeListBottomUI {
  category?: string;
  data?: Pick<Query, 'fetchUseditems'>;
  dataForPicked?: Pick<Query, 'fetchUseditemsIPicked'>;
  onPressPick: any;
  navigation: any;
}
