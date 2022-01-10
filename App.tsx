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
import { firebase } from '@react-native-firebase/firestore';

interface IGlobalContext {
  setAccessToken?: Dispatch<SetStateAction<string>>;
}

export const GlobalContext = createContext<IGlobalContext>({});

const firebaseConfig = {
  appId: '1:658624640581:android:7f53ac27eb8a4b09f4d52c',
  apiKey: 'AIzaSyD041r1L0ujQLrDEEN6LQm09QHcMZ5QVPM',
  projectId: 'goodneighbors-b9d7e',
  storageBucket: 'goodneighbors-b9d7e.appspot.com',
  messagingSenderId: '658624640581',
  databaseURL: 'goodneighbors-b9d7e.firebaseapp.com',
};

export const firebaseStorage = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const App = () => {
  const [accessToken, setMyAccessToken] = useState('');

  const value = {
    setAccessToken: setMyAccessToken,
  };

  const errorLink = onError(({ graphQLErrors, operation, forward }) => {
    if (graphQLErrors) {
      for (const err of graphQLErrors) {
        if (err.extensions.code === 'UNAUTHENTICATED') {
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

  useEffect(() => {
    AsyncStorage.getItem('refreshToken', (_, result) => {
      console.log('refreshToken', result);
      if (result) {
        setMyAccessToken(result);
      }
    });
  }, []);

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
