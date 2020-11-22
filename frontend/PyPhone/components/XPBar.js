import React, {useState} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import girl from '../images/girl.png';

const XPBar = (props) => {
  const completedBar = {
    height: '100%',
    backgroundColor: '#49a9c4',
    borderRadius: 80,
    width: props.completed,
    flex: 1,
  };

  return (
    <View style={styles.container}>
      <Image source={girl} style={styles.profileImage}></Image>

      <View style={styles.main}>
        <View style={[styles.fullBar]}>
          <LinearGradient
            colors={['#fffba9', '#ffdb00']}
            style={completedBar}></LinearGradient>
        </View>
        <Text style={styles.XPText}>{props.xp} XP</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: '85%',
    // // display: 'flex',
    // flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  main: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 10,
  },
  profileImage: {
    height: 70,
    width: 70,
    margin: 10,
  },
  fullBar: {
    height: 25,
    width: 150,
    backgroundColor: '#dedddb',
    borderRadius: 50,
    borderColor: 'white',
    borderWidth: 3,
    flex: 15,
    marginLeft: 45,
  },
  completed: {
    color: '#49a9c4',
    textAlign: 'center',
    fontSize: 13,
    paddingLeft: 3,
    paddingBottom: 3,
  },
  XPText: {
    color: 'white',
    fontWeight: 'bold',
    flex: 4,
    marginBottom: 4,
    marginLeft: 5,
  },
});

export default XPBar;
