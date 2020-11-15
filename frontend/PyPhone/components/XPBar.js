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
      <View style={[styles.fullBar]}>
        <LinearGradient
          colors={['#fffba9', '#ffdb00']}
          style={completedBar}></LinearGradient>
      </View>
      {/* <Text style={styles.XPText}>10 XP</Text> */}
      <Text style={styles.XPText}>{props.xp}XP</Text>

      {/* <Text style={styles.completed}>{props.completed}</Text> */}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: 300,
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  fullBar: {
    height: 25,
    width: 200,
    backgroundColor: '#dedddb',
    borderRadius: 50,
    borderColor: 'white',
    borderWidth: 3,
    flex: 15,
    marginLeft: 40,
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
    flex: 3,
  },
});

export default XPBar;
