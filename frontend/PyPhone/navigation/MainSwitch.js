import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import Home from '../screens/Home';
import AuthNavigator from './AuthNavigator';
import TabNavigator from './TabNavigator';
import CourseSwitchNav from './CourseSwitchNav';

const MainNavigator = createSwitchNavigator({
  Auth: {screen: AuthNavigator},
  TabNav: {
    screen: TabNavigator,
  },
  CourseSwitchNav: {screen: CourseSwitchNav},
});

export default createAppContainer(MainNavigator);
