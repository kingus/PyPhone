import React from 'react';
import {Text, Dimensions, StyleSheet, View} from 'react-native';
import SwiperFlatList from 'react-native-swiper-flatlist';
import CommandLine from '../components/CommandLine';

const Lecture10 = () => {
  return (
    <SwiperFlatList
      index={0}
      showPagination
      backgroundColor="white"
      paginationDefaultColor="#f9f9f9"
      paginationActiveColor="#d0f7ff"
      paginationStyleItem={styles.active}>
      <View style={styles.child}>
        <Text style={styles.lectureTitle}>Wartości logiczne</Text>

        <Text style={styles.lectureText}>
          <Text style={styles.lectureTextBold}>{'Boolean '}</Text>
          to typ danych, który pozwala na przechowywanie w zmiennej tylko dwóch
          wartości –<Text style={styles.lectureTextBold}>{' True '}</Text> i
          <Text style={styles.lectureTextBold}>{' False.'}</Text>
        </Text>
        <CommandLine
          lines={[
            '>>> isEmpty = True',
            '>>> print(isEmpty)',
            'True',
          ]}></CommandLine>
        <Text style={styles.lectureTitle}>Operatory porównania</Text>
        <Text style={styles.lectureText}>
          <Text style={styles.lectureTextBold}>{'Operatory porównania '}</Text>
          umożliwiają nam porównywanie wartości. Za pomocą operatorów porównania
          możemy porównywać liczby całkowite z liczbami całkowitymi,
          zmiennoprzecinkowe ze zmiennoprzecinkowymi oraz liczby całkowite z
          liczbami zmiennoprzecinkowymi, a także ciągi znaków.
        </Text>
        <CommandLine
          lines={[
            ">>> 'hello' == 'hello'",
            'True',
            ">>> 'hello' != 'world'",
            'True',
            '>>> 1 == 1.0',
            'True',
            ">>> 1 == '1'",
            'False',
          ]}></CommandLine>
      </View>

      <View style={styles.child}>
        <Text style={styles.lectureTitle}>Operatory porównania</Text>

        <View style={styles.cmdRow}>
          <View style={styles.cmdColumn}>
            <Text style={styles.operatorText}>== równa się </Text>
            <CommandLine lines={['>>> 1 == 1', 'True']}></CommandLine>
          </View>
          <View style={styles.cmdColumn}>
            <Text style={styles.operatorText}>== różne </Text>
            <CommandLine lines={['>>> 2 != 2', 'False']}></CommandLine>
          </View>
        </View>
        <View style={styles.cmdRow}>
          <View style={styles.cmdColumn}>
            <Text style={styles.operatorText}> {'<'} mniejsze </Text>
            <CommandLine lines={['>>> 4 < 5', 'True']}></CommandLine>
          </View>
          <View style={styles.cmdColumn}>
            <Text style={styles.operatorText}> {'>'} większe </Text>
            <CommandLine lines={['>>> 4 > 5', 'False']}></CommandLine>
          </View>
        </View>
        <View style={styles.cmdRow}>
          <View style={styles.cmdColumn}>
            <Text style={styles.operatorText}> {'<='} mniejsze równe </Text>
            <CommandLine lines={['>>> 4 < 5', 'True']}></CommandLine>
          </View>
          <View style={styles.cmdColumn}>
            <Text style={styles.operatorText}> {'>='} większe równe</Text>
            <CommandLine lines={['>>> 4 > 5', 'False']}></CommandLine>
          </View>
        </View>
        <Text style={styles.lectureText}>
          Dla wyrażeń z operatorem == zostanie zwrócona wartość True, gdy
          wartości po obydwu stronach będą takie same. Dla operatora != zostanie
          zwrócona wartość True, gdy wartości po obydwu stronach nie będą sobie
          równe. Jednak operatory == i != mogą działać różnie w zależności od
          porównywanych typów danych.
        </Text>
      </View>
    </SwiperFlatList>
  );
};

export default Lecture10;
Lecture10.navigationOptions = (navigationData) => {
  const title = navigationData.navigation.getParam('course');
  return {headerTitle: title};
};

export const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  child: {
    flex: 1,
    width: width,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  image: {
    width: 170,
    height: 170,
  },
  flowersImage: {
    width: 170,
    height: 170,
  },
  numberImage: {
    width: 60,
    height: 60,
  },
  diagramImage: {
    marginBottom: 20,
  },
  lectureTitle: {
    fontSize: 20,
    fontFamily: 'OpenSansSemiBold',
    letterSpacing: 0,
    marginTop: 20,
    marginBottom: 5,
  },
  lectureText: {
    fontSize: 16,
    fontFamily: 'OpenSansRegular',
    // letterSpacing: 0,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    marginBottom: 10,
    justifyContent: 'center',
  },
  operatorText: {
    fontSize: 16,
    fontFamily: 'OpenSansSemiBold',
    // letterSpacing: 0,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    marginBottom: 10,
  },
  lectureTextBold: {
    fontSize: 16,
    fontFamily: 'OpenSansSemiBold',
    letterSpacing: 0,
    marginTop: 20,
  },
  cmdContainer: {
    paddingTop: 30,
    paddingBottom: 30,
  },
  cmdRow: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    marginBottom: 10,
  },
  cmdColumn: {
    display: 'flex',
    flexDirection: 'column',
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  numbersContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 60,
    marginRight: 20,
  },
});
