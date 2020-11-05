import React, {useState, useEffect} from 'react';
import {Text, Dimensions, Image, StyleSheet, View} from 'react-native';
import CommandLine from '../components/CommandLine';
import {TouchableOpacity} from 'react-native-gesture-handler';
import logo from '../images/logo.png';
import python2 from '../images/python2.png';
import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';
import SegmentedControlTab from 'react-native-segmented-control-tab';

import QuizAnswerCheckBox from '../components/QuizAnswer';
import QuizAnswerRadio from '../components/QuizAnswerRadio';
import QuizAnswersRadio from '../components/QuizAnswersRadio';
import SegmentedBar from '../components/SegmentedBar';
import {useDispatch, useSelector} from 'react-redux';

Icon.loadFont();

const Exercise = (props) => {
  const [possibleAnswers, setPossibleAnswers] = useState(
    props.exerciseData.possible_answers,
  );

  useEffect(() => {
    setPossibleAnswers(props.exerciseData.possible_answers);
  }, [props]);

  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <Icon name="flag" size={30} color="#abf0ff" />
      </View>

      <Text style={styles.lectureTitle}>Ćwiczenie 1.</Text>
      <Text style={styles.lectureText}>{props.exerciseData.question}</Text>
      <View style={styles.cmdContainer}>
        {/* <CommandLine lines={['x = 1', 'x = x + 5', 'print(x)']}></CommandLine> */}
      </View>
      <View style={styles.answers}>
        <QuizAnswersRadio answers={possibleAnswers}></QuizAnswersRadio>
      </View>
      <View></View>
      <TouchableOpacity
        style={styles.nextButton}
        onPress={() => props.nextExercise()}>
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
    elevation: 2, // Android
  },
});
