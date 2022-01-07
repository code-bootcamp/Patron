import React from 'react';
import * as S from './communityDetail.styles';
import * as R from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import WhiteTag from '../../../commons/tags/whitetag';
import { displayedAt } from '../../../../commons/libraries/utils';
import { IPropsCommunityDetailUI } from './communityDetail.types';

const CommunityDetailUI = (props: IPropsCommunityDetailUI) => {
  return (
    <>
      <S.Wrap>
        <S.DetailHeader source={{ uri: props.data?.fetchBoard.images?.[2] }}>
          <R.View>
            <S.HeaderTitle>{props.data?.fetchBoard.title}</S.HeaderTitle>
            <S.HeaderFooter>
              <S.HeaderFooterText>{props.data?.fetchBoard.writer}</S.HeaderFooterText>
              <S.FooterInner>
                <S.HeaderFooterText>
                  {displayedAt(props.data?.fetchBoard.createdAt)}
                </S.HeaderFooterText>
                <Icon name="ellipse" color="white" size={2} style={{ padding: 5 }} />
                <S.HeaderFooterText>조회 99</S.HeaderFooterText>
              </S.FooterInner>
            </S.HeaderFooter>
          </R.View>
        </S.DetailHeader>
        <S.DetailBody>
          <S.DetailImg source={{ uri: props.data?.fetchBoard.images?.[1] }} />
          <S.DetailContents>{props.data?.fetchBoard.contents}</S.DetailContents>
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
