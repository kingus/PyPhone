import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const SET_PROFILE = 'SET_PROFILE';
export const CHANGE_PROFILE = 'CHANGE_PROFILE';

export const login = (username, password) => {
  return async (dispatch) => {
    const endpoint = global.url + '/auth/login/';
    const payload = {username: username, password: password};
    axios.defaults.timeout = 10000;
    console.log(endpoint);

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
    let token = getState().auth.token;
    // token = '493e77275ee813c6a1aa7ab20aac0af7eb8a43bb';
    // const endpoint = global.url + '/api/profile/';
    const endpoint = global.url + '/api/profile-info/';
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
        console.log('RESPO', response.data);
        console.log('XP', response.data.countDatesList);
        await dispatch({
          type: SET_PROFILE,
          xp: response.data.xp,
          activeCourses: response.data.activeCourses,
          activeDays: response.data.activeDays,
          achievements: response.data.achievements,
          countDatesList: response.data.countDatesList,
          todaysXp: response.data.todaysXp,
          username: response.data.username,
          avatar: response.data.avatar,
        });
      })
      .catch((error) => {
        console.log(error);
        throw new Error('XP Something went wrong!');
      });
  };
};

export const register = (username, password, avatar) => {
  return async (dispatch) => {
    const endpoint = global.url + '/auth/register/';
    const payload = {username: username, password: password, avatar: avatar};
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

export const xp = (newXp, course, activeCourses) => {
  return async (dispatch, getState) => {
    await dispatch({
      type: CHANGE_PROFILE,
      xp: newXp,
      course: course,
      activeCourses: activeCourses,
      // activeDays: activeDays,
      // badges: badges,
      // todaysXp: action.todaysXp,
    });
  };
};
