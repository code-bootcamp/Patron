import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
import styled from '@emotion/native';

const Wrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
  padding: 0 20px;
`;

const SubmitBtn = styled.Pressable`
  width: 10%;
`;

const SubmitTxt = styled.Text`
  color: #448800;
`;

export default function InputComment(props) {
  return (
    <Wrapper>
      <TextInput
        placeholder={props.placeholder}
        style={styles.textInput}
        onChange={props.onChange}
        defaultValue={props.defaultValue}
      />
      <SubmitBtn onPress={props.onPress}>
        <SubmitTxt>등록</SubmitTxt>
      </SubmitBtn>
    </Wrapper>
  );
}

const styles = StyleSheet.create({
  textInput: {
    width: '80%',
  },
});
