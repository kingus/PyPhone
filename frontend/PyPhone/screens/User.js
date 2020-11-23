import React from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';

const User = (props) => {
  return (
    <View style={styles.navBar}>
      <View style={styles.leftContainer}>
        <Text style={[styles.text, {textAlign: 'left'}]}>{'<'}</Text>
      </View>
      <Text style={styles.text}>Fitness & Nutrition Tracking</Text>
      <View style={styles.rightContainer}>
        <View style={styles.rightIcon} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  navBar: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'blue',
  },
  leftContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    backgroundColor: 'green',
  },
  rightContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'red',
  },
  rightIcon: {
    height: 10,
    width: 10,
    resizeMode: 'contain',
    backgroundColor: 'white',
  },
});

export default User;
