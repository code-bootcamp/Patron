import { gql } from '@apollo/client';

export const FETCH_BOARDS = gql`
  query fetchBoards($search: String) {
    fetchBoards(search: $search) {
      _id
      writer
      title
      contents
      images
      likeCount
    }
  }
`;
