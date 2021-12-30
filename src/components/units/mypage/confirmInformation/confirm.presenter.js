import * as C from './confirm.styles';
import * as React from 'react';
import { ScrollView } from 'react-native';

const ConfirmInformationUI = () => {
  return (
    <ScrollView>
      <C.Wrapper>
        <C.Container>
          <C.SettingIcon source={require('GoodNeighobrs/public/images/Settings.png')} />
          <C.ButtonContainer>
            <C.SearchIcon source={require('GoodNeighobrs/public/images/Search.png')} />
            <C.BellIcon source={require('GoodNeighobrs/public/images/Bell.png')} />
          </C.ButtonContainer>
        </C.Container>
        <C.ProfileContainer>
          <C.ProfileCircle></C.ProfileCircle>
          <C.ProfileIcon source={require('GoodNeighobrs/public/images/profile.png')} />
          <C.PencilContainer></C.PencilContainer>
          <C.PencilIcon source={require('GoodNeighobrs/public/images/pencil.png')} />
          <C.ProfileText>Name</C.ProfileText>
        </C.ProfileContainer>
        <C.BodyNav>
          <C.BodyNavButton>개인정보확인/변경</C.BodyNavButton>
          <C.BodyNavButton>스탬프</C.BodyNavButton>
        </C.BodyNav>
        <C.Body>
          <C.BodyTitle>나의 활동 내역</C.BodyTitle>
          <C.ActivityContain>
            <C.ActivityList>
              <C.ActivityTitle>커뮤니티 글 목록</C.ActivityTitle>
              <C.Arrow source={require('GoodNeighobrs/public/images/arrow.png')} />
            </C.ActivityList>
            <C.ActivityList>
              <C.ActivityTitle>후원이력</C.ActivityTitle>
              <C.SupportContainer>
                <C.Number>2개</C.Number>
                <C.Arrow source={require('GoodNeighobrs/public/images/arrow.png')} />
              </C.SupportContainer>
            </C.ActivityList>
            <C.ActivityList>
              <C.ActivityTitle>관심 카테고리 설정</C.ActivityTitle>
              <C.Arrow source={require('GoodNeighobrs/public/images/arrow.png')} />
            </C.ActivityList>
          </C.ActivityContain>
        </C.Body>
        <C.Body>
          <C.AboutTitle>About 굿네이버스</C.AboutTitle>
          <C.AboutContain>
            <C.ActivityList>
              <C.ActivityTitle>회사소개</C.ActivityTitle>
              <C.Arrow source={require('GoodNeighobrs/public/images/arrow.png')} />
            </C.ActivityList>
            <C.ActivityList>
              <C.ActivityTitle>공지사항</C.ActivityTitle>
              <C.Arrow source={require('GoodNeighobrs/public/images/arrow.png')} />
            </C.ActivityList>
          </C.AboutContain>
        </C.Body>
        <C.PhoneNumber>1234-5678</C.PhoneNumber>
        <C.FooterNav>
          <C.FooterContain>
            <C.FooterButton source={require('GoodNeighobrs/public/images/footerButton.png')} />
            <C.FooterText>홈</C.FooterText>
          </C.FooterContain>
          <C.FooterContain>
            <C.FooterButton source={require('GoodNeighobrs/public/images/footerButton.png')} />
            <C.FooterText>커뮤니티</C.FooterText>
          </C.FooterContain>
          <C.FooterContain>
            <C.FooterButton source={require('GoodNeighobrs/public/images/footerButton.png')} />
            <C.FooterText>소식</C.FooterText>
          </C.FooterContain>
          <C.FooterContain>
            <C.FooterButton source={require('GoodNeighobrs/public/images/footerButton.png')} />
            <C.FooterText>마이페이지</C.FooterText>
          </C.FooterContain>
        </C.FooterNav>
        <C.RectangleContainer>
          <C.Rectangle></C.Rectangle>
        </C.RectangleContainer>
        <C.LogoutButton>
          <C.Logout>로그아웃</C.Logout>
        </C.LogoutButton>
      </C.Wrapper>
    </ScrollView>
  );
};

export default ConfirmInformationUI;
