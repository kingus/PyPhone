import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import padlock from '../images/padlock.png';
import star from '../images/favorite.png';
import {height} from '../lectures/Lecture2';

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
    props.navToExercise(props.id);
    console.log('EXERCISES CLICKED');
  };

  useEffect(() => {
    setIsActive(props.isActive);
    if (isActive) {
      setCardStyle(styles.cardInfoActive);
      setCategoryStyle(styles.categoryActive);
    } else {
      setCardStyle(styles.cardInfoInActive);
      setCategoryStyle(styles.categoryInActive);
    }
    console.log('CARD', props.category, isActive);
  });

  return (
    <View style={styles.card}>
      {isActive ? (
        <View style={styles.card2}>
          <View style={styles.navBar}>
            <View style={styles.leftContainer}></View>
            <Text style={categoryStyle}>{props.category}</Text>

            <View style={styles.rightContainer}>
              <ImageBackground
                source={star}
                style={{
                  width: 60,
                  height: 80,
                  marginLeft: 2,
                  marginRight: 5,
                  alignSelf: 'flex-start',
                }}>
                <View
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    alignItems: 'center',
                  }}>
                  <Text style={styles.xpText}>100%</Text>
                </View>
              </ImageBackground>
            </View>
          </View>

          <View style={styles.cardBar}>
            <TouchableOpacity style={styles.lectureItem} onPress={clickLecture}>
              <Text style={styles.cardText}>TEORIA</Text>
              <Icon name="mortar-board" size={25} color="#abf0ff" />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.exerciseItem}
              onPress={clickExercises}>
              <Text style={styles.cardText}>ĆWICZENIA</Text>
              <Icon name="sticky-note-o" size={25} color="#abf0ff" />
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <View style={styles.inActiveContainer}>
          <Text style={categoryStyle}>{props.category}</Text>
          <Image source={padlock} style={styles.image}></Image>
        </View>
      )}
    </View>
  );
};

{
  /* <View>
  <Image source={padlock} style={styles.image}></Image>
</View>; */
}

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
  card2: {
    borderRadius: 5,
    display: 'flex',
    width: 350,
    height: 180,
  },
  inActiveContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  image: {
    height: 60,
    width: 60,
    marginTop: 10,
    alignSelf: 'center',
  },
  icon: {
    height: 25,
    width: 25,
  },
  inactive: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'yellow',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  xpText: {
    fontWeight: 'bold',
    marginTop: 27,
    color: '#00B7FF',
    flex: 3,
    fontSize: 12,
  },
  cardBar: {
    height: 70,
    backgroundColor: '#fcfcfc',
    display: 'flex',
    flex: 2,
    flexDirection: 'row',
    borderRadius: 8,
  },
  inActiveCardBar: {
    backgroundColor: 'white',
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    borderBottomEndRadius: 8,
    borderBottomStartRadius: 8,
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
    alignSelf: 'center',
    justifyContent: 'center',
  },

  categoryInActive: {
    color: '#3498db',
    fontSize: 20,
    opacity: 0.5,
    fontWeight: 'bold',
    // alignSelf: 'center',
    // justifyContent: 'center',
  },
  navBar: {
    height: 120,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    borderRadius: 5,
  },
  leftContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  rightContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});
