import * as React from 'react';
import { useQuery, useMutation } from '@apollo/client';
import {
  FETCH_USEDITEMS,
  FETCH_USEDITEMS_I_PICKED,
  TOGGLE_USEDITEM_PICK,
} from './HomeChildrenList.queries';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import HomeChildrenListUI from './HomeChildrenList.presenter';

type RootStackParamList = {
  home: { screen: string };
  community: { screen: string };
  news: undefined;
  mypage: undefined;
};

type ProfileScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'home'>;

type Props = {
  navigation: ProfileScreenNavigationProp;
};

export default function HomeChildrenList({ navigation }: Props) {
  const [toggleUseditemPick] = useMutation(TOGGLE_USEDITEM_PICK);
  const { data } = useQuery(FETCH_USEDITEMS, {
    variables: {
      search: '결연아동',
    },
  });
  const { data: dataForPicked } = useQuery(FETCH_USEDITEMS_I_PICKED, {
    variables: {
      search: '',
    },
  });

  const onPressPick = (el) => async () => {
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
