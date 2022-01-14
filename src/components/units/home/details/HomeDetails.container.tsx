import React, { useEffect, useState } from 'react';
import firestore from '@react-native-firebase/firestore';
import HomeDetailsUI from './HomeDetails.presenter';

import { useQuery } from '@apollo/client';
import { FETCH_USEDITEM } from './HomeDetails.queries';

export default function HomeDetails({ route, navigation }) {
  const { data } = useQuery(FETCH_USEDITEM, {
    variables: {
      useditemId: route.params.useditemId,
    },
  });

  const [firedata, setFiredata] = useState({});
  const [homeData, setHomeData] = useState({});
  const [planTitle, setPlanTitle] = useState('');
  const [people, setPeople] = useState(0);
  const HomeCollection = firestore().collection('home');
  const docRef = HomeCollection.doc(data?.fetchUseditem._id);
  const suppoterRef = HomeCollection.doc(route.params?.useditemId);

  useEffect(() => {
    docRef.get().then((doc) => setHomeData({ ...doc.data()?.EndAt }));
    docRef.get().then((doc) => setPlanTitle(doc.data()?.plansTitle));
    docRef.get().then((doc) => setPeople(doc.data()?.suppoters));
  }, [docRef]);

  const getDate = new Date(homeData._seconds * 1000);

  useEffect(() => {
    HomeCollection.doc(route.params?.useditemId)
      .get()
      .then((doc) => setFiredata({ ...doc.data() }));
  }, []);

  // useEffect(() => {
  //   suppoterRef.update({ suppoters: firedata?.suppoters + 1 });
  // }, [firedata]);

  const onPressSupport = () => {
    suppoterRef.update({ suppoters: firedata?.suppoters + 1 });

    navigation.navigate('homePayment', { useditemId: route.params.useditemId });
  };

  return (
    <HomeDetailsUI
      route={route}
      data={data}
      getDate={getDate}
      planTitle={planTitle}
      people={people}
      onPressSupport={onPressSupport}
    />
  );
}
