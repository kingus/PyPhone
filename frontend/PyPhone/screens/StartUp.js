import React, {useEffect} from 'react';
import {View, ActivityIndicator, StyleSheet, Text, Image} from 'react-native';
import {useDispatch} from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import logo from '../images/logo.png';
import LinearGradient from 'react-native-linear-gradient';

import * as authActions from '../store/actions/auth';

const StartUp = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const tryLogin = async () => {
      AsyncStorage.removeItem('userData');
      AsyncStorage.removeItem('courses');
      // AsyncStorage.removeItem('courses');

      const userData = await AsyncStorage.getItem('userData');
      console.log('USER', userData);
      if (!userData) {
        props.navigation.navigate('SignIn');
        return;
      }
      props.navigation.navigate('AppNavigator');
    };

    tryLogin();
  }, [dispatch]);

  return (
    // <LinearGradient
    //   colors={['#34adf9', '#bae5ff', '#34adf9']}
    //   style={styles.linearGradient}>
    <View style={styles.container}>
      <Text style={styles.appName}>PyPhone</Text>
      <View style={styles.logoContainer}>
        <Image source={logo} style={styles.logo}></Image>
      </View>
      <ActivityIndicator size="large" color="#5afffb" />
    </View>

    // </LinearGradient>
  );
};

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
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#00072b',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  appName: {
    fontSize: 50,
    color: '#ffe25b',
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

export default StartUp;
