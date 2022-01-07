import * as S from './setting.styles';
import { View, Switch } from 'react-native';
import * as React from 'react';

const SettingUI = (props: any) => {
  return (
    <S.WholeWrapper>
      <S.HeaderWrapper>
        <S.Setting>설정</S.Setting>
      </S.HeaderWrapper>
      <S.UsageWrapper>
        <S.Title>이용안내</S.Title>
        <View style={{ borderBottomWidth: 2 }} />
        <S.InnerContents>이용약관</S.InnerContents>
        <View style={{ borderBottomWidth: 1, borderBottomColor: '#E5E5E5' }} />
        <S.InnerContents>개인정보처리방침</S.InnerContents>
        <View style={{ borderBottomWidth: 1, borderBottomColor: '#E5E5E5' }} />
      </S.UsageWrapper>
      <S.AlarmWrapper>
        <S.Title>알림</S.Title>
        <View style={{ borderBottomWidth: 2 }} />
        <S.SwitchWrapper>
          <S.InnerContents>마케팅 수신 동의</S.InnerContents>
          <Switch
            trackColor={{ false: '#767577', true: '#81b0ff' }}
            thumbColor={props.isEnabled ? '#f5dd4b' : '#f4f3f4'}
            onValueChange={props.toggleSwitch}
            value={props.isEnabled}
          />
        </S.SwitchWrapper>
        <View style={{ borderBottomWidth: 1, borderBottomColor: '#E5E5E5' }} />
        <S.SwitchWrapper>
          <S.InnerContents>알림 및 소리</S.InnerContents>
          <Switch
            trackColor={{ false: '#767577', true: '#81b0ff' }}
            thumbColor={props.isEnabled ? '#f5dd4b' : '#f4f3f4'}
            onValueChange={props.toggleSwitch}
            value={props.isEnabled}
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
        <S.InnerContents>탈퇴하기</S.InnerContents>
        <View style={{ borderBottomWidth: 1, borderBottomColor: '#E5E5E5' }} />
      </S.EtcWrapper>
    </S.WholeWrapper>
  );
};

export default SettingUI;
