import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';
import React from 'react';
import Home from '../screens/Home';
import Icon from 'react-native-vector-icons/FontAwesome';

const TabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarLabel: null,
        headerShown: false,

        tabBarIcon: ({focused}) => (
<<<<<<< HEAD
          <Icon name="home" size={25} color={focused ? '#abf0ff' : '#dbdbdb'} />
=======
          <Icon name="home" size={25} color={focused ? '#34adf9' : '#dbdbdb'} />
>>>>>>> 08c577f475ebec72037418c4eaf3df15e5fa99ed
        ),
      },
    },

    User: {
      screen: Home,
      navigationOptions: {
        headerShown: false,
        tabBarIcon: ({focused}) => (
<<<<<<< HEAD
          <Icon name="user" size={25} color={focused ? '#abf0ff' : '#dbdbdb'} />
=======
          <Icon name="user" size={25} color={focused ? '#34adf9' : 'grey'} />
>>>>>>> 08c577f475ebec72037418c4eaf3df15e5fa99ed
        ),
        // tabBarIcon: () => <Icon name="user" size={25} color="grey" />,
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
      style: {borderTopWidth: 0, activeTintColor: '#81B247'},
    },
  },
);

export default createAppContainer(TabNavigator);
