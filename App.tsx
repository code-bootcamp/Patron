import React, { createContext, useEffect, useState, Dispatch, SetStateAction } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Navigation from './pages/navigation';
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
// export const GlobalContext = createContext(null);
// const Stack = createStackNavigator();

const App = () => {
  // const [myAccessToken, setMyAccessToken] = useState('');
  const [accessToken, setMyAccessToken] = useState('');

  const value = {
    // accessToken: myAccessToken,
    // setAccessToken: setMyAccessToken,
    setAccessToken: setMyAccessToken,
  };

  // useEffect(() => {
  // const accessToken = AsyncStorage.getItem('accessToken') || '';
  // if (accessToken) setMyAccessToken(getAccessToken);

  //   if (AsyncStorage.getItem('refreshToken')) getAccessToken(setAccessToken);
  //   console.log('refreshToken:', getAccessToken);
  //   console.log('refreshToken:', setAccessToken);
  //   console.log(accessToken);
  // }, []);

  // AsyncStorage.setItem('refreshToken') getAccessToken(setAccessToken);
  // AsyncStorage.getItem('thing').then((res) => console.log(res));

  //   AsyncStorage.getItem('refreshToken', (_: any, result: any) => {
  //     console.log('refreshToken:', result);
  //     console.log('testing');
  //     if (result) {
  //       setAccessToken(result);
  //     }
  //   });
  // }, []);

  // AsyncStorage.getAllKeys((err, keys) => {
  //   AsyncStorage.multiGet(keys, (error, stores) => {
  //     stores.map((result, i, store) => {
  //       console.log({ [store[i][0]]: store[i][1] });
  //       return true;
  //     });
  //   });
  // });

  useEffect(() => {
    AsyncStorage.getItem('refreshToken', (_, result) => {
      console.log('refreshToken', result);
      if (result) {
        setMyAccessToken(result);
      }
    });
  }, []);

  // useEffect(() => {
  //   if (AsyncStorage.getItem('refreshToken') || '') getAccessToken(setMyAccessToken);
  //   // console.log(result);
  // }, []);

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
        <SafeAreaView />
        <LoginScreen />
        <Navigation />
      </ApolloProvider>
    </GlobalContext.Provider>
  );
};

export default App;
