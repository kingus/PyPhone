import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
export const COURSE = 'COURSE';
export const LOAD_DATA = 'LOAD_DATA';
export const GET_COURSES = 'GET_COURSES';
export const SET_COURSES = 'SET_COURSES';

export const course = () => {
  return async (dispatch, getState) => {
    const token = getState().auth.token;
    console.log('ACTION COURSE, ', token);
    const endpoint = global.url + '/api/users-course/';
    axios.defaults.timeout = 10000;

    await axios
      .get(endpoint, {
        headers: {
          Authorization: 'Token ' + token,
        },
      })
      .then((response) => {
        dispatch({type: SET_COURSES, userCourses: response.data.users_courses});
      })
      .catch((error) => {
        console.log(error);
        throw new Error('COURSE Something went wrong!');
      });
  };
};
