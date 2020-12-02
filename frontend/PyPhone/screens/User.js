import React from 'react';
import {View, StyleSheet, Text, Image, ImageBackground} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Dimensions} from 'react-native';
import calendar from '../images/user/calendar.png';
import openBook from '../images/user/open-book.png';
import lightning from '../images/user/lightning.png';
import medal from '../images/user/medal.png';
import monster from '../images/user/monster.png';
import background from '../images/user/background.png';
import XPBar2 from '../components/XPBar2';
import {ContributionGraph} from 'react-native-chart-kit';
const windowHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;
import {useSelector} from 'react-redux';

const User = (props) => {
  const activeDays = useSelector((state) => state.auth.activeDays);
  const activeCoursesAmount = useSelector(
    (state) => state.course.activeCoursesAmount,
  );
  const achievements = useSelector((state) => state.auth.achievements);
  const countDatesList = useSelector((state) => state.auth.countDatesList);
  const todaysXp = useSelector((state) => state.auth.todaysXp);
  const xp = useSelector((state) => state.auth.xp);
  const username = useSelector((state) => state.auth.username);

  var oblicz = ((xp * 100) / 1200).toString() + '%';

  const commitsData2 = [
    {date: '2020-11-29', count: 1},
    {date: '2020-11-11', count: 1},
    {date: '2019-11-12', count: 0},
    {date: '2020-11-13', count: 1},
  ];

  const chartConfig = {
    backgroundGradientFrom: '#00072b',
    backgroundGradientTo: '#00072b',
    color: (opacity = 1) => `rgba(90, 255, 251, ${opacity})`,
    strokeWidth: 3, // optional, default 3
    barPercentage: 0.5,
  };

  console.log(countDatesList);

  return (
    <View style={styles.container}>
      {/* <LinearGradient
        colors={['#34adf9', '#67c4ff', '#34adf9']}
        style={styles.linearGradient}> */}

      <View style={styles.mainUser}>
        <View style={styles.background}>
          <Text style={styles.username}>{username}</Text>
          <XPBar2 completed={oblicz} xp={xp}></XPBar2>
        </View>
        <Image source={monster} style={styles.monster}></Image>
      </View>
      <View style={styles.chartStyle}>
        <ContributionGraph
          values={countDatesList}
          endDate={new Date('2020-12-31')}
          numDays={105}
          width={screenWidth}
          height={220}
          chartConfig={chartConfig}
        />
      </View>
      <View style={styles.infoContainer}>
        <View style={styles.infoRow}>
          <View style={styles.infoItem}>
            <Image source={openBook} style={styles.image}></Image>
            <View style={styles.textContainer}>
              <Text style={styles.textStyle}>Ukończone kursy</Text>
              <Text style={styles.pointsStyle}>{activeCoursesAmount}</Text>
            </View>
          </View>
          <View style={styles.infoItem}>
            <Image source={calendar} style={styles.image}></Image>
            <View style={styles.textContainer}>
              <Text style={styles.textStyle}>Aktywność</Text>
              <Text style={styles.pointsStyle}>{activeDays} dni</Text>
            </View>
          </View>
        </View>

        <View style={styles.infoRow}>
          <View style={styles.infoItem}>
            <Image source={lightning} style={styles.image}></Image>
            <View style={styles.textContainer}>
              <Text style={styles.textStyle}>Dzisiejsze XP</Text>
              <Text style={styles.pointsStyle}>{todaysXp} XP</Text>
            </View>
          </View>
          <View style={styles.infoItem}>
            <Image source={medal} style={styles.image}></Image>
            <View style={styles.textContainer}>
              <Text style={styles.textStyle}>Zdobyte odznaki</Text>
              <Text style={styles.pointsStyle}>{achievements}</Text>
            </View>
          </View>
        </View>
      </View>

      {/* </LinearGradient> */}
    </View>
  );
};

const styles = StyleSheet.create({
  linearGradient: {
    height: windowHeight,
    alignItems: 'center',
    borderRadius: 5,
    display: 'flex',
  },
  chartStyle: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 30,
  },
  monster: {
    width: 100,
    height: 100,
    margin: 10,
  },
  container: {
    flex: 1,
    backgroundColor: '#00072b',
    alignItems: 'center',
  },
  mainUser: {
    height: '30%',
    width: '100%',
    backgroundColor: '#00072b',
    // elevation: 2,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  background: {
    width: '50%',
    height: 90,
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'column',
  },
  infoContainer: {
    marginTop: 30,
    width: '85%',
    height: '25%',
    // elevation: 2,
  },
  infoRow: {
    flex: 1,
    display: 'flex',
    // paddingTop: 2,
    // paddingLeft: 2,
    // paddingRight: 2,
    flexDirection: 'row',
  },
  infoItem: {
    width: '50%',
    height: '100%',
    // elevation: 2,
    backgroundColor: '#00072b',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    // borderWidth: 1,
    // borderColor: '#5afffb',
  },
  image: {
    height: 50,
    width: 50,
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  textStyle: {
    fontFamily: 'OpenSans-ExtraBoldItalic',
    // fontStyle: 'italic',
    fontWeight: 'bold',
    fontSize: 13,
    color: '#5afffb',
  },
  pointsStyle: {
    fontFamily: 'OpenSans-ExtraBoldItalic',
    fontStyle: 'italic',
    // fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'right',
    color: '#5afffb',
  },
  username: {
    fontSize: 20,
    marginBottom: 15,
    fontFamily: 'OpenSans-ExtraBoldItalic',
    fontWeight: 'bold',
    color: '#5afffb',
  },
});

export default User;
