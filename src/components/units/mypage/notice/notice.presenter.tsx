import { ScrollView } from 'react-native';
import * as N from './notice.styles';
import * as React from 'react';

const NoticeUI = () => {
  return (
    <N.Wrapper>
      <N.Header>
        <N.Title>공지사항</N.Title>
      </N.Header>
      <N.Content>
        <ScrollView style={{ backgroundColor: 'pink' }}>
          <N.Line style={{ borderBottomWidth: 1, borderBottomColor: '#E5E5E5' }} />
          <N.InnerWrapper>
            <N.Notice>
              이번 주 굿네이버스에 업데이트된 기부리스트가 있습니다! 지금 함께 만나보세요!
            </N.Notice>
          </N.InnerWrapper>
          <N.Line style={{ borderBottomWidth: 1, borderBottomColor: '#E5E5E5' }} />
          <N.InnerWrapper>
            <N.Notice>사회복지법인 굿네이버스 개인정보처리방침 개정 안내</N.Notice>
          </N.InnerWrapper>
          <N.Line style={{ borderBottomWidth: 1, borderBottomColor: '#E5E5E5' }} />
          <N.InnerWrapper>
            <N.Notice>건강한 스마트폰 사용을 위한 회원참여 활동 안내</N.Notice>
          </N.InnerWrapper>
          <N.Line style={{ borderBottomWidth: 1, borderBottomColor: '#E5E5E5' }} />
          <N.InnerWrapper>
            <N.Notice>2021 아동재난대응 포럼, 포스트 코로나19-아동, 다시 일상으로</N.Notice>
          </N.InnerWrapper>
          <N.Line style={{ borderBottomWidth: 1, borderBottomColor: '#E5E5E5' }} />
          <N.InnerWrapper>
            <N.Notice>세상을 위한 좋은 변화, 30년의 발자취, 온라인 세미나 진행</N.Notice>
          </N.InnerWrapper>
          <N.Line style={{ borderBottomWidth: 1, borderBottomColor: '#E5E5E5' }} />
          <N.InnerWrapper>
            <N.Notice>아동학대 방지사업 예산의 보건복지부 일반회계 일원화를 환영한다.</N.Notice>
          </N.InnerWrapper>
          <N.Line style={{ borderBottomWidth: 1, borderBottomColor: '#E5E5E5' }} />
          <N.InnerWrapper>
            <N.Notice>디지털: 미디어 환경에 대한 아동의 목소리를 들려주세요</N.Notice>
          </N.InnerWrapper>
          <N.Line style={{ borderBottomWidth: 1, borderBottomColor: '#E5E5E5' }} />
          <N.InnerWrapper>
            <N.Notice>2022년 기부금품 모집완료 및 사용내역 보고</N.Notice>
          </N.InnerWrapper>
          <N.Line style={{ borderBottomWidth: 1, borderBottomColor: '#E5E5E5' }} />
          <N.InnerWrapper>
            <N.Notice>외국인 아동 출생등록제 도입 추진을 위한 법무부 결정을 환영한다.</N.Notice>
          </N.InnerWrapper>
          <N.Line style={{ borderBottomWidth: 1, borderBottomColor: '#E5E5E5' }} />
          <N.InnerWrapper>
            <N.Notice>2022년 굿네이버스 콜센터 위탁 운영 업체(아웃바운드) 입찰 공고</N.Notice>
          </N.InnerWrapper>
          <N.Line style={{ borderBottomWidth: 1, borderBottomColor: '#E5E5E5' }} />
          <N.InnerWrapper>
            <N.Notice>코로나 19 해외 긴급구호 지원 현황</N.Notice>
          </N.InnerWrapper>
        </ScrollView>
      </N.Content>
    </N.Wrapper>
  );
};
export default NoticeUI;
