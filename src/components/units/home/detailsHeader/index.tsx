import styled from '@emotion/native';
import * as React from 'react';
import { Text } from 'react-native';

export default function DetailsHeader() {
  const Top = styled.View`
    flex: 2;
    width: 100%;
    height: 100%;
  `;

  const TopImgWrapper = styled.View``;

  const Img = styled.Image`
    width: 100%;
    height: 100%;
    position: relative;
  `;

  const TopOverWrapper = styled.View`
    position: absolute;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    padding: 20px 20px 20px 20px;
  `;

  const IconBtns = styled.View`
    flex-direction: row-reverse;
  `;

  const Info = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
  `;

  const InfoDetails = styled.View``;

  const DetailTitle = styled.Text`
    color: white;
    font-weight: 700;
  `;

  const DetailRemark = styled.Text`
    color: rgba(255, 255, 255, 0.7);
  `;

  const InfoPeriod = styled.View``;

  const PeriodTxt = styled.Text`
    color: rgba(255, 255, 255, 0.7);
    font-size: 10px;
  `;

  return (
    <>
      <Top>
        <TopImgWrapper>
          <Img source={require('../../../../../public/images/home/detail_top01.png')} />
        </TopImgWrapper>
        <TopOverWrapper>
          <IconBtns>
            <Text>버튼</Text>
            <Text>버튼</Text>
          </IconBtns>
          <Info>
            <InfoDetails>
              <DetailTitle>Im Your Pen</DetailTitle>
              <DetailRemark>재능 나눔 번역 자원봉사 모임</DetailRemark>
            </InfoDetails>
            <InfoPeriod>
              <PeriodTxt>기간 12.03 - 12.28</PeriodTxt>
            </InfoPeriod>
          </Info>
        </TopOverWrapper>
      </Top>
    </>
  );
}
