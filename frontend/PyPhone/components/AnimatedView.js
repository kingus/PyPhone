import React, {useEffect, useRef} from 'react';
import {View, Animated} from 'react-native';

const AnimatedView = () => {
  const animatedOpacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(animatedOpacity, {
      toValue: 1,
      duration: 1000,
    }).start();
  }, []);

  return (
    <Animated.View
      style={{
        height: 100,
        widht: 100,
        opacity: animatedOpacity,
        backgroundColor: 'yellow',
      }}
    />
  );
};
