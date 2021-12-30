import * as React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Navigation from './pages/navigation';
import 'react-native-gesture-handler';

const App = () => {
  return (
    <>
      <SafeAreaView />
      <Navigation />
    </>
  );
};

export default App;
