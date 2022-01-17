import React, { useEffect, useState } from 'react';
import firestore from '@react-native-firebase/firestore';
import styled from '@emotion/native';

export const Tag = styled.Text`
  height: 16px;
  margin-right: 8px;
  padding: 0 8px;
  line-height: 16px;
  text-align: center;
  color: #000000;
  font-size: 8px;
  font-weight: 400;
  border-radius: 40px;
  background-color: #f5f5f5;
`;

const GetHashs = ({ id }: { id: string }) => {
  const [hashs, setHashs] = useState<any[]>([]);
  const commuCollection = firestore().collection('community');
  const docRef = commuCollection.doc(id);

  useEffect(() => {
    docRef.get().then((doc) => setHashs([...doc.data().tags]));
    return () => console.log('useEffect!');
  }, []);

  return hashs.map((el: string, idx: number) => <Tag key={idx}>#{el}</Tag>);
};

export default GetHashs;
