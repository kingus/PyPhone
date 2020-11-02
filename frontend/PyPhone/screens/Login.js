import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  Image,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import {StyleSheet} from 'react-native';
import logo from '../images/logo.png';
import * as authActions from '../store/actions/auth';
import {useDispatch} from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import * as courseActions from '../store/actions/course';

const Login = (props) => {
  const dispatch = useDispatch();
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const changePasswordHandler = (password) => {
    console.log(password);
    setPassword(password);
  };

  const changeUsernameHandler = (username) => {
    console.log(username);
    setUsername(username);
  };

  const authHandler = async () => {
    let action, action2;
    action = authActions.login(username, password);

    setIsLoading(true);
    try {
      await dispatch(action);
      await coursesHandler();

      props.navigation.navigate({
        routeName: 'TabNav',
      });
    } catch (err) {
      console.log(err.message);
      setIsLoading(false);
    }
  };

  const coursesHandler = async () => {
    let action;
    const token = await courseActions.getUserToken();
    console.log('TU TOKEN ', token);
    action = courseActions.course(token);
    try {
      await dispatch(action);
      console.log('COURSE SUCCESS');
    } catch (err) {
      console.log(err.message);
    }
  };

  const onClickRegister = () => {
    console.log('SWITCH');
    props.navigation.navigate({
      routeName: 'SignUp',
    });
  };

  return (
    <ScrollView style={styles.container}>
      <LinearGradient
        colors={['#34adf9', '#67c4ff', '#34adf9']}
        style={styles.linearGradient}>
        <Text style={styles.appName}>PyPhone</Text>
        <View style={styles.logoContainer}>
          <Image source={logo} style={styles.logo}></Image>
          <Text style={styles.signText}>
            Sign in and keep on learning Python...
          </Text>
        </View>

        <View style={styles.input_group}>
          <TextInput
            name="username"
            placeholder="Username"
            autoCapitalize="none"
            placeholderTextColor="rgba(255,255,255,0.7)"
            onChangeText={(username) => changeUsernameHandler(username)}
            style={styles.input}
            selectionColor={'white'}
          />
          <TextInput
            name="password"
            placeholder="Password"
            secureTextEntry={true}
            autoCapitalize="none"
            placeholderTextColor="rgba(255,255,255,0.7)"
            style={styles.input}
            selectionColor={'white'}
            onChangeText={(password) => changePasswordHandler(password)}
          />
        </View>
        {/* <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => authHandler()}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
      </View> */}

        {isLoading ? (
          <ActivityIndicator size="small" color="grey" />
        ) : (
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => authHandler()}>
              <Text style={styles.buttonText}>LOGIN</Text>
            </TouchableOpacity>
          </View>
        )}

        <TouchableOpacity onPress={() => onClickRegister()}>
          <Text style={styles.bottomText}>
            Don't have an account? REGISTER.
          </Text>
        </TouchableOpacity>
      </LinearGradient>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#3498db',
    display: 'flex',
    flex: 1,
    // alignItems: 'center',
  },
  appName: {
    fontSize: 50,
    color: 'white',
    paddingTop: 50,
    textAlign: 'center',
    fontFamily: 'OpenSansRegular',
    letterSpacing: 0,
  },
  logoContainer: {
    margin: 80,
    flexDirection: 'column',
    alignItems: 'center',
  },
  input: {
    height: 40,
    backgroundColor: 'rgba(255,255,255,0.2)',
    marginBottom: 20,
    color: 'white',
    paddingHorizontal: 10,
    width: 350,
  },
  input_group: {
    paddingTop: 100,
    alignItems: 'center',
  },
  logo: {
    height: 120,
    width: 120,
  },
  signText: {
    color: 'rgba(255,255,255,0.6)',
    textAlign: 'center',
    width: 300,
    fontFamily: 'OpenSansRegular',
  },
  buttonContainer: {
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#2980b9',
    paddingVertical: 15,
    width: 250,
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontWeight: '700',
  },
  linearGradient: {
    flex: 1,
    alignItems: 'center',
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
    display: 'flex',
  },

  bottomText: {
    fontSize: 14,
    fontFamily: 'OpenSansRegular',
    letterSpacing: 0,
    marginTop: 20,
    color: 'white',
    marginEnd: 0,
  },
});

export default Login;
