import axios from 'axios';
export const GET_EXERCISES = 'GET_EXERCISES';
export const SET_EXERCISES = 'SET_EXERCISES';

export const exercise = (id) => {
  return async (dispatch, getState) => {
    const token = getState().auth.token;
    // token = '493e77275ee813c6a1aa7ab20aac0af7eb8a43bb';
    console.log('ACTION EXERCISE, ', token);
    const endpoint = global.url + '/api/exercise/';
    axios.defaults.timeout = 10000;
    console.log('ID', id);

    var config = {
      method: 'get',
      url: endpoint,
      headers: {
        // Authorization: 'Token 493e77275ee813c6a1aa7ab20aac0af7eb8a43bb',
        Authorization: 'Token ' + token,
      },
      params: {course_id: id},
    };

    await axios(config)
      .then(async (response) => {
        console.log('RESPONSE EXERCISE', response.data.exercises);
        console.log('PRINT XP ', response.data.xp);

        await dispatch({
          type: SET_EXERCISES,
          exercises: response.data.exercises,
          xp: response.data.xp,
        });
      })
      .catch((error) => {
        console.log(error);
        throw new Error('EXERCISE Something went wrong!');
      });
  };
};
