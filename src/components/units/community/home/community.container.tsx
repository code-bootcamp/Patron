import CommunityUI from './community.presenter';
import firestore from '@react-native-firebase/firestore';
import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { FECTH_BOARDS, FETCH_BEST_ITEMS } from './community.queries';
import { IPropsNavigation } from './community.types';
import { Query } from '../../../../commons/types/generated/types';

const Community = ({ navigation }: IPropsNavigation) => {
  const { data } = useQuery<Pick<Query, 'fetchBoards'>>(FECTH_BOARDS);
  const { data: bestData } = useQuery<Pick<Query, 'fetchUseditemsOfTheBest'>>(FETCH_BEST_ITEMS);
  const commuCollection = firestore().collection('community');
  const [firedata, setFiredata] = useState({});
  const [viewCount, setViewCount] = useState<number>(0);

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
    const docRef = commuCollection.doc(id);
    docRef.get().then((doc) => setViewCount(doc.data()?.views));
    setViewCount((prev) => prev + 1);
    docRef.update({ views: viewCount });
    console.log(viewCount);
  };

  const getList = (id: string) => () => {
    navigation.navigate('community', {
      screen: 'list',
      params: { useditemId: id },
    });
    const docRef = commuCollection.doc(id);
    docRef.get().then((doc) => setViewCount(doc.data()?.views));
    setViewCount((prev) => prev + 1);
    docRef.update({ views: viewCount });
    console.log(viewCount);
  };

  return (
    <CommunityUI
      navigation={navigation}
      data={data}
      firedata={firedata}
      getDetail={getDetail}
      bestData={bestData}
      getList={getList}
    />
  );
};

export default Community;
