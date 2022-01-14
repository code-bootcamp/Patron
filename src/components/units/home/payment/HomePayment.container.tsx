import * as React from 'react';
import HomePaymentUI from './HomePayment.presenter';
import { useQuery } from '@apollo/client';
import { FETCH_USEDITEM } from './HomePayment.queries';

export default function HomePayment({ route }) {
  // const [createPointTransactionOfLoading] = useMutation(CREATE_POINT_TRANSACTION_OF_LOADING);

  const { data } = useQuery(FETCH_USEDITEM, {
    variables: {
      useditemId: route.params.useditemId,
    },
  });

  const [price, setPrice] = React.useState('');

  function onChangePrice(event) {
    setPrice(event.nativeEvent.text);
  }

  function onChangePay() {}
  return (
    <HomePaymentUI
      data={data}
      onChangePrice={onChangePrice}
      onChangePay={onChangePay}
      price={price}
    />
  );
}
