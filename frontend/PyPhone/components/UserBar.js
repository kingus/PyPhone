import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';
import girl from '../images/girl.png';
import {Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import XPBar from '../components/XPBar';
import {useSelector} from 'react-redux';

const UserBar = (props) => {
  const xp = useSelector((state) => state.auth.xp);
  var oblicz = ((xp * 100) / 1200).toString() + '%';

  return (
    <View style={styles.userInfo}>
      <Image source={girl} style={styles.profileImage}></Image>
      <View style={styles.xpContainer}>
        <XPBar completed={oblicz} xp={xp}></XPBar>
      </View>
    </View>
  );
};

export default UserBar;

const styles = StyleSheet.create({
  xpContainer: {
    display: 'flex',
    flexDirection: 'row',
  },

  profileImage: {
    height: 70,
    width: 70,
  },

  userInfo: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
});
