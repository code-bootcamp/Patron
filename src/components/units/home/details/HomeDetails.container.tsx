import * as React from 'react';
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
  const { data } = useQuery(FETCH_USEDITEM, {
    variables: {
      useditemId: route.params.useditemId,
    },
  });

  return <HomeDetailsUI route={route} data={data} />;
}
