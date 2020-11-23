import {GET_COURSES, SET_COURSES, SET_ACTIVE_COURSES} from '../actions/course';

const initialState = {
  userCourses: [],
};

export default (state = initialState, action) => {
  console.log('AAAAA', state.userCourses);
  console.log('action.course', action.course);
  let newCourses = state.userCourses.map((userCourse) => {
    if (userCourse.id === action.course + 1) {
      console.log(userCourse.id);
      return {...userCourse, active: true};
    } else {
      return {
        ...userCourse,
      };
    }
  });
  console.log(newCourses);

  switch (action.type) {
    case GET_COURSES:
      return {
        userCourses: userCourses,
      };
    case SET_COURSES:
      return {
        userCourses: action.userCourses,
        activeCoursesAmount: action.activeCoursesAmount,
      };
    case SET_ACTIVE_COURSES:
      return {
        userCourses: newCourses,
        activeCoursesAmount: activeCoursesAmount + 1,
      };

    default:
      return state;
  }
};
