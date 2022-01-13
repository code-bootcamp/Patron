import CommunityUI from './community.presenter';
import firestore from '@react-native-firebase/firestore';
import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { FETCH_BEST_ITEMS, FETCH_USER_LOGGED_IN, FETCH_BOARDS } from './community.queries';
import { IPropsNavigation } from './community.types';
import { Query } from '../../../../commons/types/generated/types';

const Community = ({ navigation }: IPropsNavigation) => {
  const { data } = useQuery<Pick<Query, 'fetchBoards'>>(FETCH_BOARDS);
  const { data: bestData } = useQuery<Pick<Query, 'fetchUseditemsOfTheBest'>>(FETCH_BEST_ITEMS);
  const { data: loginData } = useQuery<Pick<Query, 'fetchUserLoggedIn'>>(FETCH_USER_LOGGED_IN);
  const commuCollection = firestore().collection('community');
  const [firedata, setFiredata] = useState({});

  useEffect(() => {
    commuCollection.get().then((ducumentSnapshot) =>
      ducumentSnapshot.docs.map((doc) => {
        setFiredata({ ...doc.data() });
      }),
    );
  }, []);

  const getDetail = (id: string) => () => {
    navigation.navigate('community', {
      screen: 'detail',
      params: { boardId: id },
    });
  };

  const getList = (id: string) => () => {
    navigation.navigate('community', {
      screen: 'list',
      params: { useditemId: id },
    });
  };

  return (
    <CommunityUI
      navigation={navigation}
      data={data}
      firedata={firedata}
      getDetail={getDetail}
      bestData={bestData}
      getList={getList}
      loginData={loginData}
    />
  );
};

export default Community;
