import { useMutation, useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import {
  Mutation,
  MutationLikeBoardArgs,
  Query,
  QueryFetchBoardArgs,
  QueryFetchBoardCommentsArgs,
} from '../../../../commons/types/generated/types';
import { IPropsRoute } from './communityDetail.types';
import CommunityDetailUI from './communityDetail.presenter';
import { FETCH_BOARD, FETCH_BOARD_COMMENTS, LIKE_BOARD } from './communityDetail.queries';
import firestore from '@react-native-firebase/firestore';

const CommunityDetail = ({ route, navigation }: IPropsRoute) => {
  const { data, refetch } = useQuery<Pick<Query, 'fetchBoard'>, QueryFetchBoardArgs>(FETCH_BOARD, {
    variables: { boardId: route.params?.boardId },
  });
  const { data: commentData } = useQuery<
    Pick<Query, 'fetchBoardComments'>,
    QueryFetchBoardCommentsArgs
  >(FETCH_BOARD_COMMENTS, { variables: { boardId: route.params?.boardId } });
  const [likeBoard] = useMutation<Pick<Mutation, 'likeBoard'>, MutationLikeBoardArgs>(LIKE_BOARD);
  const commuCollection = firestore().collection('community');
  const docRef = commuCollection.doc(route.params?.boardId);
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
    commuCollection
      .doc(route.params?.boardId)
      .get()
      .then((doc) => setFiredata({ ...doc.data() }));
  }, [route]);

  useEffect(() => {
    docRef.update({ views: firedata?.views + 1 });
  }, [firedata]);

  const onPressLike = async () => {
    await likeBoard({ variables: { boardId: route.params?.boardId } });
    refetch({ boardId: route.params?.boardId });
  };

  return (
    <>
      <CommunityDetailUI
        data={data}
        firedata={firedata}
        onPressLike={onPressLike}
        route={route}
        commentData={commentData}
      />
    </>
  );
};

export default CommunityDetail;
