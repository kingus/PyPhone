import React, {useState} from 'react';
import {StyleSheet, Text, FlatList} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import CoinIcon from '../components/icons/CoinIcon';
import AwardIcon from '../components/icons/AwardIcon';
import {useDispatch, useSelector} from 'react-redux';
import GoldIcon from '../components/icons/GoldIcon';
import SilverIcon from '../components/icons/SilverIcon';
import FirstCorrect from '../components/icons/FirstCorrect';
import ThirdCorrect from '../components/icons/ThirdCorrect';
import CalendarIcon from '../components/icons/CalendarIcon';
import CodeIcon from '../components/icons/CodeIcon';
import DiplomaIcon from '../components/icons/DiplomaIcon';
import {View} from 'react-native-animatable';

const Achievements = (props) => {
  const dispatch = useDispatch();
  const achievementsList = useSelector(
    (state) => state.achievements.achievementsList,
  );

  console.log('ACHIEVEMENTS LIST, ', achievementsList);

  return (
    // <LinearGradient
    //   colors={['#34adf9', '#8ee7fe', '#34adf9']}
    //   style={styles.linearGradient}>
    <View style={styles.container}>
      <Text style={styles.appName}>Twoje osiągnięcia</Text>
      <FlatList
        numColumns={4}
        keyExtractor={(item) => item.achievementName}
        data={achievementsList}
        renderItem={({item}) => {
          if (item.achievementType === 'coin')
            return (
              <CoinIcon
                xp={item.achievementName}
                active={item['active']}></CoinIcon>
            );
          if (item.achievementType === 'award')
            return (
              <AwardIcon
                number={item.achievementName}
                active={item.active}></AwardIcon>
            );

          if (item.achievementType === '100%') {
            return <GoldIcon active={item.active}></GoldIcon>;
          }
          if (item.achievementType === '75%') {
            return <SilverIcon active={item.active}></SilverIcon>;
          }
          if (item.achievementType === 'firstCorrect') {
            return <FirstCorrect active={item.active}></FirstCorrect>;
          }
          if (item.achievementType === 'thirdCorrect') {
            return <ThirdCorrect active={item.active}></ThirdCorrect>;
          }
          if (item.achievementType === 'calendar') {
            return <CalendarIcon active={item.active}></CalendarIcon>;
          }
          if (item.achievementType === 'code') {
            return <CodeIcon active={item.active}></CodeIcon>;
          }
          if (item.achievementType === 'diploma') {
            return <DiplomaIcon active={item.active}></DiplomaIcon>;
          }
        }}
      />
    </View>
    // </LinearGradient>
  );
};
export default Achievements;

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    display: 'flex',
    alignItems: 'stretch',
  },
  container: {
    backgroundColor: '#00072b',
    flex: 1,
    alignItems: 'center',
    borderRadius: 5,
    display: 'flex',
  },
  firstLine: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 40,
  },
  flatContainer: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
  },
  appName: {
    fontSize: 48,
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
    marginBottom: 40,
  },
  image: {
    width: 80,
    height: 80,
    margin: 10,
    backgroundColor: 'red',
  },
  xpText: {
    fontWeight: 'bold',
    color: '#D37C00',
  },
});
