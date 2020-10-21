import React from 'react';
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
import XPBar from '../components/XPBar';

const Home = (props) => {
  const navToLecture = (lesson) => {
    props.navigation.navigate({
      routeName: 'Lecture',
      // params: {lectureTitle: 'TITLE'},
    });

    console.log('NAV CLICKED');
  };

  const navToExercise = () => {
    props.navigation.navigate({
      routeName: 'Exercise',
    });
  };

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
          <View style={styles.userInfo}>
            <Image source={girl} style={styles.profileImage}></Image>
            <XPBar completed="30%"></XPBar>
          </View>
        </View>
        <Card2
          completed="30%"
          category="STRINGS"
          navToLecture={navToLecture}
          navToExercise={navToExercise}></Card2>
        <Card2
          completed="50%"
          category="NUMBERS"
          navToLecture={navToLecture}
          navToExercise={navToExercise}></Card2>
        <Card2
          completed="60%"
          category="LISTS"
          navToLecture={navToLecture}
          navToExercise={navToExercise}></Card2>
        <Card2
          completed="70%"
          category="DICTIONARIES"
          navToLecture={navToLecture}
          navToExercise={navToExercise}></Card2>
        <Card2
          completed="70%"
          category="DICTIONARIES"
          navToLecture={navToLecture}
          navToExercise={navToExercise}></Card2>
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
