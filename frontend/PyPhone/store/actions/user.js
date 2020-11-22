import axios from 'axios';

export const user = (xp, course) => {
  return async (dispatch, getState) => {
    const endpoint = global.url + '/api/profile/';
    const payload = {xp: xp, course: course};

    axios.defaults.timeout = 10000;

    const headers = {
      Authorization: 'Token 493e77275ee813c6a1aa7ab20aac0af7eb8a43bb',
      'Content-Type': 'application/json',
    };

    console.log('TU USER COURSE ', course);
    console.log('TU USER XP ', xp);

    await axios
      .post(endpoint, payload, {headers})
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error.message);
        throw new Error('Something went wrong!');
      });
  };
};
