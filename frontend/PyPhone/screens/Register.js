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
import Nav from '../components/Nav';
import '../global.js';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const [registerSuccess, setRegisterSuccess] = useState(false);

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

  const onClickRegister = () => {
    console.log(username);
    if (password === rePassword) {
      register();
    } else {
      console.log('Passwords do not match.');
    }
  };

  const register = () => {
    console.log(username);
    console.log(password);
    const endpoint = global.url + '/auth/register/';
    const payload = {username: username, password: password};
    axios.defaults.timeout = 10000;

    axios
      .post(endpoint, payload)
      .then((response) => {
        const {token, user} = response.data;
        console.log(response.data);
        // We set the returned token as the default authorization header
        // axios.defaults.headers.common.Authorization = `Token ${token}`;
        setRegisterSuccess(true);
        console.log(registerSuccess);

        // // Navigate to the home screen
        // Actions.main();
      })
      .catch((error) => {
        console.log(error.message);
        setRegisterSuccess(false);
        console.log(registerSuccess);
      });
  };

  return (
    <ScrollView style={styles.container}>
      {/* <View style={styles.container}> */}
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
        <TouchableOpacity
          style={styles.button}
          onPress={() => onClickRegister()}>
          <Text style={styles.buttonText}>REGISTER</Text>
        </TouchableOpacity>
      </View>

      {/* </View> */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3498db',
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
});

export default Register;
