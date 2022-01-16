import React, { useEffect } from 'react';
import firestore from '@react-native-firebase/firestore';
import { useState } from 'react';
import { gql, useQuery } from '@apollo/client';
import { Query, QueryFetchUseditemArgs } from '../types/generated/types';
import styled from '@emotion/native';

const FETCH_USEDITEM = gql`
  query fetchUseditem($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      _id
      createdAt
    }
  }
`;

const DDay = styled.Text`
  color: #ffffff;
  font-size: 8px;
  padding-top: 6px;
`;

const GetDday = ({ id }: { id: string }) => {
  const { data } = useQuery<Pick<Query, 'fetchUseditem'>, QueryFetchUseditemArgs>(FETCH_USEDITEM, {
    variables: { useditemId: id },
  });
  const homeRef = firestore().collection('home').doc(id);
  const [endat, setEndat] = useState('');

  useEffect(() => {
    homeRef.get().then((doc) => setEndat(doc.data()?.EndAt));
    return () => console.log(endat);
  }, []);

  const start = data?.fetchUseditem.createdAt;
  const end = endat ? new Date(endat._seconds * 1000) : '';
  const endDate = new Date(end);
  const startDate = new Date(start);
  const distance = endDate.getTime() - startDate.getTime();
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));

  return <DDay>D-{days}</DDay>;
};

export default GetDday;
