import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';
import Card from '../components/Card';
import Card2 from '../components/Card2';
import trophy from '../images/trophy.png';
import coin from '../images/coin.png';
import logo from '../images/logo.png';
import girl from '../images/girl.png';
import {Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import LinearGradient from 'react-native-linear-gradient';
import {useSelector, useDispatch} from 'react-redux';
import UserBar from '../components/UserBar';
import * as exerciseActions from '../store/actions/exercise';

const Home = (props) => {
  const userCourses = useSelector((state) => state.course.userCourses);
  const dispatch = useDispatch();
  const [activeCourse, setActiveCourse] = useState(6);

  const navToLecture = (lesson) => {
    props.navigation.navigate({
      routeName: 'Lecture',
    });
    console.log('NAV CLICKED');
  };

  const navToExercise = (id) => {
    setActiveCourse(id);

    props.navigation.navigate({
      routeName: 'Exercises',
    });
    console.log('NAV TO EXERCISE CLICKED');
  };

  const exercisesHandler = (id) => {
    let action = exerciseActions.exercise(id);
    try {
      dispatch(action);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    exercisesHandler(activeCourse);
  }, [activeCourse]);

  return (
    <ScrollView>
      <LinearGradient
        colors={['#34adf9', '#bae5ff', '#34adf9']}
        style={styles.linearGradient}>
        <View style={styles.main}>
          <View style={styles.topBar}>
            <View style={styles.logoContainer}>
              <Image source={logo} style={styles.logo}></Image>
              <Text style={styles.logoText}>PyPhone</Text>
            </View>

            <View style={styles.pointsCard}>
              <Image source={trophy} style={styles.image}></Image>

              <Text style={styles.pointsCardText}>100</Text>
            </View>
            <View style={styles.pointsCard}>
              <Image source={coin} style={styles.image}></Image>

              <Text style={styles.pointsCardText}>100</Text>
            </View>
          </View>
          <UserBar></UserBar>
        </View>
        {userCourses.map((number, index) => (
          <Card2
            completed="30%"
            category={number['course_name']}
            key={number['course_name']}
            id={number['id']}
            navToLecture={navToLecture}
            isActive={number['active']}
            navToExercise={navToExercise}></Card2>
        ))}
      </LinearGradient>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    alignItems: 'center',
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 50,
    borderRadius: 5,
    display: 'flex',
  },
  main: {
    height: '17%',
    marginTop: 20,
    width: windowWidth,
    alignItems: 'center',
  },
  image: {
    height: 20,
    width: 20,
  },
  profileImage: {
    height: 70,
    width: 70,
  },
  text: {
    paddingTop: 10,
    fontSize: 20,
    color: '#49a9c4',
  },

  pointsCard: {
    width: 70,
    height: 30,
    backgroundColor: '#494949',
    opacity: 10,
    display: 'flex',
    flexDirection: 'row',
    borderRadius: 20,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    margin: 2,
  },

  pointsCardText: {
    fontWeight: 'bold',
    color: 'white',
  },

  topBar: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },

  logoText: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 30,
    marginLeft: 4,
  },
  logoContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 40,
  },

  logo: {
    width: 40,
    height: 40,
  },
  userInfo: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
});
