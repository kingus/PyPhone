import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import image from '../images/project.png';
import ProgressBar from './ProgressBar';
const CommandLine = (props) => {
  return (
    <View style={styles.cmd}>
      <Text style={styles.cmdText}>x = 5</Text>
      <Text style={styles.cmdText}>x = x + 1</Text>
      <Text style={styles.cmdText}>print(x)</Text>
    </View>
  );
};

export default CommandLine;

const styles = StyleSheet.create({
  cmd: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#00072b',
    padding: 15,
    borderRadius: 5,
    width: '90%',
  },
  cmdText: {
    color: '#5afffb',
    fontFamily: 'Inconsolata',
    letterSpacing: 1,
  },
});
