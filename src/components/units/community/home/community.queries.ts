import { gql } from '@apollo/client';

export const FECTH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      _id
      title
      contents
      images
      writer
      createdAt
    }
  }
`;
