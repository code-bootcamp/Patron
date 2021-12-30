import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import styled from '@emotion/native';

const Wrapper = styled.View`
  flex-direction: row;
`;
const IconWrapper = styled.View`
  width: 5%;
  justify-content: center;
`;
const Icon = styled.Image``;

const Input = styled.TextInput`
  width: 95%;
`;

export default function InputBasic(props) {
  const [isFocus, setIsFocus] = useState(false);

  function onFocusInput() {
    setIsFocus(true);
  }

  function onBlurInput() {
    setIsFocus(false);
  }

  return (
    <View style={isFocus ? styles.textInputFocused : styles.textInput}>
      <Wrapper>
        <Input placeholder={props.placeholder} onFocus={onFocusInput} onBlur={onBlurInput} />
        {isFocus && (
          <IconWrapper>
            <Icon source={require('../../../../../public/images/icon_del-txt.png')} />
          </IconWrapper>
        )}
      </Wrapper>
    </View>
  );
}

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#dbdbdb',
    padding: 8,
  },

  textInputFocused: {
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#448800',
    padding: 8,
  },
});
