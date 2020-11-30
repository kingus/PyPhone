import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import {StyleSheet} from 'react-native';
import * as authActions from '../store/actions/auth';
import {useDispatch} from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import * as courseActions from '../store/actions/course';
import {Dimensions} from 'react-native';
import SpinningLogo from '../components/SpinningLogo';
import AnimatedText from '../components/AnimatedText';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

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
    let action;
    action = authActions.login(username, password);

    setIsLoading(true);
    try {
      await dispatch(action);
      await coursesHandler();
      // await getProfile();
      props.navigation.navigate({
        routeName: 'DrawerNav',
      });
    } catch (err) {
      console.log(err.message);
      setIsLoading(false);
    }
  };

  const coursesHandler = async () => {
    let action;
    action = courseActions.course();
    try {
      await dispatch(action);
      console.log('COURSE SUCCESS');
    } catch (err) {
      console.log(err.message);
    }
    await getProfile();
  };

  const getProfile = async () => {
    let action;
    action = authActions.get_profile();
    try {
      dispatch(action);
      console.log('XP SUCCESS');
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
          <SpinningLogo></SpinningLogo>
          <AnimatedText></AnimatedText>
        </View>

        <View style={styles.input_group}>
          <TextInput
            name="username"
            placeholder="Podaj login"
            autoCapitalize="none"
            placeholderTextColor="rgba(255,255,255,0.7)"
            onChangeText={(username) => changeUsernameHandler(username)}
            style={styles.input}
            selectionColor={'white'}
          />
          <TextInput
            name="password"
            placeholder="Podaj hasło"
            secureTextEntry={true}
            autoCapitalize="none"
            placeholderTextColor="rgba(255,255,255,0.7)"
            style={styles.input}
            selectionColor={'white'}
            onChangeText={(password) => changePasswordHandler(password)}
          />
        </View>

        {isLoading ? (
          <ActivityIndicator size="small" color="grey" />
        ) : (
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => authHandler()}>
              <Text style={styles.buttonText}>ZALOGUJ SIĘ</Text>
            </TouchableOpacity>
          </View>
        )}

        <TouchableOpacity onPress={() => onClickRegister()}>
          <Text style={styles.bottomText}>
            Nie masz jeszcze konta? ZAREJESTRUJ SIĘ.
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
    paddingTop: 50,
    textAlign: 'center',
    fontFamily: 'OpenSansRegular',
    letterSpacing: 0,
    textAlign: 'center',
    fontSize: 50,
    fontWeight: '700',
    letterSpacing: 0.1,
    color: '#ffe25b',
    textShadowColor: 'rgba(0, 0, 0, 0.45)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
  },
  logoContainer: {
    margin: 40,
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
    marginTop: 50,
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
    height: windowHeight,
    alignItems: 'center',
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
