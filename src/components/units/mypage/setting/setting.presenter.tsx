import * as S from './setting.styles';
import { View, Switch, Button } from 'react-native';
import React, { useState } from 'react';
import Modal from 'react-native-modal';
import { ScrollView } from 'react-native-gesture-handler';

const SettingUI = (props: any) => {
  const [modalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <S.WholeWrapper>
      <S.HeaderWrapper>
        <S.Setting>설정</S.Setting>
      </S.HeaderWrapper>
      <S.UsageWrapper>
        <S.Title>이용안내</S.Title>
        <View style={{ borderBottomWidth: 2 }} />
        <S.InnerContents onPress={toggleModal}>이용약관</S.InnerContents>
        <Modal isVisible={modalVisible} backdropOpacity={0.5}>
          <S.TermsModal style={{ flex: 1 }}>
            <ScrollView>
              <S.Terms>
                제1조(목적) 본 회원약관은 AcAT(이하 갑이라 한다)이 운영하는 인터넷관련 서비스(이하
                서비스이라 한다)를 이용함에 있어 관리자와 이용자(이하 회원이라 한다)의 권리, 의무 및
                책임사항을 규정함을 목적으로 한다. 제2조 (약관의 효력) 1.본 약관은 갑에 회원 가입할
                시 회원들에게 통지함으로써 효력을 발생합니다. 2. 갑은 이 약관의 내용을 변경할 수
                있으며, 변경된 약관은 제1항과 같은 방법으로 공지 또는 통지함으로써 효력을
                발생합니다. 3.약관의 변경사항 및 내용은 갑의 홈페이지에 게시하는 방법으로
                공시합니다. 제3조 (약관 이외의 준칙) 이 약관에 명시되지 않은 사항이 전기 통신
                기본법, 전기통신 사업법, 기타 관련 법령에 규정되어 있는 경우 그 규정에 따릅니다.
                제4조 (이용계약의 체결) 회원 가입 시 회원 약관 밑에 있는 동의버튼을 누르면 약관에
                동의하여 이 계약이 체결된 것으로 간주한다. 제5조 (용어의 정의) 이 약관에서 사용하는
                용어의 정의는 다음과 같습니다. 1.회원: 갑과 서비스 이용에 관한 계약을 체결한 자
                2.아이디(ID): 회원 식별과 회원의 서비스 이용을 위하여 회원이 선정하고 갑이 직접
                승인하는 문자와 숫자의 조합 3.비밀번호: 회원이 통신상의 자신의 비밀을 보호하기 위해
                선정한 문자와 숫자의 조합제6조 (이용신청) 1.회원 가입은 온라인으로 가입신청 양식에
                기록하여 갑에 제출함으로써 이용신청을 할 수 있습니다. 2.가입희망 회원은 반드시
                자신의 본명 및 주민등록번호로 이용신청을 하여야 하며, 1개의 ID만 신청을 할 수
                있습니다. 제7조 (회원가입의 승낙) 갑의 회원 가입 신청 양식에 가입 희망 회원이
                인터넷으로 제6조와 같이 신청하면 갑은 바로 가입을 승인하여 서비스를 이용할 수 있다.
              </S.Terms>
              <Button title="약관에 동의합니다." onPress={toggleModal}></Button>
            </ScrollView>
          </S.TermsModal>
        </Modal>
        <View style={{ borderBottomWidth: 1, borderBottomColor: '#E5E5E5' }} />
        <S.InnerContents onPress={toggleModal}>개인정보처리방침</S.InnerContents>
        <Modal isVisible={modalVisible} backdropOpacity={0.5}>
          <S.TermsModal style={{ flex: 1 }}>
            <ScrollView>
              <S.Terms>
                제1조(개인정보의 처리목적) ① 예술위원회는 개인정보파일별 목적 이외의 용도로는
                이용되지 않으며, 이용 목적이 변경되는 경우에는 「개인정보보호법」(이하 “법령”이라
                한다)에 따라 고지 및 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다. ②
                예술위원회가 법령에 따라 등록·공개하는 개인정보파일의 처리목적은 다음의과 같습니다.
                개인정보처리 항목, 목적 및 보유기간 보기 ※ 좀더 상세한 예술위원회의 개인정보파일
                등록사항 공개는 개인정보보호위원회 개인정보보호 종합지원 포털(www.privacy.go.kr) →
                개인정보민원 → 개인정보열람 등 요구 → 개인정보파일 목록검색 → 기관명에
                “한국문화예술위원회”입력후 조회를 활용해주시기 바랍니다. ③ 예술위원회는
                정보주체로부터의 직접 개인정보 수집을 원칙으로 합니다. 다만, 제3자로부터 개인정보를
                제공받을 때도 있습니다(SNS 간편 로그인 서비스 제공 등). 이 경우, 적법한 개인정보
                제공인지 확인하는 과정을 거치고 있으며, 정보주체의 요구가 있으면 개인정보의 수집
                출처와 처리 목적을 알려드리겠습니다. 제2조(처리하는 개인정보 항목) 예술위원회는
                법령의 규정과 정보주체의 동의에 의해서만 개인정보를 수집·보유합니다. 예술위원회가
                법령의 규정에 근거하여 수집·보유하고 있는 주요 개인정보파일은 제1조 개인정보처리
                항목, 목적 및 보유기간과 같습니다. 제3조(개인정보의 처리 및 보유기간) 예술위원회는
                법령에 따른 개인정보 보유·이용기간 또는 정보주체로부터 개인정보를 수집시에 동의받는
                범위내에서 개인정보를 처리 및 보유하며 보유기간은 제1조 개인정보처리 항목, 목적 및
                보유기간과 같습니다.
              </S.Terms>
              <Button title="정보처리방침에 동의합니다." onPress={toggleModal}></Button>
            </ScrollView>
          </S.TermsModal>
        </Modal>
        <View style={{ borderBottomWidth: 1, borderBottomColor: '#E5E5E5' }} />
      </S.UsageWrapper>
      <S.AlarmWrapper>
        <S.Title>알림</S.Title>
        <View style={{ borderBottomWidth: 2 }} />
        <S.SwitchWrapper>
          <S.InnerContents>마케팅 수신 동의</S.InnerContents>
          <Switch
            trackColor={{ false: '#767577', true: '#81b0ff' }}
            thumbColor={props.isEnabledFirst ? '#f5dd4b' : '#f4f3f4'}
            onValueChange={props.toggleSwitchFirst}
            value={props.isEnabledFirst}
          />
        </S.SwitchWrapper>
        <View style={{ borderBottomWidth: 1, borderBottomColor: '#E5E5E5' }} />
        <S.SwitchWrapper>
          <S.InnerContents>알림 및 소리</S.InnerContents>
          <S.NonSwitch
            trackColor={{ false: '#767577', true: '#81b0ff' }}
            thumbColor={props.isEnableSecond ? '#f5dd4b' : '#f4f3f4'}
            onValueChange={props.toggleSwitchSecond}
            value={props.isEnableSecond}
          />
        </S.SwitchWrapper>
        <View style={{ borderBottomWidth: 1, borderBottomColor: '#E5E5E5' }} />
      </S.AlarmWrapper>
      <S.EtcWrapper>
        <S.Title>기타</S.Title>
        <View style={{ borderBottomWidth: 2 }} />
        <S.Language>
          <S.InnerContents>언어설정</S.InnerContents>
          <S.InnerContents>한국어</S.InnerContents>
        </S.Language>
        <View style={{ borderBottomWidth: 1, borderBottomColor: '#E5E5E5' }} />
        <S.Version>
          <S.InnerContents>버전 정보</S.InnerContents>
          <S.InnerContents>1.1.3</S.InnerContents>
        </S.Version>
        <View style={{ borderBottomWidth: 1, borderBottomColor: '#E5E5E5' }} />
        <S.InnerContents onPress={() => props.navigation.navigate()}>탈퇴하기</S.InnerContents>
        <View style={{ borderBottomWidth: 1, borderBottomColor: '#E5E5E5' }} />
      </S.EtcWrapper>
    </S.WholeWrapper>
  );
};

export default SettingUI;
