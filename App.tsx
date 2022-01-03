import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Navigation from './pages/navigation';
import 'react-native-gesture-handler';
import HomeCampaign from './src/components/units/home/campaign/HomeCampaign.container';

const App = () => {
  return (
    <>
      <HomeCampaign />
      <SafeAreaView />
      <Navigation />
    </>
  );
};

export default App;
