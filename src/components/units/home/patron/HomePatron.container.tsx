import { useQuery, useMutation } from '@apollo/client';
import * as React from 'react';
import {
  Mutation,
  MutationToggleUseditemPickArgs,
  Query,
  QueryFetchUseditemsArgs,
  QueryFetchUseditemsIPickedArgs,
} from '../../../../commons/types/generated/types';
import HomePatronUI from './HomePatron.presenter';
import {
  FETCH_USEDITEMS,
  FETCH_USER_LOGGED_IN,
  TOGGLE_USEDITEM_PICK,
  FETCH_USEDITEMS_I_PICKED,
} from './HomePatron.queries';
import { IPropsNavigation } from './HomePatron.types';

export default function HomePatron({ navigation }: IPropsNavigation) {
  const [toggleUseditemPick] = useMutation<
    Pick<Mutation, 'toggleUseditemPick'>,
    MutationToggleUseditemPickArgs
  >(TOGGLE_USEDITEM_PICK);

  const { data } = useQuery<Pick<Query, 'fetchUseditems'>, QueryFetchUseditemsArgs>(
    FETCH_USEDITEMS,
    {
      variables: {
        search: '정기후원',
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

  const { data: dataForUser } = useQuery(FETCH_USER_LOGGED_IN);
  return (
    <HomePatronUI
      data={data}
      dataForUser={dataForUser}
      dataForPicked={dataForPicked}
      navigation={navigation}
      onPressPick={onPressPick}
    />
  );
}
