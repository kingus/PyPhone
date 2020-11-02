import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
export const COURSE = 'COURSE';
export const LOAD_DATA = 'LOAD_DATA';
export const GET_COURSES = 'GET_COURSES';
export const SET_COURSES = 'SET_COURSES';

export const course = () => {
  return async (dispatch, getState) => {
    console.log('POCZĄTEK');
<<<<<<< HEAD
    const username = getState().auth.username;
    console.log('REDUCER, ', username);

=======
>>>>>>> 08c577f475ebec72037418c4eaf3df15e5fa99ed
    const endpoint = global.url + '/api/users-course/';
    const userData = '';
    axios.defaults.timeout = 10000;
    const token = await getUserToken();
    console.log(token);
    console.log('COURSE PRZED');

    await axios
      .get(endpoint, {
        headers: {
          Authorization: 'Token ' + token,
        },
      })
      .then((response) => {
        console.log('COURSE DATA');
        console.log(response.status);
        console.log(response.data);
        const dane = response.data.users_courses;
        console.log(dane);
        dane.map(function (item) {
          console.log('ITEM ', item);
        });

        setCourses(dane);
        // return dane;
      })
      .catch((error) => {
        console.log(error);
        throw new Error('COURSE Something went wrong!');
      });

    dispatch({type: COURSE});
  };
};

export const getUserToken = async () => {
  try {
    const userData = await AsyncStorage.getItem('userData');
    const transformedData = JSON.parse(userData);
    const {token, username} = transformedData;
    console.log('GET USER TOKEN ', token);
    return token;
  } catch (error) {
    console.log('getUserToken ERROR');
  }
  dispatch({type: LOAD_DATA});
};

const setCourses = (courses) => {
  try {
    AsyncStorage.setItem(
      'courses',
      JSON.stringify({
        courses: courses,
      }),
    );
    console.log('setCourses SUCCESS');
  } catch (error) {
    console.log('setCourses ERROR');
  }
};
export const getCourses = () => {
  return async (dispatch) => {
    try {
      const courses = await AsyncStorage.getItem('courses');
      const transformedData = JSON.parse(courses);
      console.log('getCourses, ', transformedData.courses);
      return transformedData.courses;
    } catch (error) {
      console.log('getCourses ERROR');
      throw new Error('getCourses something went wrong!');
    }
    dispatch({type: COURSE});
  };
};
