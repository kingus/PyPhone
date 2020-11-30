import React, {useState} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useSelector} from 'react-redux';

const XPBar2 = (props) => {
  const completedBar = {
    height: '100%',
    backgroundColor: '#49a9c4',
    borderRadius: 80,
    width: props.completed,
    flex: 1,
  };

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <View style={[styles.fullBar]}>
          <LinearGradient
            colors={['#00072b', '#00066b']}
            style={completedBar}></LinearGradient>
        </View>
        <Text style={styles.XPText}>{props.xp} XP</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '20%',
    alignItems: 'center',
  },
  main: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 15,
  },

  fullBar: {
    height: 20,
    backgroundColor: '#dedddb',
    borderRadius: 50,
    borderColor: 'white',
    borderWidth: 3,
    flex: 10,
  },
  completed: {
    color: '#49a9c4',
    textAlign: 'center',
    fontSize: 13,
  },
  XPText: {
    color: 'white',
    fontWeight: 'bold',
    marginLeft: 10,
    flex: 5,
  },
});

export default XPBar2;
