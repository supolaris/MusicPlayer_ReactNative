import {View, Text, StatusBar} from 'react-native';
import React from 'react';

import MusicPlayerScreen from './src/screens/MusicPlayerScreen';

const App = () => {
  return (
    <>
      <StatusBar
        hidden={false}
        barStyle="light-content"
        backgroundColor="gray"
      />
      <MusicPlayerScreen />
    </>
  );
};

export default App;
