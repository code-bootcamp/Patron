import * as React from 'react';
import HomeCampaignListUI from './HomeCampaignList.presenter';
import { gql, useQuery } from '@apollo/client';

const FETCH_USEDITEMS = gql`
  query fetchUseditems($isSoldout: Boolean, $search: String, $page: Int) {
    fetchUseditems(isSoldout: $isSoldout, search: $search, page: $page) {
      _id
      name
      remarks
      contents
      tags
      pickedCount
      images
    }
  }
`;

export default function HomeCampaignList() {
  const { data } = useQuery(FETCH_USEDITEMS, {
    variables: {
      search: '캠페인',
    },
  });
  return (
    <>
      <HomeCampaignListUI data={data} />
    </>
  );
}
