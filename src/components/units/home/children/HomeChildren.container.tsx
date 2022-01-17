import * as React from 'react';
import HomeChildrenUI from './HomeChildren.presenter';
import {
  FETCH_USEDITEMS,
  FETCH_USER_LOGGED_IN,
  TOGGLE_USEDITEM_PICK,
  FETCH_USEDITEMS_I_PICKED,
} from './HomeChildren.queries';
import { useMutation, useQuery } from '@apollo/client';
import { IPropsNavigation } from './HomeChildren.types';
import {
  Mutation,
  MutationToggleUseditemPickArgs,
  Query,
  QueryFetchUseditemsArgs,
  QueryFetchUseditemsIPickedArgs,
} from '../../../../commons/types/generated/types';

export default function HomeChildren({ navigation }: IPropsNavigation) {
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

  const { data: dataForUser } = useQuery(FETCH_USER_LOGGED_IN);

  const onPressPickChild = (el: any) => async () => {
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
    <HomeChildrenUI
      data={data}
      dataForUser={dataForUser}
      dataForPicked={dataForPicked}
      onPressPickChild={onPressPickChild}
      navigation={navigation}
    />
  );
}
