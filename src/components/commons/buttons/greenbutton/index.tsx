import React from 'react';
import styled from '@emotion/native';

interface IGreenButton {
  width?: number | string;
  height?: number | string;
  borderRadius?: number;
  fontSize?: string;
  fontWeight?: number;
  onPressBtn?: () => void;
  text?: string;
}

const SubmitBtn = styled.Pressable`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props: IGreenButton) => props.width};
  height: ${(props: IGreenButton) => props.height};
  border-radius: ${(props: IGreenButton) => props.borderRadius};
  background-color: #448800;
`;

const SubmitText = styled.Text`
  color: #ffffff;
  font-size: ${(props: IGreenButton) => props.fontSize};
  font-weight: ${(props: IGreenButton) => props.fontWeight};
`;

const GreenButton = (props: IGreenButton) => {
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

export default GreenButton;
