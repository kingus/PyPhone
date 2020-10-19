import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';
import React from 'react';

import Home from '../screens/Home';
import Icon from 'react-native-vector-icons/FontAwesome';
import Lecture from '../screens/Lecture';
import CourseSwitchNav from './CourseSwitchNav';
const TabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarLabel: null,
        tabBarIcon: () => <Icon name="home" size={25} color="grey" />,
      },
    },

    User: {
      screen: Home,
      navigationOptions: {
        tabBarIcon: () => <Icon name="user" size={25} color="grey" />,
      },
    },
    // Lecture: {
    //   screen: Lecture,
    //   navigationOptions: {
    //     tabBarIcon: () => <Icon name="book" size={25} color="grey" />,
    //   },
    // },
  },
  {
    tabBarOptions: {
      showLabel: false,
      style: {borderTopWidth: 0},
    },
  },
);

export default createAppContainer(TabNavigator);
