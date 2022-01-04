import React from 'react';
import * as S from './communityDetail.styles';
import * as R from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import WhiteTag from '../../../commons/tags/whitetag';

const CommunityDetailUI = () => {
  return (
    <>
      <S.Wrap>
        <S.DetailHeader>
          <R.View>
            <S.HeaderTitle>저와 함께 여행중인 데르가 어느덧 성인이 되었어요!</S.HeaderTitle>
            <S.HeaderFooter>
              <S.HeaderFooterText>김이웃7783</S.HeaderFooterText>
              <S.FooterInner>
                <S.HeaderFooterText>35분전</S.HeaderFooterText>
                <Icon name="ellipse" color="white" size={2} style={{ padding: 5 }} />
                <S.HeaderFooterText>조회 999</S.HeaderFooterText>
              </S.FooterInner>
            </S.HeaderFooter>
          </R.View>
        </S.DetailHeader>
        <S.DetailBody>
          <S.DetailTitle>“ 함께 발을 맞춰 여행한지 4년째, 데르에게 온 변화 ”</S.DetailTitle>
          <S.DetailImg></S.DetailImg>
          <S.DetailContents>
            데르와 함께 여행중인 20대 여자입니다. 굿네이버스에서 정기후원한지 어느덧 4년이
            되어가네요. 처음 데르를 만날 땐 두려움이 앞섰어요. 자라온 문화, 언어 등이 다른데 이웃이
            될 수 있을까? 내가 과연 이 아이의 힘이 될 수 있을까 하며 두려움에 시작했어요. 하지만
            데르가 성장해가는 모습을 지켜보며 꾸준한 소식을 받다 보니 `아 나도 누군가에게 힘을 줄 수
            있구나` 하는 행복함 을 느꼈답니다. 어느덧 시간이 흘러 데르가 성인이 되었다는 소식을
            사진과 함께 전달받았습니다. 이 기쁨은 말로 표현하지 못하겠더라 고요. 데르야! 당장은
            만나지 못하더라도 몇 년 내로 꼭 만나자 너를 항상 응원하고 있어!
          </S.DetailContents>
          <S.HashWrap>
            <WhiteTag text="결연 아동 후원" fontSize="10px" />
            <WhiteTag text="정기후원" fontSize="10px" />
            <WhiteTag text="같이여행" fontSize="10px" />
          </S.HashWrap>
          <R.View>
            <S.PicTitle>사진</S.PicTitle>
            <S.PicWrap>
              <S.BigPic></S.BigPic>
              <S.SmaillPicWrap>
                <S.SmallPic></S.SmallPic>
                <S.SmallPic></S.SmallPic>
                <S.SmallPic></S.SmallPic>
                <S.SmallPic></S.SmallPic>
              </S.SmaillPicWrap>
            </S.PicWrap>
          </R.View>
        </S.DetailBody>
        <S.DetailFooter></S.DetailFooter>
      </S.Wrap>
    </>
  );
};

export default CommunityDetailUI;
