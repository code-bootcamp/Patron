import CommunitySearchUI from './communitySearch.presenter';
import React from 'react';
import { useQuery } from '@apollo/client';
import { FETCH_BOARDS, FETCH_BOARDS_BEST, FETCH_USER_LOGGED_IN } from './communitySearch.queries';
import { Query, QueryFetchBoardsArgs } from '../../../../commons/types/generated/types';

const CommunitySearch = ({ navigation, route }) => {
  const { data } = useQuery<Pick<Query, 'fetchBoards'>, QueryFetchBoardsArgs>(FETCH_BOARDS, {
    variables: { search: route.params?.search },
  });
  const { data: bestdata } = useQuery<Pick<Query, 'fetchBoardsOfTheBest'>>(FETCH_BOARDS_BEST);
  const { data: logindata } = useQuery<Pick<Query, 'fetchUserLoggedIn'>>(FETCH_USER_LOGGED_IN);

  const getDetail = (id: string) => () => {
    navigation.navigate('community', {
      screen: 'detail',
      params: { boardId: id },
    });
  };
  return (
    <CommunitySearchUI
      data={data}
      bestdata={bestdata}
      logindata={logindata}
      getDetail={getDetail}
      route={route}
    />
  );
};

export default CommunitySearch;
