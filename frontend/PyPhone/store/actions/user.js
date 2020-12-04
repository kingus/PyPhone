import axios from 'axios';

export const user = (xp, course, unlock) => {
  return async (dispatch, getState) => {
    const endpoint = global.url + '/api/profile/';
    const payload = {xp: xp, course: course, unlock: unlock};

    axios.defaults.timeout = 10000;

    const headers = {
      // Authorization: 'Token 493e77275ee813c6a1aa7ab20aac0af7eb8a43bb',
      Authorization: 'Token ' + token,

      'Content-Type': 'application/json',
    };

    await axios
      .post(endpoint, payload, {headers})
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error.message);
        throw new Error('User something went wrong!');
      });
  };
};
