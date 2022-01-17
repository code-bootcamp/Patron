import React from 'react';
import { View, Image } from 'react-native';
import * as S from './stamp.styles';
import Icon from 'react-native-vector-icons/Ionicons';
import { ProgressBar } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';

const StampUI = () => {
  return (
    <S.Wrapper>
      <S.StampProfile>
        <Icon name="person-circle-outline" size={80}></Icon>
        <S.Level>레벨 1</S.Level>
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
        <ScrollView>
          <S.StampListWrapper>
            <S.StampWrapper>
              <S.ListWrapper>
                <Image source={require('../../../../../public/images/stamp/newfamily.png')} />
                <S.StampName>새로운 가족</S.StampName>
              </S.ListWrapper>
              <S.ListWrapper>
                <Image source={require('../../../../../public/images/stamp/start.png')} />
                <S.StampName>가치 여행의 시작</S.StampName>
              </S.ListWrapper>
              <S.ListWrapper>
                <Image source={require('../../../../../public/images/stamp/step.png')} />
              </S.ListWrapper>
            </S.StampWrapper>
            <S.StampWrapper>
              <S.ListWrapper>
                <Image source={require('../../../../../public/images/stamp/letter.png')} />
                <S.StampName>특별한 소통</S.StampName>
              </S.ListWrapper>
              <S.ListWrapper>
                <Image source={require('../../../../../public/images/stamp/child.png')} />
                <S.StampName>취향 존중</S.StampName>
              </S.ListWrapper>
              <S.ListWrapper>
                <Image source={require('../../../../../public/images/stamp/happy.png')} />
              </S.ListWrapper>
            </S.StampWrapper>
            <S.StampWrapper>
              <S.ListWrapper>
                <Image source={require('../../../../../public/images/stamp/warm.png')} />
              </S.ListWrapper>
              <S.ListWrapper>
                <Image source={require('../../../../../public/images/stamp/commu.png')} />
              </S.ListWrapper>
              <S.ListWrapper>
                <Image source={require('../../../../../public/images/stamp/heart.png')} />
              </S.ListWrapper>
            </S.StampWrapper>
          </S.StampListWrapper>
        </ScrollView>
      </S.StampList>
    </S.Wrapper>
  );
};
export default StampUI;
