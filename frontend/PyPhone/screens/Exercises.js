import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import SegmentedBar from '../components/SegmentedBar';
import Exercise from '../screens/Exercise';
import {useSelector} from 'react-redux';

const Exercises = () => {
  const [currentExercise, setCurrentExercise] = useState(0);
  const exercises = useSelector((state) => state.exercise.userExercises);

  const nextExercise = () => {
    if (currentExercise < exercises.length - 1)
      setCurrentExercise(currentExercise + 1);
    else {
      console.log('LAST EXERCISE');
    }
  };

  return (
    <View style={styles.container}>
      <SegmentedBar
        currentExercise={currentExercise}
        numOfExercises={exercises.length}></SegmentedBar>
      <Exercise
        exerciseData={exercises[currentExercise]}
        nextExercise={nextExercise}
        currentExercise={currentExercise}></Exercise>
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
