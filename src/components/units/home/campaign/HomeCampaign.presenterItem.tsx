import * as React from 'react';
import { gql, useQuery } from '@apollo/client';
import HomeCampaignUI from './HomeCampaign.presenter';

const FETCH_USEDITEMS = gql`
  query fetchUseditems($isSoldout: Boolean, $search: String, $page: Int) {
    fetchUseditems(isSoldout: $isSoldout, search: $search, page: $page) {
      _id
      name
      remarks
      contents
      tags
      pickedCount
    }
  }
`;

export default function HomeCampaignUIItem() {
  const { data } = useQuery(FETCH_USEDITEMS, {
    variables: {
      search: '캠페인',
    },
  });

  return (
    <>
      {data?.fetchUseditems.map((el) => (
        <HomeCampaignUI key={el._id} el={el} />
      ))}
    </>
  );
}
