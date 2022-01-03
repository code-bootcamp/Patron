import React from 'react';
import styled from '@emotion/native';

interface IPropsWhiteTag {
  text?: string;
}

const Tag = styled.Text`
  margin-right: 8px;
  margin-bottom: 10px;
  padding: 8px 12px;
  border: 1px solid #9f9f9f;
  border-radius: 20px;
  text-align: center;
  font-size: 14px;
  align-self: flex-start;
`;

const TagText = styled.Text`
  color: '#000000';
`;

const WhiteTag = (props: IPropsWhiteTag) => {
  return (
    <Tag>
      # <TagText>{props.text}</TagText>
    </Tag>
  );
};

export default WhiteTag;
