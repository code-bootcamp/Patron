import { gql, useQuery } from '@apollo/client';
import React from 'react';
import { Text } from 'react-native';

export const FECTH_COMMENTS = gql`
  query fetchBoardComments($page: Int, $boardId: ID!) {
    fetchBoardComments(page: $page, boardId: $boardId) {
      _id
      writer
      contents
      rating
      createdAt
    }
  }
`;

const CommentsCount = ({ boardId }: { boardId: string }) => {
  const { data: fetchComments } = useQuery(FECTH_COMMENTS, {
    variables: { boardId },
  });

  const commentsCount = fetchComments?.fetchBoardComments.length;
  if (commentsCount === 10) return commentsCount + '+';

  return <Text>{commentsCount}</Text>;
};

export default CommentsCount;
