import React from 'react';
import styled from '@emotion/native';

interface IClearButton {
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
  width: ${(props: IClearButton) => props.width};
  height: ${(props: IClearButton) => props.height};
  border-radius:${(props: IClearButton) => props.borderRadius}
  background-color: #EEEEEE;
`;

const SubmitText = styled.Text`
  color: #717171;
  font-size: ${(props: IClearButton) => props.fontSize};
`;

const ClearButton = (props: IClearButton) => {
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

export default ClearButton;
