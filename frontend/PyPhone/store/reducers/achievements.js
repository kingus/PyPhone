import {SET_ACHIEVEMENTS} from '../actions/achievements';

const initialState = {
  achievementsList: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_ACHIEVEMENTS:
      console.log('REDUCER ACHIEVEMENTS');
      return {
        achievementsList: action.achievementsList,
      };
    default:
      return state;
  }
};
