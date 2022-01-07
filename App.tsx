import React, { createContext, useEffect, useState, Dispatch, SetStateAction } from 'react';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import Navigation from './pages/navigation';
import 'react-native-gesture-handler';
import { ApolloProvider, ApolloClient, ApolloLink, InMemoryCache } from '@apollo/client';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createUploadLink } from 'apollo-upload-client';
import { getAccessToken } from './src/components/commons/library/getAccessToken';
import { onError } from '@apollo/client/link/error';
// import { createStackNavigator } from '@react-navigation/stack';
// import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './pages/screens/signup';

interface IGlobalContext {
  setAccessToken?: Dispatch<SetStateAction<string>>;
}

export const GlobalContext = createContext<IGlobalContext>({});

const App = () => {
  const [accessToken, setMyAccessToken] = useState('');

  const value = {
    setAccessToken: setMyAccessToken,
  };

  useEffect(() => {
    AsyncStorage.getItem('refreshToken', (_, result) => {
      console.log('refreshToken', result);
      if (result) {
        setMyAccessToken(result);
      }
    });
  }, []);

  const errorLink = onError(({ graphQLErrors, operation, forward }) => {
    if (graphQLErrors) {
      for (const err of graphQLErrors) {
        if (err.extensions?.code === 'UNAUTHENTICATED') {
          operation.setContext({
            headers: {
              ...operation.getContext().headers,
              authorization: `Bearer ${getAccessToken(setMyAccessToken)}`,
            },
          });
          return forward(operation);
        }
      }
    }
  });

  const uploadLink = createUploadLink({
    uri: 'http://backend04-team.codebootcamp.co.kr/team03',
    headers: { authorization: `Bearer ${accessToken}` },
    credentials: 'include',
  });

  const client = new ApolloClient({
    link: ApolloLink.from([errorLink, uploadLink as unknown as ApolloLink]),
    cache: new InMemoryCache(),
  });

  return (
    <GlobalContext.Provider value={value}>
      <ApolloProvider client={client}>
        {/* <SafeAreaView /> */}
        <LoginScreen />
        {/* <Navigation /> */}
      </ApolloProvider>
    </GlobalContext.Provider>
  );
};

export default App;
