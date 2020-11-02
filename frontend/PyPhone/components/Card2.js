import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import ProgressBar from './ProgressBar';
import Icon from 'react-native-vector-icons/FontAwesome';
import padlock from '../images/padlock.png';

Icon.loadFont();

const Card2 = (props) => {
  const [isActive, setIsActive] = useState(props.isActive);
  const [cardStyle, setCardStyle] = useState();
  const [categoryStyle, setCategoryStyle] = useState();
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

  useEffect(() => {
    if (isActive) {
      setCardStyle(styles.cardInfoActive);
      setCategoryStyle(styles.categoryActive);
    } else {
      setCardStyle(styles.cardInfoInActive);
      setCategoryStyle(styles.categoryInActive);
    }
  }, []);

  return (
    <View style={styles.card}>
      {/* <ProgressBar completed={props.completed} /> */}
      <View style={cardStyle}>
        <Text style={categoryStyle}>{props.category}</Text>
      </View>
      {isActive ? (
        <View style={styles.cardBar}>
          <TouchableOpacity style={styles.lectureItem} onPress={clickLecture}>
            <Text style={styles.cardText}>LECTURE</Text>

            <Icon name="mortar-board" size={25} color="#abf0ff" />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.exerciseItem}
            onPress={clickExercises}>
            <Text style={styles.cardText}>EXERCISES</Text>

            <Icon name="sticky-note-o" size={25} color="#abf0ff" />
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.inActiveCardBar}>
          <Image source={padlock} style={styles.image}></Image>
        </View>
      )}
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
    justifyContent: 'flex-end',
    backgroundColor: 'white',
  },

  image: {
    marginTop: 0,
    height: 60,
    width: 60,
  },
  icon: {
    height: 25,
    width: 25,
  },
  cardBar: {
    height: 70,
    backgroundColor: '#fcfcfc',
    display: 'flex',
    flex: 2,
    flexDirection: 'row',
    borderRadius: 8,
    // borderTopColor: '#abf0ff',
    // borderTopWidth: 1,
  },
  inActiveCardBar: {
    height: 70,
    backgroundColor: 'white',
    display: 'flex',
    flex: 3,
    flexDirection: 'row',
    borderBottomEndRadius: 8,
    borderBottomStartRadius: 8,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  cardInfoActive: {
    backgroundColor: 'white',
    display: 'flex',
    flex: 3,
    flexDirection: 'row',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardInfoInActive: {
    backgroundColor: 'white',
    display: 'flex',
    flex: 3,
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

  categoryActive: {
    color: '#3498db',
    fontSize: 20,
    fontWeight: 'bold',
  },
  categoryInActive: {
    color: '#3498db',
    fontSize: 20,
    opacity: 0.5,
    fontWeight: 'bold',
  },
});
