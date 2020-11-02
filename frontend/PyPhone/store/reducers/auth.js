import {LOGIN} from '../actions/auth';

const initialState = {
  token: null,
  username: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        token: action.token,
        username: action.username,
      };
    default:
      return state;
  }
};
