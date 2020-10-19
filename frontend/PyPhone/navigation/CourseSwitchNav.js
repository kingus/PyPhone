import {createAppContainer} from 'react-navigation';
import Lecture from '../screens/Lecture';
import Home from '../screens/Home';
import {createStackNavigator} from 'react-navigation-stack';

const CourseSwitchNavigator = createStackNavigator(
  {
    Lecture: Lecture,
  },
  {
    navigationOptions: ({navigation}) => ({
      tabBarVisible: false,
    }),
  },
);

export default createAppContainer(CourseSwitchNavigator);
