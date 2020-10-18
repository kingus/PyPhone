import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

export const LOGIN = 'LOGIN';

export const login = (username, password) => {
  return async (dispatch) => {
    const endpoint = global.url + '/auth/login/';
    const payload = {username: username, password: password};
    axios.defaults.timeout = 10000;

    await axios
      .post(endpoint, payload)
      .then((response) => {
        const {token} = response.data;
        console.log(response.status);
        saveDataToStorage(token, username);
      })
      .catch((error) => {
        console.log(error);
        throw new Error('Something went wrong!');
      });

    dispatch({type: LOGIN});
  };
};

export const register = (username, password) => {
  return async (dispatch) => {
    const endpoint = global.url + '/auth/register/';
    const payload = {username: username, password: password};
    axios.defaults.timeout = 10000;

    await axios
      .post(endpoint, payload)
      .then((response) => {
        const {token} = response.data;
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error.message);
        throw new Error('Something went wrong!');
      });
  };
};

const saveDataToStorage = (token, username) => {
  AsyncStorage.setItem(
    'userData',
    JSON.stringify({
      token: token,
      username: username,
    }),
  );
};
