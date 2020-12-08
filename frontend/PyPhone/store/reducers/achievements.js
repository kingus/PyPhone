import {SET_ACHIEVEMENTS} from '../actions/achievements';
import {UPDATE_ACHIEVEMENTS} from '../actions/achievements';
import {RESET_NEW_ACHIEVEMENTS} from '../actions/achievements';

const initialState = {
  achievementsList: [],
  newAchievementsAll: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_ACHIEVEMENTS:
      console.log('REDUCER ACHIEVEMENTS');
      return {
        achievementsList: action.achievementsList,
        newAchievementsAll: [],
      };

    case UPDATE_ACHIEVEMENTS:
      console.log('UPDATE_ACHIEVEMENTS REDUCER ', action.newAchievementsAll);
      console.log(
        'UPDATE_ACHIEVEMENTS newAchievementsAll REDUCER ',
        state.achievementsList,
      );
      var newNames = [];
      for (var i = 0; i < action.newAchievementsAll.length; i++) {
        newNames.push(action.newAchievementsAll[i]['achievementName']);
      }
      console.log(newNames);

      let updateAchievements = state.achievementsList.map(
        (achievementsItem) => {
          if (newNames.includes(achievementsItem.achievementName)) {
            console.log('FOUND');
            return {...achievementsItem, active: true};
          } else {
            console.log('NOT FOUND');
            return {...achievementsItem};
          }
        },
      );
      console.log('UPDATE_ACHIEVEMENTS RETURN', updateAchievements);
      return {
        achievementsList: updateAchievements,
        newAchievementsAll: action.newAchievementsAll,
      };
    case RESET_NEW_ACHIEVEMENTS:
      return {
        newAchievementsAll: [],
      };
    default:
      return state;
  }
};
