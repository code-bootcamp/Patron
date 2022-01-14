import styled from '@emotion/native';

export const Wrap = styled.View`
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: #f6f6f7;
`;

export const CommunityHeader = styled.View`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 231px;
  margin-bottom: 8px;
  padding: 20px 24px;

  background-color: #ffffff;
`;

export const SubTitle = styled.Text`
  color: black;
  font-size: 14px;
`;

export const CardContainer = styled.ScrollView`
  margin-top: 10px;
`;

export const Card = styled.Pressable`
  width: 120px;
  height: 132px;
  margin-right: 8px;
  overflow: hidden;
  border-radius: 8px;
  background-color: #9f9f9f;
`;

export const CardBackground = styled.ImageBackground`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  height: 100%;
`;

export const CardTitle = styled.Text`
  color: #ffffff;
  font-size: 10px;
  padding-top: 4px;
  padding-bottom: 8px;
  border-bottom-color: #ffffff;
  border-bottom-width: 0.5px;
`;

export const HashSection = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 74px;
  margin-bottom: 8px;
  padding: 20px 24px;
  background-color: #ffffff;
`;
export const HashTitle = styled.Text`
  color: #000000;
  font-size: 16px;
  margin-bottom: 6px;
`;

export const HashSubtitle = styled.Text`
  color: #000000;
  font-size: 10px;
  font-weight: 400;
`;

export const TBD = styled.View`
  width: 36px;
  height: 36px;
  border-radius: 18px;
  background-color: #f8f9fb;
`;

export const TBDText = styled.Text`
  line-height: 36px;
  text-align: center;
  color: #ff0000;
  font-size: 10px;
  font-weight: 400;
`;

export const BoardContainer = styled.ScrollView`
  width: 100%;
`;

export const Board = styled.Pressable`
  width: 100%;
  height: 178px;
  margin-bottom: 8px;
  background-color: #ffffff;
`;

export const BoardHeader = styled.View`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 138px;
  padding: 16px 24px;
  border-bottom-color: #f0f0f0;
  border-bottom-width: 1px;
`;

export const BoardWrap = styled.View`
  display: flex;
  flex-direction: row;
`;

export const BoardImg = styled.Image`
  width: 80px;
  height: 80px;
  margin-right: 16px;
  background-color: #9f9f9f;
`;

export const ContentWrap = styled.View`
  display: flex;
  justify-content: space-between;
  width: 60%;
  height: 80px;
`;

export const BoardTitle = styled.Text`
  width: 100%;
  height: 30%;
  color: #000000;
  font-size: 16px;
  font-weight: 400;
`;

export const BoardContent = styled.Text`
  height: 50%;
  color: #000000;
  font-size: 12px;
  font-weight: 400;
`;

export const TagContainer = styled.View`
  height: 20%;
  display: flex;
  flex-direction: row;
`;

export const UserWrap = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
export const UserText = styled.Text`
  color: #000000;
  font-size: 10px;
  font-weight: 400;
`;
export const BoardFooter = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 40px;
  padding: 11px 27px;
`;

export const FooterLeft = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 126px;
  height: 24px;
`;

export const LeftInnerWrap = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 53px;
`;

export const FooterText = styled.Text`
  margin-left: 10px;
  color: black;
  font-size: 10px;
`;

export const WriteIcon = styled.Pressable`
  position: absolute;
  bottom: 25px;
  right: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  background-color: #448800;
  border-radius: 30px;
`;

export const ModalWrap = styled.View`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalHash = styled.View`
  width: 100%;
  height: 475px;
  padding: 26px;
  border-radius: 15px 15px 0px 0px;
  background-color: #ffffff;
`;

export const Close = styled.Pressable`
  display: flex;
  align-items: flex-end;
`;

export const ModalHeader = styled.View`
  display: flex;
  justify-content: space-between;
  height: 110px;
`;

export const ModalTitle = styled.Text`
  width: 190px;
  color: black;
  font-size: 22px;
`;

export const ModalSubtitle = styled.Text`
  width: 210px;
  color: black;
  font-size: 14px;
`;

export const ModalBody = styled.View`
  display: flex;
  justify-content: space-between;
  height: 300px;
`;

export const ModalTagWrap = styled.View`
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: flex-start;
  width: 100%;
  padding-top: 30px;
`;

export const SubmitBtn = styled.Pressable`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 52px;
  border-radius: 8px;
  background-color: #448800;
`;

export const SubmitText = styled.Text`
  color: #ffffff;
  font-size: 16px;
`;
