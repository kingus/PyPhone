import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import Home from '../screens/Home';
import AuthNavigator from './AuthNavigator';
import TabNavigator from './TabNavigator';

const MainNavigator = createSwitchNavigator({
  Auth: AuthNavigator,
  TabNav: TabNavigator,
});

export default createAppContainer(MainNavigator);
