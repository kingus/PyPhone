import React from 'react';

import {createAppContainer} from 'react-navigation';
import Lecture from '../screens/Lecture';
import Home from '../screens/Home';
import Final from '../screens/Final';
import Exercises from '../screens/Exercises';
import Lecture3 from '../lectures/Lecture3';
import Lecture2 from '../lectures/Lecture2';
import Lecture1 from '../lectures/Lecture1';
import Lecture10 from '../lectures/Lecture10';
import Lecture11 from '../lectures/Lecture11';
import Lecture12 from '../lectures/Lecture12';
import Lecture9 from '../lectures/Lecture9';
import TabNavigator from './TabNavigator';
import {createStackNavigator, HeaderBackButton} from 'react-navigation-stack';
import {StyleSheet} from 'react-native';
import DrawerNavigator from './DrawerNavigator';

export default AppNavigator = createStackNavigator({
  // TabNav: {
  //   screen: TabNavigator,
  //   navigationOptions: {
  //     headerShown: false,
  //     showLabel: false,
  //   },
  // },

  DrawerNav: {
    screen: DrawerNavigator,
    navigationOptions: {
      headerShown: false,
      showLabel: false,
    },
  },
  // Lecture: {
  //   screen: Lecture,

  //   navigationOptions: ({navigation}) => ({
  //     headerStyle: {
  //       // borderBottomColor: '#eeeeee',
  //       // borderBottomWidth: 1,
  //     },
  //     headerTitle: 'Lekcja 1',
  //     headerTitleStyle: {color: '#676767'},
  //     // headerStyle: {backgroundColor: '#fff271'},
  //     headerTintColor: 'blue',
  //     headerLeft: (
  //       <HeaderBackButton
  //         tintColor={'#676767'}
  //         onPress={() => navigation.navigate('Home')}
  //       />
  //     ),
  //   }),
  // },
  Exercises: {screen: Exercises},
  Lecture: {screen: Lecture},

  Lecture6: {screen: Lecture1},
  Lecture7: {screen: Lecture2},
  Lecture8: {screen: Lecture3},
  Lecture9: {screen: Lecture9},
  Lecture10: {screen: Lecture10},
  Lecture11: {screen: Lecture11},
  Lecture12: {screen: Lecture12},

  Final: {
    screen: Final,
    navigationOptions: {
      headerShown: false,
      showLabel: false,
    },
  },
});

//export default createAppContainer(AppNavigator);
const styles = StyleSheet.create({
  backButton: {
    backgroundColor: '#abf0ff',
  },
});
