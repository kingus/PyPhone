import React, {useState} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const ProgressBar = (props) => {
  const completedBar = {
    height: '100%',
    backgroundColor: '#49a9c4',
    borderRadius: 80,
    width: props.completed,
    justifyContent: 'center',
  };

  return (
    <View style={styles.container}>
      <View style={[styles.fullBar]}>
        <View style={completedBar}></View>
      </View>
      <Text style={styles.completed}>{props.completed}</Text>
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
    height: 10,
    width: '80%',
    backgroundColor: '#dedddb',
    borderRadius: 50,
  },
  completed: {
    color: '#49a9c4',
    textAlign: 'center',
    fontSize: 13,
    paddingLeft: 3,
    paddingBottom: 3,
  },
});

export default ProgressBar;
