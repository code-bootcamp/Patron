import { GraphQLClient } from 'graphql-request';
import { gql } from '@apollo/client';
import { Dispatch, SetStateAction } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const RESTORE_ACCESS_TOKEN = gql`
  mutation restoreAccessToken {
    restoreAccessToken {
      accessToken
    }
  }
`;

export async function getAccessToken(setAccessToken: Dispatch<SetStateAction<string>>) {
  try {
    const graphQLClient = new GraphQLClient('http://backend04-team.codebootcamp.co.kr/team03', {
      credentials: 'include',
    });
    const result = await graphQLClient.request(RESTORE_ACCESS_TOKEN);
    const newAccessToken = result.restoreAccessToken.accessToken;
    setAccessToken(newAccessToken);
    AsyncStorage.setItem('refreshToken', newAccessToken);
    return newAccessToken;
  } catch (error) {
    if (error instanceof Error) console.log('getAccessTokenError: ', error.message);
  }
}
