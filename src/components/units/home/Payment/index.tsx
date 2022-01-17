import React from 'react';
import IMP from 'iamport-react-native';
import Loading from '../../../commons/import/Loading';
import { getUserCode } from '../../../../commons/libraries/utils';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
  home: { screen: string };
  community: { screen: string };
  news: undefined;
  mypage: undefined;
  PaymentResult: { screen: string };
};

type ProfileScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'home'>;

type Props = {
  navigation: ProfileScreenNavigationProp;
  route: any;
};

function Payment({ route, navigation }: Props) {
  const params = route.params?.params;
  const userCode = getUserCode(params!.pg);

  return (
    <IMP.Payment
      userCode={userCode}
      loading={<Loading />}
      data={params!}
      callback={async (response) => {
        navigation.replace('PaymentResult', response);
      }}
    />
  );
}

export default Payment;
