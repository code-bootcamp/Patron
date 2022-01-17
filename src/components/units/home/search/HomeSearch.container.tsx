import * as React from 'react';
import HomeSearchUI from './HomeSearch.presenter';
import { useQuery, useMutation } from '@apollo/client';
import {
  FETCH_USEDITEMS,
  TOGGLE_USEDITEM_PICK,
  FETCH_USEDITEMS_I_PICKED,
} from './HomeSearch.queries';
import _ from 'lodash';
import { NativeSyntheticEvent, TextInputChangeEventData } from 'react-native';
import { IPropsNavigation } from './HomeSearch.types';
import {
  MutationToggleUseditemPickArgs,
  Mutation,
  QueryFetchUseditemsArgs,
  Query,
  QueryFetchUseditemsIPickedArgs,
} from '../../../../commons/types/generated/types';

export default function HomeSearch({ navigation }: IPropsNavigation) {
  const [keyword, setKeyword] = React.useState<string>('');
  const [toggleUseditemPick] = useMutation<
    Pick<Mutation, 'toggleUseditemPick'>,
    MutationToggleUseditemPickArgs
  >(TOGGLE_USEDITEM_PICK);
  const getDebounce = _.debounce((data) => {
    if (data) {
      refetch({ search: data });
    }
  }, 200);

  const { data, refetch } = useQuery<Pick<Query, 'fetchUseditems'>, QueryFetchUseditemsArgs>(
    FETCH_USEDITEMS,
    {
      variables: {
        search: '@',
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

  function onChangeSearchBar(event: NativeSyntheticEvent<TextInputChangeEventData>) {
    setKeyword(event.nativeEvent.text);
    getDebounce(event.nativeEvent.text);
  }

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
              search: '',
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
    <HomeSearchUI
      onChangeSearchBar={onChangeSearchBar}
      data={data}
      dataForPicked={dataForPicked}
      keyword={keyword}
      onPressPick={onPressPick}
      navigation={navigation}
    />
  );
}
