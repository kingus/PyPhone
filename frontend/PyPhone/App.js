import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Login from './screens/Login';
import Register from './screens/Register';
import Nav from './components/Nav';
import Home from './screens/Home';
const App = () => {
  return (
    <Nav></Nav>
    // {/* <Home></Home> */}
    // <View style={styles.container}>
    // <Login />
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
