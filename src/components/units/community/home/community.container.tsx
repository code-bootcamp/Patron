import CommunityUI from './community.presenter';
import firestore from '@react-native-firebase/firestore';
import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { FECTH_BOARDS } from './community.queries';
import { IPropsNavigation } from './community.types';

const Community = ({ navigation }: IPropsNavigation) => {
  const { data } = useQuery(FECTH_BOARDS);
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
    // firedata.views = firedata.views + 1;
    // setFiredata({ ...firedata });
    // commuCollection.doc(id).update({
    //   ...firedata,
    // });
    // console.log(firedata);
  };

  return (
    <CommunityUI navigation={navigation} data={data} firedata={firedata} getDetail={getDetail} />
  );
};

export default Community;
