import React from 'react';
import * as S from './communityDetail.styles';
import * as R from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import WhiteTag from '../../../commons/tags/whitetag';
import { displayedAt } from '../../../../commons/libraries/utils';
import { IPropsCommunityDetailUI } from './communityDetail.types';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import CommentWrite from '../comment/write/commentWrite.container';
import CommentList from '../comment/list/commentList.container';

const CommunityDetailUI = (props: IPropsCommunityDetailUI) => {
  return (
    <>
      <S.Wrap>
        <S.DetailHeader source={{ uri: props.data?.fetchBoard.images?.[0] }}>
          <R.View>
            <S.HeaderTitle>{props.data?.fetchBoard.title.split('/')[1]}</S.HeaderTitle>
            <S.HeaderFooter>
              <S.HeaderFooterText>{props.data?.fetchBoard.writer}</S.HeaderFooterText>
              <S.FooterInner>
                <S.HeaderFooterText>
                  {displayedAt(props.data?.fetchBoard.createdAt)}
                </S.HeaderFooterText>
                <Icon name="ellipse" color="white" size={2} style={{ padding: 5 }} />
                <S.HeaderFooterText>조회 {props.firedata?.views}</S.HeaderFooterText>
              </S.FooterInner>
            </S.HeaderFooter>
          </R.View>
        </S.DetailHeader>
        <S.DetailBody>
          <S.DetailImg source={{ uri: props.data?.fetchBoard.images?.[1] }} />
          <S.DetailContents>{props.data?.fetchBoard.contents}</S.DetailContents>
          <S.HashWrap>
            {props.firedata?.tags?.map((el: any, idx: number) => (
              <WhiteTag text={el} fontSize="10px" padding="8px 12px" key={idx} />
            ))}
          </S.HashWrap>
          <R.View>
            <S.PicTitle>사진</S.PicTitle>
            <S.PicWrap>
              <S.BigPic source={{ uri: props.data?.fetchBoard.images?.[0] }} />
              <S.SmaillPicWrap>
                {props.data?.fetchBoard.images?.map(
                  (el, idx) => idx > 0 && <S.SmallPic source={{ uri: el }} key={idx} />,
                )}
              </S.SmaillPicWrap>
            </S.PicWrap>
          </R.View>
        </S.DetailBody>
        <S.MapWrap>
          <S.MapHeader>
            <R.Text style={{ fontWeight: '700' }}>+999</R.Text> 명의 사람들이 이 지역에 함께 후원
            중입니다.
          </S.MapHeader>
          <MapView
            style={{ width: '100%', height: 140 }}
            provider={PROVIDER_GOOGLE}
            showsUserLocation={true}
            showsMyLocationButton={true}
            initialRegion={{
              latitude: 8.850428,
              longitude: 38.971597,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          >
            <Marker
              coordinate={{ latitude: 8.850428, longitude: 38.971597 }}
              description="후원지역"
            />
          </MapView>
          <S.MapFooter>
            <S.MapFooterLeft>
              <R.Image source={require('../../../../../public/images/community/googleMap.png')} />
              <S.MapFooterText>이 지역을 구글지도로 확인하기</S.MapFooterText>
            </S.MapFooterLeft>
            <Icon name="chevron-forward-outline" size={12} />
          </S.MapFooter>
        </S.MapWrap>
        <S.DetailFooter>
          <S.FooterHeader>
            <S.IconWrap onPress={props.onPressLike}>
              <Icon name="heart-outline" size={24} />
              <R.Text>{props.data?.fetchBoard.likeCount}</R.Text>
            </S.IconWrap>
            <S.IconWrap>
              <Icon name="chatbubble-outline" size={20} />
              <R.Text>{props.commentData?.fetchBoardComments.length}</R.Text>
            </S.IconWrap>
          </S.FooterHeader>
        </S.DetailFooter>
        <CommentList route={props.route} />
        <CommentWrite route={props.route} />
      </S.Wrap>
    </>
  );
};

export default CommunityDetailUI;
