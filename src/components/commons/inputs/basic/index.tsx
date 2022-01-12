import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import styled from '@emotion/native';
import Icon from 'react-native-vector-icons/Ionicons';

interface IPropsContainer {
  width?: string;
  height?: string;
}

const Container = styled.View`
  width: ${(props: IPropsContainer) => props.width};
  height: ${(props: IPropsContainer) => props.height};
`;

const Wrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;

const IconWrapper = styled.View`
  justify-content: center;
  width: 5%;
`;
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
    <Container width={props.width} height={props.height}>
      <View style={isFocus ? styles.textInputFocused : styles.textInput}>
        <Wrapper>
          <Input
            placeholder={props.placeholder}
            onFocus={onFocusInput}
            onBlur={onBlurInput}
            onChange={props.onChange}
            secureTextEntry={props.secureTextEntry}
          />
          {isFocus && (
            <IconWrapper>
              <Icon name="close-outline" size={20} color={'rgba(0, 0, 0, 0.4)'} />
            </IconWrapper>
          )}
        </Wrapper>
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#dbdbdb',
    paddingLeft: 8,
    paddingRight: 8,
  },

  textInputFocused: {
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#448800',
    paddingLeft: 8,
    paddingRight: 8,
  },
});
