import * as React from 'react';
import { useQuery, useMutation } from '@apollo/client';
import {
  FETCH_USEDITEMS,
  FETCH_USEDITEMS_I_PICKED,
  TOGGLE_USEDITEM_PICK,
} from './HomeChildrenList.queries';
import { IPropsNavigation } from './HomeChildrenList.types';
import HomeChildrenListUI from './HomeChildrenList.presenter';
import {
  Mutation,
  MutationToggleUseditemPickArgs,
  Query,
  QueryFetchUseditemsArgs,
  QueryFetchUseditemsIPickedArgs,
} from '../../../../../commons/types/generated/types';

export default function HomeChildrenList({ navigation }: IPropsNavigation) {
  const [toggleUseditemPick] = useMutation<
    Pick<Mutation, 'toggleUseditemPick'>,
    MutationToggleUseditemPickArgs
  >(TOGGLE_USEDITEM_PICK);

  const { data } = useQuery<Pick<Query, 'fetchUseditems'>, QueryFetchUseditemsArgs>(
    FETCH_USEDITEMS,
    {
      variables: {
        search: '결연아동',
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
              search: '결연아동',
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
      <HomeChildrenListUI
        data={data}
        dataForPicked={dataForPicked}
        onPressPick={onPressPick}
        navigation={navigation}
      />
    </>
  );
}
