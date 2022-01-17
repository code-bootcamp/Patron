import HomeListBottomUI from './HomeListBottom.presenter';
import * as React from 'react';
import { useMutation, useQuery } from '@apollo/client';
import {
  FETCH_USEDITEMS,
  TOGGLE_USEDITEM_PICK,
  FETCH_USEDITEMS_I_PICKED,
} from './HomeListBottom.queries';
import { IPropsHomeListBottom } from './HomeListBottom.types';
import {
  Mutation,
  MutationToggleUseditemPickArgs,
  Query,
  QueryFetchUseditemsArgs,
  QueryFetchUseditemsIPickedArgs,
} from '../../../../../commons/types/generated/types';

export default function HomeListBottom(props: IPropsHomeListBottom) {
  const [toggleUseditemPick] = useMutation<
    Pick<Mutation, 'toggleUseditemPick'>,
    MutationToggleUseditemPickArgs
  >(TOGGLE_USEDITEM_PICK);

  const { data } = useQuery<Pick<Query, 'fetchUseditems'>, QueryFetchUseditemsArgs>(
    FETCH_USEDITEMS,
    {
      variables: {
        search: props.category,
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
              search: props.category,
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
    <HomeListBottomUI
      data={data}
      dataForPicked={dataForPicked}
      onPressPick={onPressPick}
      category={props.category}
      navigation={props.navigation}
    />
  );
}
