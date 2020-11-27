import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const SET_XP = 'SET_XP';
export const ADD_XP = 'ADD_XP';

export const login = (username, password) => {
  return async (dispatch) => {
    const endpoint = global.url + '/auth/login/';
    const payload = {username: username, password: password};
    axios.defaults.timeout = 10000;
console.log(endpoint)

    await axios
      .post(endpoint, payload)
      .then((response) => {
        const {token} = response.data;
        console.log(response.status);
        setUserData(token, username);
        dispatch({
          type: LOGIN,
          username: username,
          token: token,
        });
      })
      .catch((error) => {
        console.log(error);
        throw new Error('Something went wrong!');
      });
  };
};

export const get_profile = () => {
  return async (dispatch, getState) => {
    const token = getState().auth.token;
    const endpoint = global.url + '/api/profile/';
    axios.defaults.timeout = 10000;

    var config = {
      method: 'get',
      url: endpoint,
      headers: {
        Authorization: 'Token ' + token,
      },
    };
    console.log(endpoint);
    await axios(config)
      .then(async (response) => {
        console.log('RESPO XP', response.data.profile[0]['xp']);
        await dispatch({
          type: SET_XP,
          xp: response.data.profile[0]['xp'],
        });
      })
      .catch((error) => {
        console.log(error);
        throw new Error('XP Something went wrong!');
      });
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

export const logout = () => {
  AsyncStorage.removeItem('userData');
  return {type: LOGOUT};
};

const setUserData = (token, username) => {
  try {
    AsyncStorage.setItem(
      'userData',
      JSON.stringify({
        token: token,
        username: username,
      }),
    );
    console.log('setUserData SUCCESS');
  } catch (error) {
    console.log('ERROR');
  }
};

export const xp = (newXp, course) => {
  return async (dispatch, getState) => {
    await dispatch({
      type: ADD_XP,
      xp: newXp,
      course: course
    });
  };
};
