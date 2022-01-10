import { gql } from '@apollo/client';

export const LOG_OUT_USER = gql`
  mutation logoutUser {
    logoutUser
  }
`;
