import React, {useState} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const XPBar = (props) => {
  const completedBar = {
    height: '100%',
    backgroundColor: '#49a9c4',
    borderRadius: 80,
    width: props.completed,
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
    paddingLeft: 15,
    paddingRight: 15,
  };

  return (
    <View style={styles.container}>
      <Text style={styles.XPText}>20XP</Text>

      <View style={[styles.fullBar]}>
        <LinearGradient
          colors={['#fffba9', '#ffdb00']}
          style={completedBar}></LinearGradient>
      </View>
      {/* <Text style={styles.completed}>{props.completed}</Text> */}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: 250,
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  fullBar: {
    height: 25,
    width: '80%',
    backgroundColor: '#dedddb',
    borderRadius: 50,
    borderColor: 'white',
    borderWidth: 3,
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
    padding: 10,
  },
});

export default XPBar;
