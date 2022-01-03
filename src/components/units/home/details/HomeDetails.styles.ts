import styled from '@emotion/native';

export const Wrapper = styled.View`
  width: 100%;
  height: 100%;
`;

export const Top = styled.View`
  flex: 1;
  /* width: 100%;
  height: 100%; */
`;

export const TopImgWrapper = styled.View``;

export const Img = styled.Image`
  /* object-fit: cover; */
  width: 100%;
  height: 100%;
  position: relative;
`;

export const TopOverWrapper = styled.View`
  position: absolute;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  padding: 20px 20px 20px 20px;
`;

export const IconBtns = styled.View`
  flex-direction: row-reverse;
`;

export const Info = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
`;

export const InfoDetails = styled.View`
  /* background-color: green; */
`;

export const InfoDetailTitle = styled.Text`
  color: white;
  font-weight: 700;
  font-size: 22px;
`;

export const DetailRemark = styled.Text`
  color: rgba(255, 255, 255, 0.7);
`;

export const InfoPeriod = styled.View``;

export const PeriodTxt = styled.Text`
  color: rgba(255, 255, 255, 0.7);
  font-size: 10px;
`;

export const Bottom = styled.View`
  flex: 2;
  width: 100%;
  height: 100%;
`;

export const BottomSummaryWrapper = styled.View`
  padding: 30px 20px 30px 20px;
`;

export const SummaryContent = styled.Text`
  color: #000;
`;

export const Tags = styled.View`
  flex-direction: row;
`;

export const Progress = styled.View``;

export const BottomDetailsWrapper = styled.View`
  flex: 1;
  margin-top: 20px;
  padding: 30px 20px 30px 20px;
`;

export const DetailTitle = styled.Text`
  color: #000;
`;

export const DetailContent = styled.Text`
  color: #000;
`;

export const BottomSupporters = styled.View`
  width: 100%;
  /* background-color: mediumpurple; */
  flex: 0.5;
  padding: 15px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const SupportersTxt = styled.Text`
  color: rgba(0, 0, 0, 0.7);
`;

export const SupportersNums = styled.Text`
  font-weight: 700;
  color: #000;
`;
export const BottomRecommendWrapper = styled.View`
  background-color: mintcream;
  flex: 1;
`;
