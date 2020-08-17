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
import axios from 'axios';
import logo from '../images/logo.png';
import Nav from './Nav';
import '../global.js';

const Login = (props) => {
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [isAuthorized, setIsAuthorized] = useState(false);

  const changePasswordHandler = (password) => {
    console.log(password);
    setPassword(password);
  };

  const changeUsernameHandler = (username) => {
    console.log(username);

    setUsername(username);
  };

  const onClickLogin = () => {
    console.log(username);
    login();
  };

  const login = () => {
    console.log(username);
    console.log(password);
    console.log(global.url);
    // const endpoint = global.url + '/auth/login/';
    const endpoint = 'http://192.168.0.101:8000/auth/login/';
    console.log(endpoint);
    const payload = {username: username, password: password};
    axios.defaults.timeout = 10000;

    axios
      .post(endpoint, payload)
      .then((response) => {
        const {token, user} = response.data;
        console.log(response.data);
        // We set the returned token as the default authorization header
        // axios.defaults.headers.common.Authorization = `Token ${token}`;
        setIsAuthorized(true);
        console.log(isAuthorized);
        // props.navigation.navigate({
        //   routeName: 'Home',
        // });
      })
      .catch((error) => {
        console.log(error);
        setIsAuthorized(false);
        console.log(isAuthorized);
      });
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.appName}>PyPhone</Text>
      <View style={styles.logoContainer}>
        <Image source={logo} style={styles.logo}></Image>
        <Text style={styles.sign_text}>
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
        />
        <TextInput
          name="password"
          placeholder="Password"
          secureTextEntry={true}
          autoCapitalize="none"
          placeholderTextColor="rgba(255,255,255,0.7)"
          style={styles.input}
          onChangeText={(password) => changePasswordHandler(password)}
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => onClickLogin()}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
      </View>

      {/* <Button onPress={() => onClickLogin()} title="Login"></Button> */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3498db',
    // alignItems: 'center',
  },
  appName: {
    fontSize: 50,
    color: 'white',
    paddingTop: 50,
    textAlign: 'center',
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
});

export default Login;
