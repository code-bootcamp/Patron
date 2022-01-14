import React from 'react';
import styled from '@emotion/native';

interface IPropsWhiteTag {
  text?: string;
  fontSize?: string;
  onPress?: () => void;
  padding?: string;
}

const Tag = styled.Text`
  margin-right: 8px;
  margin-bottom: 10px;
  padding: ${(props: IPropsWhiteTag) => props.padding};
  border: 1px solid #9f9f9f;
  border-radius: 20px;
  font-size: ${(props: IPropsWhiteTag) => props.fontSize};
  text-align: center;
  align-self: flex-start;
`;

const TagText = styled.Text`
  color: #000000;
  font-size: ${(props: IPropsWhiteTag) => props.fontSize};
`;

const WhiteTag = (props: IPropsWhiteTag) => {
  return (
    <Tag fontSize={props.fontSize} onPress={props.onPress} padding={props.padding}>
      # <TagText fontSize={props.fontSize}>{props.text}</TagText>
    </Tag>
  );
};

export default WhiteTag;
