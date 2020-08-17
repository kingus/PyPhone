import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Home from './Home';
import Login from './Login';

const Nav = createStackNavigator(
  {
    Login: {
      screen: Login,
    },
    Home: {
      screen: Home,
    },
  },
  {
    headerMode: 'none',
  },
);

export default createAppContainer(Nav);
