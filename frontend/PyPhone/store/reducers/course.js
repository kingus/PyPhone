import {GET_COURSES, SET_COURSES} from '../actions/course';

const initialState = {
  userCourses: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_COURSES:
      return {
        userCourses: userCourses,
      };
    case SET_COURSES:
      return {
        userCourses: action.userCourses,
      };
    default:
      return state;
  }
};
