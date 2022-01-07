import React from 'react';
import { View, Text } from 'react-native';
import * as S from './stamp.styles';
import Icon from 'react-native-vector-icons/Ionicons';
import { ProgressBar } from 'react-native-paper';

const Donation = [{ name: '첫 기부' }];

const StampUI = () => {
  return (
    <S.Wrapper>
      <S.Header>
        <S.Title>내정보</S.Title>
        <S.IconWrapper>
          <Icon name="search-outline" size={25} style={{ paddingRight: 15 }}></Icon>
          <Icon name="settings-outline" size={25}></Icon>
        </S.IconWrapper>
      </S.Header>
      <S.StampProfile>
        <Icon name="person-circle-outline" size={80}></Icon>
        <S.Level>레벨 3</S.Level>
      </S.StampProfile>
      <S.ProgressWrapper>
        <S.InnerTitle>나의 현황</S.InnerTitle>
        <View style={{ borderBottomWidth: 3, marginTop: 5, marginBottom: 10 }} />
        <S.LevelWrapper>
          <S.Percent>다음 레벨까지</S.Percent>
          <S.Percent>80%</S.Percent>
        </S.LevelWrapper>
        <ProgressBar progress={0.8} color="green" />
      </S.ProgressWrapper>
      <S.StampList>
        <S.InnerTitle>나의 스탬프</S.InnerTitle>
        <View style={{ borderBottomWidth: 3, marginTop: 5, marginBottom: 10 }} />
        {Donation.map((el, index) => (
          <S.StampWrapper key={index}>
            <S.ListWrapper>
              <Icon name="lock-closed-outline" size={30} style={{ marginBottom: 5 }}></Icon>
              <Text>{el.name}</Text>
            </S.ListWrapper>
            <S.ListWrapper>
              <Icon name="lock-closed-outline" size={30} style={{ marginBottom: 5 }}></Icon>
              <Text>{el.name}</Text>
            </S.ListWrapper>
            <S.ListWrapper>
              <Icon name="lock-closed-outline" size={30} style={{ marginBottom: 5 }}></Icon>
              <Text>{el.name}</Text>
            </S.ListWrapper>
          </S.StampWrapper>
        ))}
      </S.StampList>
    </S.Wrapper>
  );
};
export default StampUI;
