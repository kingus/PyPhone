import React, {useState} from 'react';
import {Animated} from 'react-native';
import {StyleSheet} from 'react-native';

const AnimatedText = (props) => {
  const [visible, setVisible] = useState(true);

  const fadeAnim = new Animated.Value(visible ? 1 : 0);
  const toggleVisible = () => {
    setVisible(!visible);
  };

  setTimeout(() => {
    toggleVisible();
  }, 4800);

  Animated.timing(fadeAnim, {
    toValue: visible ? 0 : 1,
    duration: 4500,
    useNativeDriver: true,
  }).start();

  return (
    <Animated.Text
      style={{
        opacity: fadeAnim,
        color: 'rgba(255,255,255,0.6)',
        textAlign: 'center',
        width: 300,
        fontFamily: 'OpenSansRegular',
        marginTop: 50,
      }}>
      Witaj w aplikacji PyPhone, zaloguj się i kontynuuj naukę!
    </Animated.Text>
  );
};
export default AnimatedText;

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    alignItems: 'center',
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  appName: {
    fontSize: 50,
    color: 'white',
    paddingTop: 50,
    textAlign: 'center',
  },
  logoContainer: {
    margin: 80,
    flexDirection: 'column',
    alignItems: 'center',
  },
  logo: {
    height: 120,
    width: 120,
  },
});
