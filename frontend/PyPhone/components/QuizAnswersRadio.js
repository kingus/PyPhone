import React, {useState} from 'react';
import {Text, Dimensions, Image, StyleSheet, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import QuizAnswerRadio from '../components/QuizAnswerRadio';

const QuizAnswersRadio = (props) => {
  const [isClicked, setIsClicked] = useState('square-o');
  const [answers, setAnswers] = useState([
    {key: 1, answer: '3', clicked: false},
    {key: 2, answer: '3', clicked: false},
    {key: 3, answer: '3', clicked: false},
    {key: 4, answer: '3', clicked: false},
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

    console.log(answers);
  };

  return (
    <View style={styles.answers}>
      {answers.map((number, index) => (
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
