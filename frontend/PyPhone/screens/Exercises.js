import React, {useState} from 'react';
import {StyleSheet, View, Alert} from 'react-native';
import SegmentedBar from '../components/SegmentedBar';
import Exercise from '../screens/Exercise';
import {useSelector} from 'react-redux';

const Exercises = (props) => {
  const [currentExercise, setCurrentExercise] = useState(0);
  const [currentPoints, setCurrentPoints] = useState(0);
  const exercises = useSelector((state) => state.exercise.userExercises);
  const [summary, setSummary] = useState({correct: 0, wrong: 0});

  const nextExercise = async (points, correct) => {
    summary[correct] = summary[correct] + 1;
    console.log('MY SUMMARY', summary);

    if (currentExercise < exercises.length - 1) {
      setCurrentExercise(currentExercise + 1);
      setCurrentPoints(currentPoints + points);
    } else {
      var gainedPoints = currentPoints;
      setCurrentPoints(0);

      props.navigation.navigate('Final', {
        xp: gainedPoints + points,
        summary: summary,
      });
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
