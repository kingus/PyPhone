import React, {useState} from 'react';
import {Text, Dimensions, Image, StyleSheet, View} from 'react-native';
import box from '../images/package.png';

import SwiperFlatList from 'react-native-swiper-flatlist';
import Lecture1 from '../lectures/Lecture1';

const Lecture = () => {
  return (
    <View style={styles.container}>
      <Lecture1></Lecture1>
    </View>
  );
};

export default Lecture;

Lecture.navigationOptions = (navigationData) => {
  console.log(navigationData);
  const title = navigationData.navigation.getParam('lectureTitle');
  console.log(title);
  return {headerTitle: title};
};
export const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
