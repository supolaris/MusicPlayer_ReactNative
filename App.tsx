import {View, Text, StatusBar} from 'react-native';
import React from 'react';

import MusicPlayer from './src/screens/MusicPlayer';

const App = () => {
  return (
    <>
      <StatusBar
        hidden={false}
        barStyle="light-content"
        backgroundColor="gray"
      />
      <MusicPlayer />
    </>
  );
};

export default App;
