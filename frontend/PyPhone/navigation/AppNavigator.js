import React from 'react';

import {createAppContainer} from 'react-navigation';
import Lecture from '../screens/Lecture';
import Home from '../screens/Home';
import Exercise from '../screens/Exercise';
import TabNavigator from './TabNavigator';
import {createStackNavigator, HeaderBackButton} from 'react-navigation-stack';
import {StyleSheet} from 'react-native';

export default AppNavigator = createStackNavigator({
  // Home: {
  //   screen: Home,
  //   navigationOptions: {
  //     header: null,
  //   },
  // },
  TabNav: {
    screen: TabNavigator,
    navigationOptions: {
      headerShown: false,
      showLabel: false,
    },
  },

  Exercise: {screen: Exercise},

  Lecture: {
    screen: Lecture,

    navigationOptions: ({navigation}) => ({
      headerStyle: {
        // borderBottomColor: '#eeeeee',
        // borderBottomWidth: 1,
      },
      headerTitle: 'Lekcja 1',
      headerTitleStyle: {color: '#676767'},
      // headerStyle: {backgroundColor: '#fff271'},
      headerTintColor: 'blue',
      headerLeft: (
        <HeaderBackButton
          tintColor={'#676767'}
          onPress={() => navigation.navigate('Home')}
        />
      ),
    }),
  },
});

//export default createAppContainer(AppNavigator);
const styles = StyleSheet.create({
  backButton: {
    backgroundColor: '#abf0ff',
  },
});
