import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import winner from '../images/winner.png';
import coin from '../images/coin.png';
import LinearGradient from 'react-native-linear-gradient';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Final = (props) => {
  const {navigation} = props;
  const gainedPoints = navigation.getParam('xp', {});
  const summary = navigation.getParam('summary');
  console.log(summary);

  const onClickContinue = () => {
    props.navigation.navigate({
      routeName: 'Home',
    });
  };

  return (
    <LinearGradient
      colors={['#34adf9', '#8ee7fe', '#34adf9']}
      style={styles.linearGradient}>
      <View>
        <Text style={styles.mainText}>Gratulacje!</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image source={winner} style={styles.image}></Image>
      </View>
      <View style={styles.summary}>
        <View style={styles.textContainer}>
          <View style={styles.textGroup}>
            <Text style={styles.textStyle}>Poprawne odpowiedzi</Text>
            <Text style={styles.textStyle}>
              {JSON.stringify(summary.correct)}
            </Text>
          </View>
          <View style={styles.textGroup}>
            <Text style={styles.textStyle}>Błędne odpowiedzi:</Text>
            <Text style={styles.textStyle}>
              {JSON.stringify(summary.wrong)}
            </Text>
          </View>
        </View>
        <View style={styles.points}>
          <Image source={coin} style={styles.coinImage}></Image>
          <Text style={styles.textStyle}>{gainedPoints} XP</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.finishButton} onPress={onClickContinue}>
        <Text style={styles.finishButtonText}>KONTYNUUJ NAUKĘ</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};
export default Final;

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    display: 'flex',
    alignItems: 'stretch',
  },
  mainText: {
    textAlign: 'center',
    fontFamily: 'OpenSansRegular',
    fontSize: 45,
    fontWeight: '700',
    letterSpacing: 0.1,
    color: '#ffe25b',
    textShadowColor: 'rgba(0, 0, 0, 0.45)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
    marginTop: 60,
  },
  summary: {
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'center',
    width: '85%',
    height: '15%',
    backgroundColor: '#fd5b67',
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#ff5b99',
    elevation: 2,
    marginBottom: 100,
  },
  points: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderLeftColor: '#fd5b67',

    borderLeftWidth: 1,
  },
  image: {
    width: 240,
    height: 240,
  },
  coinImage: {
    width: 35,
    height: 35,
  },
  imageContainer: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
  },
  textGroup: {
    flexDirection: 'row',
    display: 'flex',
    alignItems: 'stretch',
    justifyContent: 'space-between',
  },
  textContainer: {
    flex: 4,
    justifyContent: 'center',
    display: 'flex',
  },
  linearGradient: {
    display: 'flex',
    height: '100%',
  },
  textStyle: {
    textAlign: 'left',
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    fontFamily: 'OpenSansRegular',
    fontSize: 15,
    letterSpacing: 0.1,
    color: '#ffe25b',
  },
  finishButton: {
    backgroundColor: '#7cd841',
    borderRadius: 30,
    alignSelf: 'center',
    justifyContent: 'center',
    width: '70%',
    height: 50,
    marginBottom: 50,
  },
  finishButtonText: {
    textAlign: 'center',
    justifyContent: 'center',
    fontFamily: 'OpenSansRegular',
    fontSize: 18,
    letterSpacing: 0.1,
    color: '#ffe25b',
  },
});
