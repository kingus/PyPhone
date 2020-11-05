import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import SegmentedBar from '../components/SegmentedBar';
import Card2 from '../components/Card2';
import Exercise from '../screens/Exercise';
import * as exerciseActions from '../store/actions/exercise';
import {useDispatch, useSelector} from 'react-redux';

const Exercises = () => {
  const dispatch = useDispatch();
  const [currentExercise, setCurrentExercise] = useState(0);
  const exercises = useSelector((state) => state.exercise.userExercises);

  const nextExercise = () => {
    setCurrentExercise(currentExercise + 1);
  };

  useEffect(() => {
    // exercisesHandler();
    console.log('EXERCISES', exercises);
  }, []);

  return (
    <View style={styles.container}>
      <SegmentedBar
        currentExercise={currentExercise}
        numOfExercises={exercises.length}></SegmentedBar>
      <Exercise
        exerciseData={exercises[currentExercise]}
        nextExercise={nextExercise}></Exercise>
    </View>
  );
};

export default Exercises;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
