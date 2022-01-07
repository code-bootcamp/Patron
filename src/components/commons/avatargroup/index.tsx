import * as React from 'react';
import styled from '@emotion/native';
import { Image } from 'react-native';

const Wrapper = styled.View`
  flex-direction: row;
`;

const Avatar1 = styled.View`
  position: absolute;
  left: -45px;
`;

const Avatar2 = styled.View`
  position: absolute;
  left: -30px;
`;

const Avatar3 = styled.View`
  position: absolute;
  left: -15px;
`;

const More = styled.View`
  height: 24px;
  width: 24px;
  background-color: #448800;
  border-radius: 50px;
  justify-content: center;
  align-items: center;
`;

const Txt = styled.Text`
  font-size: 10px;
  color: white;
`;

export default function AvatarGroup() {
  return (
    <>
      <Wrapper>
        <Avatar1>
          <Image source={require('../../../../public/images/home/avatar_group01.png')} />
        </Avatar1>
        <Avatar2>
          <Image source={require('../../../../public/images/home/avatar_group02.png')} />
        </Avatar2>
        <Avatar3>
          <Image source={require('../../../../public/images/home/avatar_group03.png')} />
        </Avatar3>
        <More>
          <Txt>• • •</Txt>
        </More>
      </Wrapper>
    </>
  );
}
