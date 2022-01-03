import React from 'react';
import styled from '@emotion/native';

const Wrapper = styled.View`
  border-radius: 8px;
  flex-direction: row;
  align-items: center;
  padding: 12px;
`;

const Input = styled.TextInput`
  width: 90%;
`;

const IconWrapper = styled.View`
  width: 10%;
  align-items: center;
`;
const Icon = styled.Image``;

export default function SearchInput(props) {
  return (
    <Wrapper>
      <Input onChange={props.onChange} />
      <IconWrapper>
        <Icon source={require('../../../../../public/images/icon_union.png')} />
      </IconWrapper>
    </Wrapper>
  );
}
