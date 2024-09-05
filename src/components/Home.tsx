import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  Animated,
} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {songsData} from '../constants/staticData';
import {IsongsData} from '../@types/commontTypes';
import {Slider} from '@miblanchard/react-native-slider';
import {FontFamily} from '../constants/fontFamily';
import {appColors} from '../constants/colors';

import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

interface IHomeProps {
  sliderValue: number;
  // onChangesliderValue: (value: number[]) => void;
  isSongPlaying: boolean;
  scrollX: any;
  onBackPressed: () => void;
  onPlayPausePressed: () => void;
  onForwardPressed: () => void;
}

const Home = (props: IHomeProps) => {
  const renderSongs = ({item, index}: {item: IsongsData; index: number}) => {
    return (
      <Animated.View style={styles.renderContainer}>
        <View style={styles.renderImageView}>
          <Image style={styles.renderImage} source={item.image} />
        </View>
        <View style={styles.renderDetailsView}>
          <Text style={styles.renderNameText}>{item.name}</Text>
          <Text style={styles.renderArtistText}>{item.artists}</Text>
        </View>
      </Animated.View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.flatlistView}>
          <Animated.FlatList
            showsHorizontalScrollIndicator={false}
            snapToInterval={wp(100)}
            horizontal={true}
            data={songsData}
            renderItem={renderSongs}
            keyExtractor={item => item.id.toString()}
            onScroll={Animated.event(
              [
                {
                  nativeEvent: {
                    contentOffset: {x: props.scrollX},
                  },
                },
              ],
              {useNativeDriver: true},
            )}
          />
        </View>

        <View style={styles.sliderView}>
          <Slider
            value={props.sliderValue}
            // onValueChange={(value: number[]) => props.onChangesliderValue(value)}
          />
          <View style={styles.durationView}>
            <Text style={styles.durationText}>00:00:00</Text>
            <Text style={styles.durationText}>00:00:00</Text>
          </View>
        </View>
        <View style={styles.buttonView}>
          <TouchableOpacity onPress={props.onBackPressed}>
            <FontAwesome name="backward" size={35} color={appColors.primary} />
          </TouchableOpacity>
          <TouchableOpacity onPress={props.onPlayPausePressed}>
            <AntDesign
              name={props.isSongPlaying ? 'pausecircle' : 'play'}
              size={70}
              color={appColors.primary}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={props.onForwardPressed}>
            <FontAwesome name="forward" size={35} color={appColors.primary} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  renderContainer: {
    width: wp(100),
    alignSelf: 'center',
  },
  renderImageView: {
    alignItems: 'center',
  },
  renderImage: {
    width: 400,
    height: 600,
    borderRadius: 5,
  },
  renderDetailsView: {
    marginVertical: 20,
    alignItems: 'center',
  },
  renderNameText: {
    fontSize: 20,
    color: 'black',
    fontFamily: FontFamily.bold,
  },
  renderArtistText: {
    marginTop: 5,
    fontSize: 15,
    color: 'black',
    fontFamily: FontFamily.semiBold,
  },

  //main
  container: {
    flex: 1,
    backgroundColor: appColors.background,
  },
  innerContainer: {
    width: '90%',
    alignSelf: 'center',
  },
  flatlistView: {
    width: wp(100),
    marginTop: 20,
  },
  sliderView: {},
  durationView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  durationText: {
    fontSize: 14,
    fontFamily: FontFamily.regular,
  },
  buttonView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
