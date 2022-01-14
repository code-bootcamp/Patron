import React from 'react';
import styled from '@emotion/native';

interface IPropsGreenTag {
  text?: string;
  fontSize?: string;
  onPress?: () => void;
  padding?: string;
}

const Tag = styled.Text`
  margin-right: 8px;
  margin-bottom: 10px;
  padding: ${(props: IPropsGreenTag) => props.padding};
  border: 1px solid #448800;
  border-radius: 20px;
  background-color: #c5d2b7;
  color: #448800;
  font-size: ${(props: IPropsGreenTag) => props.fontSize};
  text-align: center;
  align-self: flex-start;
`;

const TagText = styled.Text`
  color: #448800;
  font-size: ${(props: IPropsGreenTag) => props.fontSize};
`;

const GreenTag = (props: IPropsGreenTag) => {
  return (
    <Tag fontSize={props.fontSize} onPress={props.onPress} padding={props.padding}>
      # <TagText fontSize={props.fontSize}>{props.text}</TagText>
    </Tag>
  );
};

export default GreenTag;
