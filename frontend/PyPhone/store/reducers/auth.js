import {LOGIN} from '../actions/auth';
import {SET_XP} from '../actions/auth';
import {ADD_XP} from '../actions/auth';

const initialState = {
  token: null,
  username: null,
  xp: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        token: action.token,
        username: action.username,
      };
    case SET_XP:
      return {
        xp: action.xp,
      };
    case ADD_XP:
      return {
        xp: state.xp + action.xp,
      };
    default:
      return state;
  }
};
