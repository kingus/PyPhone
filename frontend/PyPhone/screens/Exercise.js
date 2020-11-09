import React, {useState, useEffect} from 'react';
import {Text, StyleSheet, View, Alert} from 'react-native';
import CommandLine from '../components/CommandLine';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import QuizAnswersRadio from '../components/QuizAnswersRadio';
import QuizAnswersCheck from '../components/QuizAnswersCheck';
import Toast from 'react-native-toast-message';

Icon.loadFont();

const Exercise = (props) => {
  const [possibleAnswers, setPossibleAnswers] = useState(
    props.exerciseData.possible_answers,
  );
  const [exerciseType, setExerciseType] = useState(
    props.exerciseData.exercise_type,
  );
  const [code, setCode] = useState(props.exerciseData.code);
  const [usersAnswer, setUsersAnswer] = useState();
  const [correctAnswer, setCorrectAnswer] = useState(
    props.exerciseData.correct_answer,
  );

  useEffect(() => {
    setPossibleAnswers(props.exerciseData.possible_answers);
    setExerciseType(props.exerciseData.exercise_type);
    setCode(props.exerciseData.code);
    setCorrectAnswer(props.exerciseData.correct_answer);
  }, [props]);

  const sendUsersAnswer = (answer) => {
    console.log(answer);
    let usersAns = [];
    for (let i of answer) {
      console.log(i.clicked);
      console.log(i.answer);
      if (i.clicked === true) {
        usersAns.push(i.answer);
      }
    }
    setUsersAnswer(usersAns);
    console.log("USER'S CHOSEN ANSWER:", usersAns);
    console.log('CORRECT ANSWER: ', correctAnswer);
  };

  const checkIfCorrect = () => {
    if (usersAnswer[0] === correctAnswer) {
      console.log('ANSWER CORRECT');
      Toast.show({
        text1: 'Poprawna odpowiedź',
        text2: 'Tak trzymaj!👌',
        type: 'success',
        position: 'bottom',
      });
      props.nextExercise();
      setUsersAnswer(null);
    } else {
      console.log('ANSWER WRONG');

      Toast.show({
        text1: 'Zła odpowiedź',
        text2: 'Spróbuj ponownie!👎',
        type: 'error',
        position: 'bottom',
      });
    }
  };

  var exerciseContainer, codeContainer;

  if (exerciseType == 'single_choice') {
    exerciseContainer = (
      <View style={styles.answers}>
        <QuizAnswersRadio
          answers={possibleAnswers}
          sendUsersAnswer={sendUsersAnswer}></QuizAnswersRadio>
      </View>
    );
  } else if (exerciseType == 'multiple_choice') {
    exerciseContainer = (
      <View style={styles.answers}>
        <QuizAnswersCheck answers={possibleAnswers}></QuizAnswersCheck>
      </View>
    );
  }
  if (code !== null) {
    codeContainer = <CommandLine lines={code}></CommandLine>;
  }

  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <Icon name="flag" size={30} color="#abf0ff" />
      </View>

      <Text style={styles.lectureTitle}>
        Ćwiczenie {props.currentExercise + 1}.
      </Text>
      <Text style={styles.lectureText}>{props.exerciseData.question}</Text>
      {codeContainer}
      {exerciseContainer}

      <TouchableOpacity
        style={styles.nextButton}
        onPress={() => checkIfCorrect()}>
        <Icon name="arrow-right" size={30} color="#00072b" />
      </TouchableOpacity>
    </View>
  );
};

export default Exercise;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  lectureTitle: {
    fontSize: 16,
    fontFamily: 'OpenSansSemiBold',
    letterSpacing: 0,
    marginLeft: 10,
    marginTop: 10,
  },
  lectureText: {
    fontSize: 16,
    fontFamily: 'OpenSansRegular',
    letterSpacing: 0,
    marginLeft: 10,
    marginTop: 10,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  cmdContainer: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    marginTop: 40,
  },
  answers: {
    display: 'flex',
    flex: 10,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  answerCard: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#00072b',
    borderRadius: 5,
    width: 320,
    height: 40,
    margin: 10,
    padding: 10,
    elevation: 2,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  answerText: {
    fontSize: 16,
    fontFamily: 'OpenSansRegular',
    letterSpacing: 0,
    justifyContent: 'space-around',
    alignItems: 'center',
    marginLeft: 15,
    color: '#5afffb',
  },
  image: {
    height: 40,
    width: 40,
  },
  navbar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingTop: 15,
    paddingRight: 15,
  },
  nextButton: {
    borderRadius: 100,
    width: 60,
    height: 60,
    backgroundColor: '#5afffb',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-end',
    margin: 50,
    elevation: 2,
  },
});
