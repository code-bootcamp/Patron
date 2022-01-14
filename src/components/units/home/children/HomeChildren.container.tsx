import * as React from 'react';
import HomeChildrenUI from './HomeChildren.presenter';
import {
  FETCH_USEDITEMS,
  FETCH_USER_LOGGED_IN,
  TOGGLE_USEDITEM_PICK,
  FETCH_USEDITEMS_I_PICKED,
} from './HomeChildren.queries';
import { useMutation, useQuery } from '@apollo/client';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

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

export default function HomeChildren({ navigation }: Props) {
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

  const { data: dataForUser } = useQuery(FETCH_USER_LOGGED_IN);

  const onPressPickChild = (el) => async () => {
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
