import React, {useState, useEffect} from 'react';
import {Text, StyleSheet, View, Alert} from 'react-native';
import CommandLine from '../components/CommandLine';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import QuizAnswersRadio from '../components/QuizAnswersRadio';
import QuizAnswersCheck from '../components/QuizAnswersCheck';
import Toast from 'react-native-toast-message';
import DragableExercise from '../components/DragableExercise';
import UsersInput from '../components/UsersInput';

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
  const [points, setPoints] = useState(props.exerciseData.points);
  const [summary, setSummary] = useState({correct: 0, wrong: 0});

  useEffect(() => {
    setPossibleAnswers(props.exerciseData.possible_answers);
    setExerciseType(props.exerciseData.exercise_type);
    setCode(props.exerciseData.code);
    setCorrectAnswer(props.exerciseData.correct_answer);
    setPoints(props.exerciseData.points);
  }, [props]);

  const sendUsersAnswer = (answer) => {
    let usersAns = [];
    for (let i of answer) {
      if (i.clicked === true) {
        usersAns.push(i.answer);
      }
    }
    setUsersAnswer(usersAns);
  };
  const sendUsersAnswerDragEx = (answer) => {
    let usersAns = [];
    for (let i of answer) {
      usersAns.push(i.answer);
    }
    setUsersAnswer(usersAns);
  };

  const checkIfCorrect = () => {
    var gainedPoints = 0;
    var correct = 'correct';
    if (usersAnswer.sort().join(',') === correctAnswer.sort().join(',')) {
      console.log('ANSWER CORRECT');

      gainedPoints = points;

      Toast.show({
        text1: 'Poprawna odpowiedź',
        text2: 'Tak trzymaj!👌',
        type: 'success',
        position: 'bottom',
      });
    } else {
      gainedPoints = 0;
      correct = 'wrong';

      console.log('ANSWER WRONG');
      Toast.show({
        text1: 'Zła odpowiedź',
        text2: 'Spróbuj ponownie!👎',
        type: 'error',
        position: 'bottom',
      });
    }
    console.log('SUMMARY', summary);

    props.nextExercise(gainedPoints, correct);
  };
  const checkIfCorrectInput = () => {
    var gainedPoints = 0;
    var correct = 'correct';
    console.log(usersAnswer);
    console.log(correctAnswer[0]);
    if (usersAnswer === correctAnswer[0]) {
      console.log('ANSWER CORRECT');

      gainedPoints = points;

      Toast.show({
        text1: 'Poprawna odpowiedź',
        text2: 'Tak trzymaj!👌',
        type: 'success',
        position: 'bottom',
      });
    } else {
      gainedPoints = 0;
      correct = 'wrong';

      console.log('ANSWER WRONG');
      Toast.show({
        text1: 'Zła odpowiedź',
        text2: 'Spróbuj ponownie!👎',
        type: 'error',
        position: 'bottom',
      });
    }
    console.log('SUMMARY', summary);

    props.nextExercise(gainedPoints, correct);
  };
  const checkIfCorrectDragEx = () => {
    var gainedPoints = 0;
    var correct = 'correct';
    console.log('checkIfCorrectDragEx', correctAnswer);
    console.log('checkIfCorrectDragEx', usersAnswer);
    if (usersAnswer.join(',') === correctAnswer.join(',')) {
      console.log('CORRECT');
      gainedPoints = points;
      setSummary({
        ...summary,
        correct: summary['correct'] + 1,
      });

      Toast.show({
        text1: 'Poprawna odpowiedź',
        text2: 'Tak trzymaj!👌',
        type: 'success',
        position: 'bottom',
        visibilityTime: 4000,
      });
    } else {
      console.log('ANSWER WRONG');
      gainedPoints = 0;
      setSummary({
        ...summary,
        wrong: summary['wrong'] + 1,
      });
      correct = 'wrong';

      Toast.show({
        text1: 'Zła odpowiedź',
        text2: 'Spróbuj ponownie!👎',
        type: 'error',
        position: 'bottom',
        visibilityTime: 4000,
      });
    }

    props.nextExercise(gainedPoints, correct);
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
        <QuizAnswersCheck
          answers={possibleAnswers}
          sendUsersAnswer={sendUsersAnswer}></QuizAnswersCheck>
      </View>
    );
  } else if (exerciseType == 'drag_and_drop') {
    exerciseContainer = (
      <View style={styles.answers}>
        <DragableExercise
          answers={possibleAnswers}
          sendUsersAnswer={sendUsersAnswerDragEx}
          checkIfCorrectDragEx={checkIfCorrectDragEx}></DragableExercise>
      </View>
    );
  } else if (exerciseType == 'user_input') {
    exerciseContainer = (
      <View style={styles.answers}>
        <UsersInput sendUsersAnswer={setUsersAnswer}></UsersInput>
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

      {exerciseType == 'drag_and_drop' ? (
        <TouchableOpacity
          style={styles.nextButton}
          onPress={() => checkIfCorrectDragEx()}>
          <Icon name="arrow-right" size={30} color="#00072b" />
        </TouchableOpacity>
      ) : exerciseType == 'user_input' ? (
        <TouchableOpacity
          style={styles.nextButton}
          onPress={() => checkIfCorrectInput()}>
          <Icon name="arrow-right" size={30} color="#00072b" />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={styles.nextButton}
          onPress={() => checkIfCorrect()}>
          <Icon name="arrow-right" size={30} color="#00072b" />
        </TouchableOpacity>
      )}
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
    marginTop: 30,
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
