import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import ProgressBar from './ProgressBar';
import Icon from 'react-native-vector-icons/FontAwesome';
Icon.loadFont();

const Card2 = (props) => {
  const clickLecture = () => {
    let lesson = 'Zmienne';
    props.navToLecture(lesson);
    console.log('LECTURE CLICKED');
  };

  const clickExercises = () => {
    // props.navigation.navigate({
    //   routeName: 'CourseSwitch',
    // });
    props.navToExercise();

    console.log('EXERCISES CLICKED');
  };
  return (
    <View style={styles.card}>
      {/* <View>
        <Text style={styles.category}>{props.category}</Text>
      </View>
      <ProgressBar completed={props.completed} /> */}
      <View style={styles.cardInfo}>
        <Text style={styles.courseTitleText}>{props.category}</Text>
      </View>
      <View style={styles.cardBar}>
        <TouchableOpacity style={styles.lectureItem} onPress={clickLecture}>
          <Text style={styles.cardText}>LECTURE</Text>
          <Icon name="mortar-board" size={25} color="#abf0ff" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.exerciseItem} onPress={clickExercises}>
          <Text style={styles.cardText}>EXERCISES</Text>

          <Icon name="sticky-note-o" size={25} color="#abf0ff" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Card2;

const styles = StyleSheet.create({
  card: {
    display: 'flex',
    marginVertical: 5,
    width: 350,
    height: 180,
    borderRadius: 5,
    elevation: 5,
    backgroundColor: 'white', // invisible color
    justifyContent: 'flex-end',
  },
  category: {
    color: '#49a9c4',
  },
  image: {
    width: 60,
    height: 60,
  },
  cardBar: {
    height: 70,
    backgroundColor: '#fcfcfc',
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    borderRadius: 8,
    // borderTopColor: '#abf0ff',
    // borderTopWidth: 1,
  },
  cardInfo: {
    backgroundColor: 'white',
    display: 'flex',
    flex: 2,
    flexDirection: 'row',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  exerciseItem: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#fcfcfc',
    width: 175,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomRightRadius: 5,
  },
  lectureItem: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#fcfcfc',
    width: 175,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: 5,
    borderRightColor: '#abf0ff',
    borderRightWidth: 1,
  },
  cardText: {
    color: '#b6b6b6',
    padding: 10,
  },

  courseTitleText: {
    color: '#3498db',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
