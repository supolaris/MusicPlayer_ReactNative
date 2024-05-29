import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
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

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const MusicPlayer = () => {
  return (
    <View style={styles.container}>
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
  },
  bottomView: {
    justifyContent: 'flex-end',
  },
  bottomIconsView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  iconTouchable: {},
});
