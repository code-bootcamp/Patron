import React from 'react';
import styled from '@emotion/native';

interface IPropsColoredTag {
  text?: string;
  fontSize?: string;
  padding?: string;
}

const Tag = styled.Text`
  padding: ${(props: IPropsColoredTag) => props.padding};
  margin-right: 5px;
  border-radius: 40px;
  text-align: center;
  background-color: #448800;
  align-self: flex-start;
  color: #ffffff;
  font-size: ${(props: IPropsColoredTag) => props.fontSize};
`;

const ColoredTag = (props: IPropsColoredTag) => {
  return (
    <Tag padding={props.padding} fontSize={props.fontSize}>
      {props.text}
    </Tag>
  );
};

export default ColoredTag;
