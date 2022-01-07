import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Navigation from './pages/navigation';
import 'react-native-gesture-handler';
// import Register from './src/components/units/signup/register/register.container';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import { firebase } from '@react-native-firebase/firestore';

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
  const client = new ApolloClient({
    uri: 'http://backend04-team.codebootcamp.co.kr/team03',
    cache: new InMemoryCache(),
  });

  return (
    <>
      <ApolloProvider client={client}>
        <SafeAreaView />
        {/* <Register /> */}
        <Navigation />
      </ApolloProvider>
    </>
  );
};

export default App;
