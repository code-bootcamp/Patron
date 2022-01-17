import { useQuery } from '@apollo/client';
import React from 'react';
import { Query } from '../../../../commons/types/generated/types';
import ConfirmationUI from './confirmation.presenter';
import { FETCH_USER_LOGGED_IN } from './confirmation.queries';
import { INavigation } from './confirmation.types';
import { withAuth } from '../../../commons/withAuth/withAuth';

const Confirmation = ({ navigation }: INavigation) => {
  const { data } = useQuery<Pick<Query, 'fetchUserLoggedIn'>>(FETCH_USER_LOGGED_IN);

  return <ConfirmationUI navigation={navigation} data={data} />;
};
export default withAuth(Confirmation);
