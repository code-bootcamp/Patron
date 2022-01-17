import { gql } from '@apollo/client';

export const LOG_OUT_USER = gql`
  mutation logoutUser {
    logoutUser
  }
`;

export const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      _id
      email
      name
    }
  }
`;
