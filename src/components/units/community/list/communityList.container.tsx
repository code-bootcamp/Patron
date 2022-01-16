import CommunityListUI from './communityList.presenter';
import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { Query, QueryFetchUseditemArgs } from '../../../../commons/types/generated/types';
import { FETCH_USEDITEM } from './communityList.queries';
import { IPropsRoute } from './communityList.types';
import firestore from '@react-native-firebase/firestore';

const CommunityList = ({ navigation, route }: IPropsRoute) => {
  const homeCollection = firestore().collection('home');
  const { data } = useQuery<Pick<Query, 'fetchUseditem'>, QueryFetchUseditemArgs>(FETCH_USEDITEM, {
    variables: { useditemId: route.params?.useditemId },
  });
  const [firedata, setFiredata] = useState({});

  useEffect(() => {
    navigation.getParent()?.setOptions({ tabBarStyle: { display: 'none' } });
    return () =>
      navigation.getParent()?.setOptions({
        tabBarStyle: {
          height: 64,
          paddingTop: 10,
          paddingBottom: 10,
          paddingLeft: 30,
          paddingRight: 30,
        },
      });
  }, [navigation]);

  useEffect(() => {
    homeCollection
      .doc(route.params?.useditemId)
      .get()
      .then((doc) => setFiredata({ ...doc.data() }));
  }, []);

  const getListDetail = () => {
    navigation.navigate('Home', {
      screen: 'homeDetails',
      params: { useditemId: route.params?.useditemId },
    });
  };

  return <CommunityListUI data={data} getListDetail={getListDetail} firedata={firedata} />;
};

export default CommunityList;
