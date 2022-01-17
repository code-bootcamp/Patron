import * as C from './personalInformation.styles';
import * as R from 'react-native';
import * as React from 'react';
import GreenButton from '../../../commons/buttons/greenbutton';
import WhiteButton from '../../../commons/buttons/whitebutton';
import Icon from 'react-native-vector-icons/Ionicons';
import { ScrollView } from 'react-native';
import { IPropsPersonalinformationUI } from './personalinformation.types';

const PersonalInformationUI = (props: IPropsPersonalinformationUI) => {
  return (
    <ScrollView>
      <C.WholeWrapper>
        <C.HeaderWrapper>
          <C.Header>내정보</C.Header>
          <C.IconWrapper>
            <Icon
              name="settings-outline"
              size={25}
              style={{ paddingRight: 10 }}
              onPress={() => props.navigation.navigate('mypage', { screen: 'setting' })}
            />
          </C.IconWrapper>
        </C.HeaderWrapper>
        <C.ProfileWrapper>
          <Icon name="person-circle" size={100} />
          <C.EditIcon>
            <Icon
              name="create-outline"
              size={25}
              style={{ position: 'absolute', top: 6, right: 6, color: '#ffffff' }}
              onPress={() => props.navigation.navigate('mypage', { screen: 'editprofile' })}
            />
          </C.EditIcon>
          <C.Name>{props.data?.fetchUserLoggedIn.name}</C.Name>
        </C.ProfileWrapper>
        <C.TabWrapper></C.TabWrapper>
        <C.ActivityWrapper>
          <C.ActivityTitle>나의 활동 내역</C.ActivityTitle>
          <R.View style={{ borderBottomWidth: 2 }} />
          <C.ActivityCommunity
            onPress={() => props.navigation.navigate('mypage', { screen: 'post' })}
          >
            커뮤니티 글 목록
          </C.ActivityCommunity>
          <R.View style={{ borderBottomWidth: 1, borderBottomColor: '#E5E5E5' }} />
          <C.ActivityPatron>후원이력</C.ActivityPatron>
          <R.View style={{ borderBottomWidth: 1, borderBottomColor: '#E5E5E5' }} />
          <C.ActivityCategories>관심카테고리 설정</C.ActivityCategories>
          <R.View style={{ borderBottomWidth: 1, borderBottomColor: '#E5E5E5' }} />
          <C.ActivityCategories
            onPress={() => props.navigation.navigate('mypage', { screen: 'stamp' })}
          >
            스탬프
          </C.ActivityCategories>
          <R.View style={{ borderBottomWidth: 1, borderBottomColor: '#E5E5E5' }} />
        </C.ActivityWrapper>
        <C.AboutWrapper>
          <C.AboutTitle>About 굿네이버스</C.AboutTitle>
          <R.View style={{ borderBottomWidth: 2 }} />
          <C.AboutCompany>회사소개</C.AboutCompany>
          <R.View style={{ borderBottomWidth: 1, borderBottomColor: '#E5E5E5' }} />
          <C.AboutNotice onPress={() => props.navigation.navigate('mypage', { screen: 'notice' })}>
            공지사항
          </C.AboutNotice>
          <R.View style={{ borderBottomWidth: 1, borderBottomColor: '#E5E5E5' }} />
        </C.AboutWrapper>
        <C.InfoWrapper>
          <R.View style={{ borderBottomWidth: 2 }} />
          <C.InfoPhoneNumber>02-6717-4000</C.InfoPhoneNumber>
          <C.InfoSite>www.Goodneighbors</C.InfoSite>
          <R.Text>AM 10:00 ~ PM 17:00(점심시간 12:00 ~ 14:00)</R.Text>
        </C.InfoWrapper>
        <C.ButtonWrapper>
          <C.TopButtons>
            <GreenButton text="자주 묻는 질문" width="48%" height="105%" borderRadius={4} />
            <GreenButton text="1:1문의" width="48%" borderRadius={4} />
          </C.TopButtons>
          <WhiteButton
            text="로그아웃"
            borderRadius={4}
            height="80%"
            onPressBtn={() => props.navigation.navigate('login')}
          />
        </C.ButtonWrapper>
      </C.WholeWrapper>
    </ScrollView>
  );
};

export default PersonalInformationUI;
