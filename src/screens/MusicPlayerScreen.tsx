import {useState} from 'react';

import MusicPlayer from '../components/MusicPlayer';

const MusicPlayerScreen = () => {
  const [isPlayPause, setIsPlayPause] = useState(true);

  const onPreviousPressed = () => {
    console.log('Previous');
  };
  const onPausePressed = () => {
    console.log('Pause Pause');
    setIsPlayPause(!isPlayPause);
  };
  const onPlaySongPressed = () => {
    console.log('Play Pause');
    setIsPlayPause(!isPlayPause);
  };
  const onNextPressed = () => {
    console.log('Next');
  };

  return (
    <MusicPlayer
      isPlayPause={isPlayPause}
      onPreviousPressed={onPreviousPressed}
      onPausePressed={onPausePressed}
      onPlaySongPressed={onPlaySongPressed}
      onNextPressed={onNextPressed}
    />
  );
};

export default MusicPlayerScreen;
