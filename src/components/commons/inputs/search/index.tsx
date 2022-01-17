import React from 'react';
import styled from '@emotion/native';
import Icon from 'react-native-vector-icons/Ionicons';

interface IPropsSearchInput {
  width?: string;
  height?: string;
  placeholder?: string;
  onChange: () => void;
  onPress: () => void;
}

interface IPropsSearchWrapper {
  width?: string;
  height?: string;
}

const Wrapper = styled.Pressable`
  border-radius: 8px;
  flex-direction: row;
  align-items: center;
  padding: 12px;
  width: ${(props: IPropsSearchWrapper) => props.width};
  height: ${(props: IPropsSearchWrapper) => props.height};
`;

const Input = styled.TextInput`
  width: 95%;
`;

const IconWrapper = styled.View`
  width: 10%;
  align-items: center;
`;

export default function SearchInput(props: IPropsSearchInput) {
  return (
    <Wrapper width={props.width} height={props.height}>
      <Input onChange={props.onChange} placeholder={props.placeholder} />
      <IconWrapper>
        <Icon name="search" size={20} color="rgba(143, 148, 156, 1)" onPress={props.onPress} />
      </IconWrapper>
    </Wrapper>
  );
}
