import React, {useEffect} from 'react';
import {View, ActivityIndicator, StyleSheet, Text, Image} from 'react-native';
import {useDispatch} from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import logo from '../images/logo.png';

import * as authActions from '../store/actions/auth';

const StartUp = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const tryLogin = async () => {
      const userData = await AsyncStorage.getItem('userData');
      console.log('USER', userData);
      if (!userData) {
        props.navigation.navigate('SignUp');
        return;
      }
      props.navigation.navigate('Home');
    };

    tryLogin();
  }, [dispatch]);

  return (
    <View style={styles.screen}>
      <Text style={styles.appName}>PyPhone</Text>
      <View style={styles.logoContainer}>
        <Image source={logo} style={styles.logo}></Image>
      </View>
      <ActivityIndicator size="large" color="grey" />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3498db',
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

export default StartUp;
