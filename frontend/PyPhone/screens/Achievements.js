import React from 'react';
import {StyleSheet, View, Image, ImageBackground, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import winner from '../images/winner.png';
import diploma from '../images/achievements/diploma.png';
import satisfaction from '../images/achievements/satisfaction.png';
import satisfaction3 from '../images/achievements/satisfaction3.png';
import shield from '../images/achievements/shield.png';
import star from '../images/achievements/star.png';
import goldmedal from '../images/achievements/gold-medal.png';
import silvermedal from '../images/achievements/silver-medal.png';
import trophy from '../images/achievements/trophy.png';
import CoinIcon from '../components/icons/CoinIcon';
import { TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';
import AwardIcon from '../components/icons/AwardIcon';

const Achievements = (props) => {
 
  return (
    <LinearGradient
      colors={['#34adf9', '#8ee7fe', '#34adf9']}
      style={styles.linearGradient}>
              <Text style={styles.appName}>Twoje osiągnięcia</Text>

      <View style={styles.firstLine}>
      <TouchableOpacity>
        <Image source={satisfaction} style={styles.image}></Image>
      </TouchableOpacity>
      <TouchableOpacity>
        <AwardIcon number="1"></AwardIcon>
      </TouchableOpacity>
      <CoinIcon xp="100XP"></CoinIcon>
      <Image source={star} style={styles.image}></Image>


      </View>
      <View style={styles.firstLine}>
        <AwardIcon number="5"></AwardIcon>
        <Image source={diploma} style={styles.image} ></Image>
        <CoinIcon xp="300XP" ></CoinIcon>
        <TouchableOpacity>
        <Image source={satisfaction3} style={styles.image}></Image>
      </TouchableOpacity>
        <Image source={trophy} style={styles.image} ></Image>
      </View>
      <View style={styles.firstLine}>

        <CoinIcon xp="500XP"></CoinIcon>
        <Image source={silvermedal} style={styles.image}></Image>
        <Image source={shield} style={styles.image}></Image>
        <AwardIcon number="10"></AwardIcon>

      </View>
      <View style={styles.firstLine}>
        <CoinIcon xp="1000XP" ></CoinIcon>
        <AwardIcon number="15"></AwardIcon>
        <Image source={diploma} style={styles.image}></Image>
        <Image source={goldmedal} style={styles.image}></Image>
      </View>
     
    </LinearGradient>
  );
};
export default Achievements;

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    display: 'flex',
    alignItems: 'stretch',
  },
  firstLine: {
      display: 'flex',
      flexDirection: 'row',
      marginTop: 40
  },
  appName: {
    fontSize: 48
    ,
    paddingTop: 50,
    textAlign: 'center',
    fontFamily: 'OpenSansRegular',
    letterSpacing: 0,
    textAlign: 'center',
    fontWeight: '700',
    letterSpacing: 0.1,
    color: '#ffe25b',
    textShadowColor: 'rgba(0, 0, 0, 0.45)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
  },
  image: {
      width: 80,
      height: 80,
      margin:10
  },
  xpText: {
      fontWeight: 'bold',
      color: '#D37C00'
  }
  
});
