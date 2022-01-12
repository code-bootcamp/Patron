import React, { useEffect, useState } from 'react';
import firestore from '@react-native-firebase/firestore';
import HomeDetailsUI from './HomeDetails.presenter';
import { gql, useQuery } from '@apollo/client';

const FETCH_USEDITEM = gql`
  query fetchUseditem($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      _id
      name
      remarks
      contents
      tags
      images
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

  return <HomeDetailsUI route={route} data={data} />;
}
