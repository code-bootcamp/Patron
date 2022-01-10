import { useQuery } from '@apollo/client';
import React from 'react';
import ConfirmationUI from './confirmation.presenter';
import { FETCH_USER_LOGGED_IN } from './confirmation.queries';

const Confirmation = ({ navigation }: any) => {
  const { data } = useQuery(FETCH_USER_LOGGED_IN);
  return <ConfirmationUI navigation={navigation} data={data} />;
};
export default Confirmation;
