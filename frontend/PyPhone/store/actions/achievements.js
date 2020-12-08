import axios from 'axios';
export const SET_ACHIEVEMENTS = 'SET_ACHIEVEMENTS';
export const UPDATE_ACHIEVEMENTS = 'UPDATE_ACHIEVEMENTS';
export const RESET_NEW_ACHIEVEMENTS = 'RESET_NEW_ACHIEVEMENTS';

export const getAchievements = () => {
  return async (dispatch, getState) => {
    const endpoint = global.url + '/api/users-achievement/';
    axios.defaults.timeout = 10000;
    console.log(endpoint);
    let token = getState().auth.token;

    await axios
      .get(endpoint, {
        headers: {
          // Authorization: 'Token ' + token,

          Authorization: 'Token 493e77275ee813c6a1aa7ab20aac0af7eb8a43bb',
        },
      })
      .then((response) => {
        console.log('ACHIEVEMENTS: ', response.data.achievements);
        dispatch({
          type: SET_ACHIEVEMENTS,
          achievementsList: response.data.achievements,
        });
        console.log('END ACHIEVEMENTS');
      })
      .catch((error) => {
        console.log(error);
        throw new Error('Achievements something went wrong!');
      });
  };
};
export const updateAchievements = () => {
  return async (dispatch, getState) => {
    const endpoint = global.url + '/api/users-achievement/';
    const payload = {};
    const token = getState().auth.token;

    axios.defaults.timeout = 10000;

    const headers = {
      Authorization: 'Token 493e77275ee813c6a1aa7ab20aac0af7eb8a43bb',
      // Authorization: 'Token ' + token,
      'Content-Type': 'application/json',
    };

    await axios
      .post(endpoint, payload, {headers})
      .then((response) => {
        console.log(
          'UPDATE ACHIEVEMENTS RESPONSE',
          response.data.newAchievements,
        );
        dispatch({
          type: UPDATE_ACHIEVEMENTS,
          newAchievementsAll: response.data.newAchievements,
        });
      })
      .catch((error) => {
        console.log(error.message);
        throw new Error('UPDATE ACIEVEMENTS something went wrong!');
      });
  };
};
export const resetNewAchievements = () => {
  return async (dispatch, getState) => {
    dispatch({
      type: RESET_NEW_ACHIEVEMENTS,
    });
  };
};
