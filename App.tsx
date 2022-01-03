import * as React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Navigation from './pages/navigation';
import 'react-native-gesture-handler';
import LoginPage from './pages/screens/signup/login';

const App = () => {
  return (
    <>
      <SafeAreaView />
      <Navigation />
      <LoginPage />
    </>
  );
};

export default App;
