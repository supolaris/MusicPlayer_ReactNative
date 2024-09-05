import React, {useState, useRef, useEffect} from 'react';

import Home from '../components/Home';
import {Animated} from 'react-native';

const HomeScreen = () => {
  const [sliderValue, setSliderValue] = useState<number>(-1);
  const [isSongPlaying, setIsSongPlaying] = useState<boolean>(false);

  const scrollX = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    scrollX.addListener(({value}) => {
      console.log(value);
    });
  }, []);

  const onBackPressed = () => {};
  const onPlayPausePressed = () => {
    setIsSongPlaying(!isSongPlaying);
  };
  const onForwardPressed = () => {};

  return (
    <Home
      sliderValue={sliderValue}
      isSongPlaying={isSongPlaying}
      scrollX={scrollX}
      onBackPressed={onBackPressed}
      onPlayPausePressed={onPlayPausePressed}
      onForwardPressed={onForwardPressed}
    />
  );
};

export default HomeScreen;
