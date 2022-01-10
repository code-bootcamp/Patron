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
      likeCount
    }
  }
`;

export const FETCH_BEST_ITEMS = gql`
  query fetchUseditemsOfTheBest {
    fetchUseditemsOfTheBest {
      _id
      name
      images
    }
  }
`;
