import React, { createContext, useState, Dispatch, SetStateAction, useEffect } from 'react';
import 'react-native-gesture-handler';
import { ApolloProvider, ApolloClient, ApolloLink, InMemoryCache } from '@apollo/client';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import { createUploadLink } from 'apollo-upload-client';
// import { getAccessToken } from './src/commons/libraries/getAccessToken';
// import { onError } from '@apollo/client/link/error';
import { firebase } from '@react-native-firebase/firestore';
import { MenuProvider } from 'react-native-popup-menu';
import Navigation from './pages/navigation';
import { SafeAreaView } from 'react-native-safe-area-context';
import SplashScreen from 'react-native-splash-screen';

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

  useEffect(() => {
    try {
      setTimeout(() => {
        SplashScreen.hide();
      }, 2500);
    } catch (error) {
      console.warn('에러발생');
      console.warn(error);
    }
  });

  const value = {
    setAccessToken: setMyAccessToken,
  };

  // const errorLink = onError(({ graphQLErrors, operation, forward }) => {
  //   if (graphQLErrors) {
  //     for (const err of graphQLErrors) {
  //       if (err.extensions.code === 'UNAUTHENTICATED') {
  //         operation.setContext({
  //           headers: {
  //             ...operation.getContext().headers,
  //             authorization: `Bearer ${getAccessToken(setMyAccessToken)}`,
  //           },
  //         });
  //         return forward(operation);
  //       }
  //     }
  //   }
  // });

  const uploadLink = createUploadLink({
    uri: 'http://backend04-team.codebootcamp.co.kr/team03',
    headers: { authorization: `Bearer ${accessToken}` },
    credentials: 'include',
  });

  const client = new ApolloClient({
    link: ApolloLink.from([uploadLink as unknown as ApolloLink]),
    cache: new InMemoryCache(),
  });

  // useEffect(() => {
  //   async function accessToken() {
  //     const result = await AsyncStorage.getItem('refreshToken', (_, result) => {
  //       console.log('refreshToken', result);
  //       if (result) {
  //         setMyAccessToken(result);
  //       }
  //     });
  //     console.log(result);
  //   }
  //   accessToken();
  // }, []);

  return (
    <GlobalContext.Provider value={value}>
      <ApolloProvider client={client}>
        <MenuProvider>
          <SafeAreaView />
          <Navigation />
        </MenuProvider>
      </ApolloProvider>
    </GlobalContext.Provider>
  );
};

export default App;
