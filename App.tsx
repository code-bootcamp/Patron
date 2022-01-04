import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Navigation from './pages/navigation';
import 'react-native-gesture-handler';
import Register from './src/components/units/signup/register/register.container';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

const App = () => {
  console.log('hsadfasdfasdfasdfi');
  const client = new ApolloClient({
    uri: 'http://backend04-team.codebootcamp.co.kr/team03',
    cache: new InMemoryCache(),
  });

  return (
    <>
      <ApolloProvider client={client}>
        <SafeAreaView />
        <Register />
        <Navigation />
      </ApolloProvider>
    </>
  );
};

export default App;
