import React, { useState } from 'react';
import { TextInput, StyleSheet } from 'react-native';
import styled from '@emotion/native';

const Wrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const SubmitBtn = styled.View`
  width: 10%;
`;

const SubmitTxt = styled.Text`
  color: #448800;
`;

const IconWrapper = styled.View`
  width: 10%;
  align-items: center;
`;

const Icon = styled.Image``;

export default function InputComment(props) {
  const [isFocus, setIsFocus] = useState(false);

  function onFocusInput() {
    setIsFocus(true);
  }

  function onBlurInput() {
    setIsFocus(false);
  }

  return (
    <Wrapper>
      <IconWrapper>
        <Icon source={require('../../../../../public/images/icon_image.png')} />
      </IconWrapper>
      <TextInput
        placeholder={props.placeholder}
        style={styles.textInput}
        onFocus={onFocusInput}
        onBlur={onBlurInput}
        onChange={props.onChange}
      />
      <SubmitBtn>{isFocus && <SubmitTxt>등록</SubmitTxt>}</SubmitBtn>
    </Wrapper>
  );
}

const styles = StyleSheet.create({
  textInput: {
    width: '80%',
  },
});
