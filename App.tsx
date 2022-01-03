import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Navigation from './pages/navigation';
import 'react-native-gesture-handler';
import LoginPage from './pages/screens/signup/login/index';

const App = () => {
  return (
    <>
      <SafeAreaView />
      <LoginPage />
      <Navigation />
    </>
  );
};

export default App;
