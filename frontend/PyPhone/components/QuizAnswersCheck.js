import React, {useState, useEffect} from 'react';
import {Text, Dimensions, Image, StyleSheet, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import QuizAnswerRadio from '../components/QuizAnswerRadio';
import {set} from 'react-native-reanimated';
import QuizAnswerCheckBox from './QuizAnswer';

const QuizAnswersCheck = (props) => {
  const [answers, setAnswers] = useState([
    {key: 1, answer: props.answers[0], clicked: false},
    {key: 2, answer: props.answers[1], clicked: false},
    {key: 3, answer: props.answers[2], clicked: false},
    {key: 4, answer: props.answers[3], clicked: false},
  ]);

  useEffect(() => {
    console.log('PROPS', props.answers);
    setAnswers([
      {key: 1, answer: props.answers[0], clicked: false},
      {key: 2, answer: props.answers[1], clicked: false},
      {key: 3, answer: props.answers[2], clicked: false},
      {key: 4, answer: props.answers[3], clicked: false},
    ]);
  }, [props.answers]);

  return (
    <View style={styles.answers}>
      {answers.map((number) => (
        <QuizAnswerCheckBox answer={number['answer']}></QuizAnswerCheckBox>
      ))}
    </View>
  );
};

export default QuizAnswersCheck;

const styles = StyleSheet.create({
  answers: {
    display: 'flex',
    flex: 10,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
