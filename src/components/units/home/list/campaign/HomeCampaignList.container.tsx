import * as React from 'react';
import HomeCampaignListUI from './HomeCampaignList.presenter';
import { useQuery, useMutation } from '@apollo/client';
import { IPropsNavigation } from './HomeCampaignList.types';
import {
  FETCH_USEDITEMS,
  TOGGLE_USEDITEM_PICK,
  FETCH_USEDITEMS_I_PICKED,
} from './HomeCampaignList.queries';
import {
  Mutation,
  MutationToggleUseditemPickArgs,
  Query,
  QueryFetchUseditemsArgs,
  QueryFetchUseditemsIPickedArgs,
} from '../../../../../commons/types/generated/types';

export default function HomeCampaignList({ navigation }: IPropsNavigation) {
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
              search: '정기후원',
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
    <>
      <HomeCampaignListUI
        data={data}
        dataForPicked={dataForPicked}
        onPressPick={onPressPick}
        navigation={navigation}
      />
    </>
  );
}
