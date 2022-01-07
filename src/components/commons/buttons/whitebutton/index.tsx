import React from 'react';
import styled from '@emotion/native';

interface IWhiteButton {
  width?: string;
  height?: string;
  borderRadius?: number;
  fontSize?: string;
  onPressBtn?: () => void;
  text?: string;
}

const SubmitBtn = styled.Pressable`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props: IWhiteButton) => props.width};
  height: ${(props: IWhiteButton) => props.height};
  border: 1px solid #448800;
  border-radius:${(props: IWhiteButton) => props.borderRadius}
  background-color: #ffffff;
`;

const SubmitText = styled.Text`
  color: #448800;
  font-size: ${(props: IWhiteButton) => props.fontSize};
`;

const WhiteButton = (props: IWhiteButton) => {
  return (
    <SubmitBtn
      onPress={props.onPressBtn}
      width={props.width}
      height={props.height}
      borderRadius={props.borderRadius}
    >
      <SubmitText fontSize={props.fontSize}>{props.text}</SubmitText>
    </SubmitBtn>
  );
};

export default WhiteButton;
