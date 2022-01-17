import * as React from 'react';
import HomePaymentUI from './HomePayment.presenter';
import { useQuery } from '@apollo/client';
import { FETCH_USEDITEM } from './HomePayment.queries';
import { IMPConst } from 'iamport-react-native';
import { NativeSyntheticEvent, TextInputChangeEventData } from 'react-native';
import { IPropNavigation } from './HomePayment.types';

export default function HomePayment({ route, navigation }: IPropNavigation) {
  const { data } = useQuery(FETCH_USEDITEM, {
    variables: {
      useditemId: route.params.useditemId,
    },
  });

  const option = [5000, 10000, 50000, 100000];
  const [price, setPrice] = React.useState<number>(0);

  const onPressOption = (el: number) => () => {
    setPrice((prev) => prev + el);
  };

  function onChangePrice(event: NativeSyntheticEvent<TextInputChangeEventData>) {
    setPrice(Number(event.nativeEvent.text));
  }
  const merchantUid = `mid_${new Date().getTime()}`;

  const onPressPay = () => {
    const data = {
      params: {
        pg: 'html5_inicis',
        pay_method: 'card',
        merchant_uid: merchantUid,
        name: '굿네이버스후원',
        amount: price,
        app_scheme: 'exampleforrn',
        buyer_name: '김이웃',
        buyer_tel: '010-1234-5678',
        buyer_email: '123@123.com',
        m_redirect_url: IMPConst.M_REDIRECT_URL,
      },
    };

    navigation.navigate('Payment', data);
  };

  return (
    <HomePaymentUI
      data={data}
      onChangePrice={onChangePrice}
      onPressPay={onPressPay}
      onPressOption={onPressOption}
      price={price}
      option={option}
    />
  );
}
