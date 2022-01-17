import { gql } from '@apollo/client';

export const FETCH_BOARDS = gql`
  query fetchBoards($search: String) {
    fetchBoards(search: $search) {
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

export const FETCH_BOARDS_BEST = gql`
  query fetchBoardsOfTheBest {
    fetchBoardsOfTheBest {
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
