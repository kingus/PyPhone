import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';
import React from 'react';
import Home from '../screens/Home';
import Icon from 'react-native-vector-icons/FontAwesome';
import User from '../screens/User';
import Final from '../screens/Final';
import Achievements from '../screens/Achievements';
import Editor2 from '../screens/Editor2';

const TabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarLabel: null,
        headerShown: false,

        tabBarIcon: ({focused}) => (
          <Icon name="home" size={25} color={focused ? '#abf0ff' : '#dbdbdb'} />
        ),
      },
    },

    Editor: {
      screen: Editor2,
      navigationOptions: {
        headerShown: false,
        tabBarIcon: ({focused}) => (
          <Icon name="code" size={25} color={focused ? '#abf0ff' : '#dbdbdb'} />
        ),
      },
    },
    User: {
      screen: User,
      navigationOptions: {
        headerShown: false,
        tabBarIcon: ({focused}) => (
          <Icon name="user" size={25} color={focused ? '#abf0ff' : '#dbdbdb'} />
        ),
      },
    },
    Lecture: {
      screen: Achievements,
      navigationOptions: {
        tabBarIcon: ({focused}) => (
          <Icon
            name="trophy"
            size={25}
            color={focused ? '#abf0ff' : '#dbdbdb'}
          />
        ),
      },
    },
  },
  {
    tabBarOptions: {
      showLabel: false,
      style: {borderTopWidth: 0, activeTintColor: '#81B247'},
    },
  },
);

export default createAppContainer(TabNavigator);
