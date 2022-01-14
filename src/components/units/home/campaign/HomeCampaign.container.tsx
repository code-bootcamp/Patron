import * as React from 'react';
import HomeCampaignUI from './HomeCampaign.presenter';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useMutation, useQuery } from '@apollo/client';
import {
  FETCH_USEDITEMS,
  FETCH_USER_LOGGED_IN,
  TOGGLE_USEDITEM_PICK,
  FETCH_USEDITEMS_I_PICKED,
} from './HomeCampaign.queries';

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

export default function HomeCampaign({ navigation }: Props) {
  const [toggleUseditemPick] = useMutation(TOGGLE_USEDITEM_PICK);
  const { data } = useQuery(FETCH_USEDITEMS, {
    variables: {
      search: '캠페인',
    },
  });

  const { data: dataForPicked } = useQuery(FETCH_USEDITEMS_I_PICKED, {
    variables: {
      search: '',
    },
  });

  const { data: dataForUser } = useQuery(FETCH_USER_LOGGED_IN);

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
