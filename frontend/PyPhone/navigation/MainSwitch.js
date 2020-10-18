import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import Home from '../screens/Home';
import AuthNavigator from './AuthNavigator';

const MainNavigator = createSwitchNavigator({
  Auth: AuthNavigator,
  Home: Home,
});

export default createAppContainer(MainNavigator);
