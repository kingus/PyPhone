import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Register from '../screens/Register';
import Login from '../screens/Login';
import StartUp from '../screens/StartUp';

const AuthNavigator = createStackNavigator(
  {
    StartUp: StartUp,
    SignIn: Login,
    SignUp: Register,
  },
  {
    defaultNavigationOptions: {
      headerShown: false,
    },
  },
);

export default createAppContainer(AuthNavigator);
