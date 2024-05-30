import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Image,
  Text,
} from 'react-native';

import PlayIcon from 'react-native-vector-icons/AntDesign';
//play
import PauseIcon from 'react-native-vector-icons/AntDesign';
//pausecircle
import NextIcon from 'react-native-vector-icons/MaterialCommunityIcons';
//skip - next;
import PreviousIcon from 'react-native-vector-icons/MaterialCommunityIcons';
// skip - previous;
import HeartIcon from 'react-native-vector-icons/Feather';
import RepeatIcon from 'react-native-vector-icons/Feather';
import ShareIcon from 'react-native-vector-icons/Feather';
import OptionIcon from 'react-native-vector-icons/SimpleLineIcons';

import Slider from '@react-native-community/slider';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const MusicPlayer = () => {
  const [playPause, setPlayPause] = useState(true);

  const onPreviousSongPressed = () => {
    console.log('Previous');
  };
  const onPauseSongPressed = () => {
    console.log('Pause Pause');
    setPlayPause(!playPause);
  };
  const onPlaySongPressed = () => {
    console.log('Play Pause');
    setPlayPause(!playPause);
  };
  const onNextSongPressed = () => {
    console.log('Next');
  };

  return (
    <View style={styles.container}>
      {/* Music Player, details & Controls View */}
      <View style={styles.musicPlayerControlsView}>
        {/* Image View */}
        <View style={styles.imageView}>
          <Image
            style={styles.imagePoster}
            source={require('../assets/images/billieEilish_Lovely.jpg')}
          />
        </View>

        {/* Details view */}
        <View style={styles.detailsView}>
          <Text style={styles.songNameText}>Song Title</Text>
          <Text style={styles.artistNameText}>Some Artist - Name</Text>

          <View style={styles.sliderView}>
            <Slider
              style={styles.slider}
              minimumValue={0}
              maximumValue={1}
              minimumTrackTintColor="#FFFFFF"
              maximumTrackTintColor="#000000"
              vertical={true}
              thumbTintColor="white"
            />
            <View style={styles.sliderDurationTextView}>
              <Text style={styles.sliderDurationText}>00:00</Text>
              <Text style={styles.sliderDurationText}>00:00</Text>
            </View>
          </View>
        </View>

        {/* Controls View */}
        <View style={styles.controlsView}>
          <TouchableOpacity onPress={onPreviousSongPressed}>
            <PreviousIcon name="skip-previous" size={40} color="white" />
          </TouchableOpacity>

          {playPause ? (
            <TouchableOpacity onPress={onPauseSongPressed}>
              <PauseIcon name="pausecircle" size={50} color="white" />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={onPlaySongPressed}>
              <PlayIcon name="play" size={50} color="white" />
            </TouchableOpacity>
          )}

          <TouchableOpacity onPress={onNextSongPressed}>
            <NextIcon name="skip-next" size={40} color="white" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Bottom Icons View */}
      <View style={styles.bottomView}>
        <View style={styles.bottomIconsView}>
          <TouchableOpacity style={styles.iconTouchable}>
            <HeartIcon name="heart" size={25} color="white" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.iconTouchable}>
            <RepeatIcon name="repeat" size={25} color="white" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.iconTouchable}>
            <ShareIcon name="share" size={25} color="white" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.iconTouchable}>
            <OptionIcon name="options" size={25} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default MusicPlayer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    justifyContent: 'space-between',
  },
  musicPlayerControlsView: {},
  imageView: {
    paddingTop: 40,
    paddingBottom: 25,
    alignItems: 'center',
  },
  imagePoster: {
    height: 350,
    width: 350,
    borderRadius: 10,
  },
  detailsView: {
    alignItems: 'center',
  },
  songNameText: {
    fontSize: 25,
    color: 'white',
  },
  artistNameText: {
    fontSize: 18,
    color: 'white',
  },
  sliderView: {
    width: '80%',
  },
  slider: {
    height: 40,
  },
  sliderDurationTextView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
  },
  sliderDurationText: {
    color: 'white',
    fontSize: 16,
  },
  controlsView: {
    height: 80,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },

  //bottom Icon View
  bottomView: {
    paddingVertical: 20,
    borderTopWidth: 1,
    borderTopColor: 'white',
  },
  bottomIconsView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  iconTouchable: {},
});
