import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
  FlatList,
} from 'react-native';

import PlayIcon from 'react-native-vector-icons/AntDesign';
import PauseIcon from 'react-native-vector-icons/AntDesign';
import NextIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import PreviousIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import HeartIcon from 'react-native-vector-icons/Feather';
import RepeatIcon from 'react-native-vector-icons/Feather';
import ShareIcon from 'react-native-vector-icons/Feather';
import OptionIcon from 'react-native-vector-icons/SimpleLineIcons';

import Slider from '@react-native-community/slider';

import {SongsData} from '../assets/songsData/SongsData';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {ISongsData} from '../@types/CommonTypes';

interface IMusicPlayer {
  isPlayPause: boolean;
  onPreviousPressed: () => void;
  onPausePressed: () => void;
  onPlaySongPressed: () => void;
  onNextPressed: () => void;
}

const MusicPlayer = (props: IMusicPlayer) => {

  
  const renderSongs = ({item}: {item: ISongsData}) => {
    return (
      <View style={styles.flatListRenderContainer}>
        <Image style={styles.flatListImagePoster} source={item.image} />
        <View style={styles.flatListDetailsView}>
          <Text numberOfLines={1} style={styles.flatListSongNameText}>
            {item.name}
          </Text>
          <Text numberOfLines={1} style={styles.flatListArtistNameText}>
            {item.artist}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.musicPlayerControlsView}>
        <View style={styles.flatListView}>
          <FlatList
            horizontal
            data={SongsData}
            renderItem={renderSongs}
            scrollEventThrottle={14}
            snapToInterval={wp(100)}
            onScroll={() => {}}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>

        <View style={styles.detailsView}>
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
          <TouchableOpacity onPress={props.onPreviousPressed}>
            <PreviousIcon name="skip-previous" size={40} color="white" />
          </TouchableOpacity>

          {props.isPlayPause ? (
            <TouchableOpacity onPress={props.onPausePressed}>
              <PauseIcon name="pausecircle" size={50} color="white" />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={props.onPlaySongPressed}>
              <PlayIcon name="play" size={50} color="white" />
            </TouchableOpacity>
          )}

          <TouchableOpacity onPress={props.onNextPressed}>
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
  flatListView: {
    flex: 1,
  },

  //FlatList View Start
  flatListRenderContainer: {
    width: wp(100),
    paddingTop: 40,
    paddingBottom: 25,
    alignItems: 'center',
  },
  flatListImagePoster: {
    height: 350,
    width: 350,
    borderRadius: 10,
  },
  flatListDetailsView: {
    paddingTop: 30,
    alignItems: 'center',
  },

  flatListSongNameText: {
    textAlign: 'center',
    width: '60%',
    fontSize: 25,
    color: 'white',
  },
  flatListArtistNameText: {
    textAlign: 'center',
    width: '60%',
    fontSize: 18,
    color: 'white',
  },

  //FlatList View End
  detailsView: {
    alignItems: 'center',
  },
  sliderView: {
    width: '80%',
  },
  slider: {
    height: 20,
    paddingBottom: 10,
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
