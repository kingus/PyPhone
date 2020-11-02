import React from 'react';
import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';
import girl from '../images/girl.png';
import {Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import LinearGradient from 'react-native-linear-gradient';
import XPBar from '../components/XPBar';

const UserBar = (props) => {
  return (
    <View style={styles.userInfo}>
      <Image source={girl} style={styles.profileImage}></Image>
      <View style={styles.xpContainer}>
        <XPBar completed="30%"></XPBar>
      </View>
    </View>
  );
};

export default UserBar;

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
  xpContainer: {
    display: 'flex',
    flexDirection: 'row',
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
    marginTop: 20,
    marginBottom: 20,
  },
});
