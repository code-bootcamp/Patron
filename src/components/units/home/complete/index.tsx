import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled from '@emotion/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
  home: { screen: string };
  community: { screen: string };
  news: undefined;
  mypage: undefined;
};

type ProfileScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'home'>;

type IPropNavigation = {
  navigation: ProfileScreenNavigationProp;
};

function PaymentResult({ route, navigation }: IPropNavigation) {
  const imp_success = route.params?.imp_success;
  const success = route.params?.success;
  // const imp_uid = route.params?.imp_uid;
  // const merchant_uid = route.params?.merchant_uid;
  // const error_msg = route.params?.error_msg;

  // [WARNING: 이해를 돕기 위한 것일 뿐, imp_success 또는 success 파라미터로 결제 성공 여부를 장담할 수 없습니다.]
  // 아임포트 서버로 결제내역 조회(GET /payments/${imp_uid})를 통해 그 응답(status)에 따라 결제 성공 여부를 판단하세요.
  const isSuccess = !(
    imp_success === 'false' ||
    imp_success === false ||
    success === 'false' ||
    success === false
  );

  const Wrapper = styled.Pressable`
    align-items: center;
    justify-content: center;
  `;

  const ImgWrapper = styled.View`
    height: 88px;
    width: 88px;
    border-radius: 100px;
    background-color: #e9eaec; ;
  `;

  const TextWrapper = styled.View`
    padding-top: 10px;
    flex-direction: row;
  `;
  const KeywordColor = styled.Text`
    color: #448800;
    font-size: 22px;
    font-weight: 700;
  `;
  const CompleteInfo = styled.Text`
    font-size: 22px;
    font-weight: 700;
    color: #000;
  `;

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#fff',
        alignItems: 'center',
      }}
    >
      {isSuccess && (
        <Wrapper onPress={() => navigation.navigate('home')}>
          <ImgWrapper />
          <TextWrapper>
            <KeywordColor>번째 </KeywordColor>
            <CompleteInfo>후원자에요!</CompleteInfo>
          </TextWrapper>
        </Wrapper>
      )}
    </SafeAreaView>
  );
}

export default PaymentResult;
