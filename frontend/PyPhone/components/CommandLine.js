import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const CommandLine = (props) => {
  return (
    <View style={styles.cmd}>
      {props.lines.map((line, index) => (
        <Text style={styles.cmdText} key={index}>
          {line}
        </Text>
      ))}
    </View>
  );
};

export default CommandLine;

const styles = StyleSheet.create({
  cmd: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    backgroundColor: '#00072b',
    padding: 15,
    borderRadius: 5,
    width: '95%',
    alignSelf: 'center',
  },
  cmdText: {
    color: '#5afffb',
    fontFamily: 'Inconsolata',
    letterSpacing: 1,
  },
});
