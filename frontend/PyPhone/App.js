import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Login from './screens/Login';
import Register from './screens/Register';
import Nav from './components/Nav';
import Home from './screens/Home';
import NavContainer from './navigation/NavContainer';
import {Provider} from 'react-redux';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import authReducer from './store/reducers/auth';
import course from './store/reducers/course';
import ReduxThunk from 'redux-thunk';
import exercise from './store/reducers/exercise';

const rootReducer = combineReducers({
  auth: authReducer,
  course: course,
  exercise: exercise,
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));
const App = () => {
  return (
    <Provider store={store}>
      <NavContainer></NavContainer>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
