import React, {useState, useEffect} from 'react';
import {Text, Dimensions, Image, StyleSheet, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import QuizAnswerRadio from '../components/QuizAnswerRadio';
import {set} from 'react-native-reanimated';

const QuizAnswersRadio = (props) => {
  const [answers, setAnswers] = useState([
    {key: 1, answer: props.answers[0], clicked: false},
    {key: 2, answer: props.answers[1], clicked: false},
    {key: 3, answer: props.answers[2], clicked: false},
    {key: 4, answer: props.answers[3], clicked: false},
  ]);

  const onClickCard = (id) => {
    const editedAnswers = answers.map((answer) => {
      if (answer.key === id) {
        return {...answer, clicked: !answer.clicked};
      } else {
        return {...answer, clicked: false};
      }
    });
    setAnswers(editedAnswers);
    props.sendUsersAnswer(editedAnswers);
  };

  useEffect(() => {
    setAnswers([
      {key: 1, answer: props.answers[0], clicked: false},
      {key: 2, answer: props.answers[1], clicked: false},
      {key: 3, answer: props.answers[2], clicked: false},
      {key: 4, answer: props.answers[3], clicked: false},
    ]);
    props.sendUsersAnswer(answers);
  }, [props.answers]);

  return (
    <View style={styles.answers}>
      {answers.map((number) => (
        <QuizAnswerRadio
          answer={number['answer']}
          isClicked={number['clicked']}
          id={number['key']}
          key={number['key']}
          onClickCard={onClickCard}></QuizAnswerRadio>
      ))}
    </View>
  );
};

export default QuizAnswersRadio;

const styles = StyleSheet.create({
  answers: {
    display: 'flex',
    flex: 10,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
