import { gql } from '@apollo/client';

export const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      _id
      writer
      title
      contents
      likeCount
      images
      boardAddress {
        address
      }
      createdAt
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

export const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      _id
      email
      name
      picture
    }
  }
`;
