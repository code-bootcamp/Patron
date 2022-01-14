import * as React from 'react';
import * as E from './HomePayment.styles';
import { Image } from 'react-native';
import GreenButton from '../../../commons/buttons/greenbutton';

export default function HomePaymentUI(props) {
  return (
    <>
      <E.Wrapper>
        <E.ChildrenList>
          <E.ChildImgWrapper>
            <Image
              style={{ width: 86, height: 86, borderRadius: 8 }}
              source={{
                uri: `https://${props.data?.fetchUseditem.images[0]}`,
              }}
            />
          </E.ChildImgWrapper>
          <E.ChildDetails>
            <E.ChildAbout>
              <E.ChildName>{props.data?.fetchUseditem.name.split('/')[1]}</E.ChildName>
              <E.ChildBio>{props.data?.fetchUseditem.remarks}</E.ChildBio>
            </E.ChildAbout>
          </E.ChildDetails>
        </E.ChildrenList>
        <E.InputWrapper>
          <E.BottomColor>
            <E.EnterPrice onChange={props.onChangePrice} />
          </E.BottomColor>
        </E.InputWrapper>
        <E.TotalWrapper>
          <E.TotalTitle>총 후원금액</E.TotalTitle>
          <E.TotalPrice>{Number(props.price).toLocaleString()} 원</E.TotalPrice>
        </E.TotalWrapper>
        <E.Agree>위 내용을 확인하였으며 후원에 동의합니다.</E.Agree>
        <GreenButton text={'후원하기'} height={'52px'} onPressBtn={props.onChangePay} />
      </E.Wrapper>
    </>
  );
}
