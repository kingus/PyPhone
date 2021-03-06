import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import Home from '../screens/Home';
import AuthNavigator from './AuthNavigator';
import TabNavigator from './TabNavigator';
import AppNavigator from './AppNavigator';

const MainNavigator = createSwitchNavigator({
  Auth: AuthNavigator,
  AppNavigator: AppNavigator,
});

export default createAppContainer(MainNavigator);
