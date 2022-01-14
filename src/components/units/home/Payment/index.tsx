import React from 'react';
import IMP from 'iamport-react-native';
import Loading from '../../../commons/import/Loading';
import { getUserCode } from '../../../../commons/libraries/utils';

function Payment({ route, navigation }) {
  const params = route.params?.params;
  const userCode = getUserCode(params!.pg);
  return (
    <IMP.Payment
      userCode={userCode}
      loading={<Loading />}
      data={params!}
      callback={(response) => navigation.replace('PaymentResult', response)}
    />
  );
}

export default Payment;
