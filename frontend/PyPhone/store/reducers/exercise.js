import {SET_EXERCISES, GET_EXERCISES} from '../actions/exercise';

const initialState = {
  userExercises: [0, 0, 0, 0],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_EXERCISES:
      return {
        userExercises: userExercises,
      };
    case SET_EXERCISES:
      return {
        userExercises: action.exercises,
      };
    default:
      return state;
  }
};
