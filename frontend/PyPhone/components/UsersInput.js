import React, {useState, useEffect} from 'react';
import {Text, Dimensions, Image, StyleSheet, TextInput} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import QuizAnswerRadio from '../components/QuizAnswerRadio';
import {set} from 'react-native-reanimated';

const UsersInput = (props) => {
  return (
    <TextInput
      name="username"
      placeholder="Wpisz odpowiedź"
      autoCapitalize="none"
      style={styles.input}
      selectionColor={'#5afffb'}
      underlineColorAndroid="white"
      autoCorrect={false}
      autoFocus={false}
      onChangeText={(text) => props.sendUsersAnswer(text)}
    />
  );
};

export default UsersInput;

const styles = StyleSheet.create({
  answers: {
    display: 'flex',
    flex: 10,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 40,
    borderBottomWidth: 3,
    borderColor: '#5afffb',
    width: 200,
    fontSize: 16,
    color: '#5afffb',
    fontFamily: 'Inconsolata',
    letterSpacing: 1,
    margin: 0,
    textAlign: 'center',
    lineHeight: 36,
  },
});
