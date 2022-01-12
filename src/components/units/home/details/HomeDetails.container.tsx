import React, { useEffect, useState } from 'react';
import firestore from '@react-native-firebase/firestore';
import HomeDetailsUI from './HomeDetails.presenter';
import { gql, useQuery } from '@apollo/client';
import firestore from '@react-native-firebase/firestore';

const FETCH_USEDITEM = gql`
  query fetchUseditem($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      _id
      name
      remarks
      contents
      tags
      images
      createdAt
    }
  }
`;

export default function HomeDetails({ route }) {
  // console.log(route);
  const { data } = useQuery(FETCH_USEDITEM, {
    variables: {
      useditemId: route.params.useditemId,
    },
  });
  const homeCollection = firestore().collection('home');
  const docRef = homeCollection.doc(route.params?.useditemId);
  const [firedata, setFiredata] = useState({});

  useEffect(() => {
    homeCollection
      .doc(route.params?.useditemId)
      .get()
      .then((doc) => setFiredata({ ...doc.data() }));
  }, []);

  useEffect(() => {
    docRef.update({ suppoters: firedata?.suppoters + 1 });
  }, [firedata]);

  const [homeData, setHomeData] = React.useState({});
  const HomeCollection = firestore().collection('home');
  const docRef = HomeCollection.doc(data?.fetchUseditem._id);

  docRef.get().then((doc) => setHomeData({ ...doc.data()?.EndAt }));

  const getDate = new Date(homeData._seconds * 1000);

  return <HomeDetailsUI route={route} data={data} getDate={getDate} />;

