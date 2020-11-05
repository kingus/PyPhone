import axios from 'axios';
export const GET_EXERCISES = 'GET_EXERCISES';
export const SET_EXERCISES = 'SET_EXERCISES';

export const exercise = (id) => {
  return async (dispatch, getState) => {
    const token = getState().auth.token;
    console.log('ACTION EXERCISE, ', token);
    const endpoint = global.url + '/api/exercise/';
    axios.defaults.timeout = 10000;

    var config = {
      method: 'get',
      url: 'http://192.168.0.101:8000/api/exercise/',
      headers: {
        Authorization: 'Token ' + token,
      },
      params: {course_id: 6},
    };

    await axios(config)
      .then(async (response) => {
        console.log('RESPO', response.data.exercises);
        await dispatch({
          type: SET_EXERCISES,
          exercises: response.data.exercises,
        });
      })
      .catch((error) => {
        console.log(error);
        throw new Error('EXERCISE Something went wrong!');
      });
  };
};
