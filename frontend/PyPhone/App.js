import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import RouterComponent from './components/ComponentRouter';
import Login from './components/Login';
import Register from './components/Register';
import Nav from './components/Nav';
import Home from './components/Home';
const App = () => {
  return (
    // <Nav></Nav>
    // {/* <Home></Home> */}
    // <View style={styles.container}>
    <Login />
    // <Register></Register>
    // </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
