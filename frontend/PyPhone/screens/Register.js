import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {StyleSheet} from 'react-native';
import logo from '../images/logo.png';
import '../global.js';
import {useDispatch} from 'react-redux';
import * as authActions from '../store/actions/auth';
import LinearGradient from 'react-native-linear-gradient';
import {Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Register = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const [registerSuccess, setRegisterSuccess] = useState(false);
  const dispatch = useDispatch();

  const changePasswordHandler = (password) => {
    console.log(password);
    setPassword(password);
  };

  const changeRePasswordHandler = (password) => {
    console.log(password);
    setRePassword(password);
  };

  const changeUsernameHandler = (username) => {
    console.log(username);

    setUsername(username);
  };

  const authHandler = async () => {
    let action;
    action = authActions.register(username, password);
    setIsLoading(true);
    if (password === rePassword) {
      try {
        await dispatch(action);
        props.navigation.navigate({
          routeName: 'SignIn',
        });
      } catch (err) {
        console.log(err.message);
        setIsLoading(false);
      }
    } else {
      console.log('Passwords do not match.');
    }
  };

  const onClickLogin = () => {
    console.log('SWITCH');
    props.navigation.navigate({
      routeName: 'SignIn',
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
          <Text style={styles.sign_text}>
            Sign up and keep on learning Python...
          </Text>
        </View>
        <View style={styles.input_group}>
          <TextInput
            name="username"
            placeholder="Username"
            autoCapitalize="none"
            placeholderTextColor="rgba(255,255,255,0.7)"
            style={styles.input}
            selectionColor={'white'}
            onChangeText={(username) => changeUsernameHandler(username)}
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
          <TextInput
            name="repassword"
            placeholder="Repeat your password"
            secureTextEntry={true}
            autoCapitalize="none"
            placeholderTextColor="rgba(255,255,255,0.7)"
            style={styles.input}
            selectionColor={'white'}
            onChangeText={(rePassword) => changeRePasswordHandler(rePassword)}
          />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={() => authHandler()}>
            <Text style={styles.buttonText}>REGISTER</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => onClickLogin()} title="Login">
          <Text style={styles.bottomText}>
            Already have an account? LOG IN.
          </Text>
        </TouchableOpacity>

        {/* </View> */}
      </LinearGradient>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    height: windowHeight,
  },
  scroll: {
    flex: 1,
  },
  appName: {
    fontSize: 50,
    color: 'white',
    paddingTop: 50,
    textAlign: 'center',
  },
  logoContainer: {
    margin: 70,
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
    paddingTop: 80,
    alignItems: 'center',
  },
  logo: {
    height: 120,
    width: 120,
  },
  sign_text: {
    color: 'rgba(255,255,255,0.6)',
    textAlign: 'center',
    width: 300,
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
  bottomText: {
    fontSize: 14,
    fontFamily: 'OpenSansRegular',
    letterSpacing: 0,
    marginTop: 20,
    color: 'white',
    marginEnd: 0,
  },
  linearGradient: {
    flex: 1,
    alignItems: 'center',
    display: 'flex',
  },
});

export default Register;
