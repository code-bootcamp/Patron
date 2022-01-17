import { Query } from '../../../../commons/types/generated/types';

export interface IPropsHomeDetailsUI {
  data?: Pick<Query, 'fetchUseditem'>;
  dataForPicked?: Pick<Query, 'fetchUseditemsIPicked'>;
  planTitle?: string;
  people?: number;
  route: any;
  onPressSupport: () => void;
  current: number | undefined;
  getDate: Date;
  onPressPick: any;
}
