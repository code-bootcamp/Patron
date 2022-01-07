import { useQuery } from '@apollo/client';
import React from 'react';
import { Query, QueryFetchBoardArgs } from '../../../../commons/types/generated/types';
import { IPropsRoute } from '../list/communityList.types';
import CommunityDetailUI from './communityDetail.presenter';
import { FETCH_BOARD } from './communityDetail.queries';

const CommunityDetail = ({ route }: IPropsRoute) => {
  const { data } = useQuery<Pick<Query, 'fetchBoard'>, QueryFetchBoardArgs>(FETCH_BOARD, {
    variables: { boardId: route.params?.boardId },
  });
  // const commuCollection = firestore().collection('community');
  // const [firedata, setFiredata] = useState({});

  // useEffect(() => {
  //   const aaa = commuCollection
  //     .doc(route.params.boardId)
  //     .get()
  //     .then((doc) => {
  //       console.log(doc.data());
  //     });
  //   // console.log(aaa);
  // }, []);

  console.log(data);
  return <CommunityDetailUI data={data} />;
};

export default CommunityDetail;
