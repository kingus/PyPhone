import axios from 'axios';
export const SET_ACHIEVEMENTS = 'SET_ACHIEVEMENTS';

export const getAchievements = () => {
  return async (dispatch, getState) => {
    const endpoint = global.url + '/api/users-achievement/';
    axios.defaults.timeout = 10000;
    console.log(endpoint);
    let token = getState().auth.token;

    await axios
      .get(endpoint, {
        headers: {
          Authorization: 'Token ' + token,

          // Authorization: 'Token 493e77275ee813c6a1aa7ab20aac0af7eb8a43bb',
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
