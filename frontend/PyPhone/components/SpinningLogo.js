import React from 'react';
import {View, Text, StyleSheet, Image, Animated, Easing} from 'react-native';
import logo from '../images/logo.png';

const SpinningLogo = (props) => {
  var spinValue = new Animated.Value(0);

  Animated.loop(
    Animated.timing(spinValue, {
      toValue: 1,
      duration: 8000,
      easing: Easing.linear,
      useNativeDriver: true,
    }),
  ).start();

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <Animated.Image
      style={{transform: [{rotate: spin}], height: 120, width: 120} }
      source={logo}
    />
  );
};

export default SpinningLogo;

const styles = StyleSheet.create({});
