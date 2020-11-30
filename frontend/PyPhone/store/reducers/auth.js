import {LOGIN} from '../actions/auth';
import {SET_PROFILE} from '../actions/auth';
import {CHANGE_PROFILE} from '../actions/auth';

const initialState = {
  token: null,
  username: null,
  xp: null,
  activeCourses: null,
  activeDays: null,
  badges: null,
  countDatesList: [{}],
  todaysXp: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        token: action.token,
        username: action.username,
      };
    case SET_PROFILE:
      return {
        xp: action.xp,
        activeCourses: action.activeCourses,
        activeDays: action.activeDays,
        badges: action.badges,
        countDatesList: action.countDatesList,
        todaysXp: action.todaysXp,
      };
    case CHANGE_PROFILE:
      var today = new Date();
      var date =
        today.getFullYear() +
        '-' +
        parseInt(today.getMonth() + 1) +
        '-' +
        today.getDate();

      let newDates = state.countDatesList.map((countDate) => {
        if (countDate['date'] === date) {
          return {...countDate, count: countDate['count'] + 1};
        } else {
          return {
            ...countDate,
          };
        }
      });
      console.log('newDates ', newDates);
      return {
        xp: state.xp + action.xp,
        activeCourses: action.activeCourses,
        activeDays: state.activeDays,
        //do zmiany
        badges: 2,
        countDatesList: newDates,
        //nie odejmuje poprzedniego wyniku dla kursu
        todaysXp: state.todaysXp + action.xp,
      };

    default:
      return state;
  }
};
