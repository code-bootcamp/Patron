import * as React from 'react';
import HomeCampaignUI from './HomeCampaign.presenter';
import { useMutation, useQuery } from '@apollo/client';
import {
  FETCH_USEDITEMS,
  FETCH_USER_LOGGED_IN,
  TOGGLE_USEDITEM_PICK,
  FETCH_USEDITEMS_I_PICKED,
} from './HomeCampaign.queries';
import {
  Mutation,
  MutationToggleUseditemPickArgs,
  Query,
  QueryFetchUseditemsArgs,
  QueryFetchUseditemsIPickedArgs,
} from '../../../../commons/types/generated/types';
import { IPropNavigation } from './HomeCampaign.types';

export default function HomeCampaign({ navigation }: IPropNavigation) {
  const [toggleUseditemPick] = useMutation<
    Pick<Mutation, 'toggleUseditemPick'>,
    MutationToggleUseditemPickArgs
  >(TOGGLE_USEDITEM_PICK);
  const { data } = useQuery<Pick<Query, 'fetchUseditems'>, QueryFetchUseditemsArgs>(
    FETCH_USEDITEMS,
    {
      variables: {
        search: '캠페인',
      },
    },
  );

  const { data: dataForPicked } = useQuery<
    Pick<Query, 'fetchUseditemsIPicked'>,
    QueryFetchUseditemsIPickedArgs
  >(FETCH_USEDITEMS_I_PICKED, {
    variables: {
      search: '',
    },
  });

  const { data: dataForUser } = useQuery(FETCH_USER_LOGGED_IN);

  const onPressPick = (el: any) => async () => {
    try {
      await toggleUseditemPick({
        variables: {
          useditemId: el._id,
        },
        refetchQueries: [
          {
            query: FETCH_USEDITEMS,
            variables: {
              search: '캠페인',
            },
          },
          {
            query: FETCH_USEDITEMS_I_PICKED,
            variables: {
              search: '',
            },
          },
        ],
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <HomeCampaignUI
      data={data}
      dataForUser={dataForUser}
      onPressPick={onPressPick}
      navigation={navigation}
      dataForPicked={dataForPicked}
    />
  );
}
