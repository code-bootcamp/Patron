import React from 'react';
import styled from '@emotion/native';

interface IPropsColoredTag {
  text?: string;
}

const Tag = styled.Text`
  padding: 4px 8px;
  border-radius: 40px;
  text-align: center;
  color: #ffffff;
  font-size: 10px;
  background-color: #448800;
  align-self: flex-start;
`;

const ColoredTag = (props: IPropsColoredTag) => {
  return <Tag>{props.text}</Tag>;
};

export default ColoredTag;
