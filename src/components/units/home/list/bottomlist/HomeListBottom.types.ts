import { Query } from '../../../../../commons/types/generated/types';

export interface IPropsHomeListBottom {
  category?: string;
}

export interface IPropsHomeListBottomUI {
  category?: string;
  data?: Pick<Query, 'fetchUseditems'>;
  dataForPicked?: Pick<Query, 'fetchUseditemsIPicked'>;
  onPress: () => void;
  onPressPick: any;
}
