import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Home from '../screens/Home';
import Login from '../screens/Login';
import Register from '../screens/Register';

const Nav = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      headerShown: false,
    },
  },

  Home: {
    screen: Home,
  },
});

export default createAppContainer(Nav);
