import CommunityListUI from './communityList.presenter';
import React from 'react';
import { useQuery } from '@apollo/client';
import { Query, QueryFetchUseditemArgs } from '../../../../commons/types/generated/types';
import { FETCH_USEDITEM } from './communityList.queries';
import { IPropsRoute } from './communityList.types';

const CommunityList = ({ route }: IPropsRoute) => {
  const { data } = useQuery<Pick<Query, 'fetchUseditem'>, QueryFetchUseditemArgs>(FETCH_USEDITEM, {
    variables: { useditemId: route.params?.useditemId },
  });

  return <CommunityListUI data={data} />;
};

export default CommunityList;
