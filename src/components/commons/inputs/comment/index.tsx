import React, { forwardRef } from 'react';
import { TextInput, StyleSheet } from 'react-native';
import styled from '@emotion/native';

interface IPropsInputComment {
  placeholder: string;
  onChange: () => void;
  defaultValue: string;
  onPress: () => void;
  text: string;
}

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

const InputComment = forwardRef((props: IPropsInputComment, ref: any) => {
  return (
    <Wrapper>
      <TextInput
        placeholder={props.placeholder}
        style={styles.textInput}
        onChange={props.onChange}
        defaultValue={props.defaultValue}
        ref={ref}
      />
      <SubmitBtn onPress={props.onPress}>
        <SubmitTxt>{props.text}</SubmitTxt>
      </SubmitBtn>
    </Wrapper>
  );
});

const styles = StyleSheet.create({
  textInput: {
    width: '80%',
  },
});

export default InputComment;
