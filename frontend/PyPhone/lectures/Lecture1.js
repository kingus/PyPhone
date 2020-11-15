import React from 'react';
import {Text, Dimensions, Image, StyleSheet, View} from 'react-native';
import diagram from '../images/diagram.png';
import flowers from '../images/flowers.png';
import flowers2 from '../images/flowers2.png';
import one from '../images/numbers/one.png';
import two from '../images/numbers/two.png';
import three from '../images/numbers/three.png';
import four from '../images/numbers/four.png';
import operator from '../images/operator.png';
import SwiperFlatList from 'react-native-swiper-flatlist';
import CommandLine from '../components/CommandLine';

const Lecture1 = () => {
  return (
    <SwiperFlatList
      index={0}
      showPagination
      paginationDefaultColor="#f9f9f9"
      paginationActiveColor="#d0f7ff"
      paginationStyleItem={styles.active}>
      <View style={styles.child}>
        <Text style={styles.lectureText}>
          <Text style={styles.lectureTextBold}>{'Typy danych '}</Text>
          umożliwiają komputerowi przechowywać i przetwarzać dane we właściwy
          sposób w zależności od ich rodzaju. Python udostępnia kilka
          wbudowanych typów danych –
          <Text style={styles.lectureTextBold}>
            {
              ' liczby całkowite(int), liczby rzeczywiste(float), ciągi znaków(str), typ logiczny(bool) '
            }
          </Text>
          oraz wiele więcej.
        </Text>
        <Image source={flowers2} style={styles.flowersImage}></Image>

        <Text style={styles.lectureText}>
          W Pythonie są obsługiwane dwa typy liczbowe –
          <Text style={styles.lectureTextBold}>
            {' liczby całkowite(int) '}
          </Text>
          oraz
          <Text style={styles.lectureTextBold}>
            {' liczby rzeczywiste (float).'}
          </Text>
        </Text>
        <Text style={styles.lectureText}>
          <Text style={styles.lectureTextBold}>{'Liczby całkowite '}</Text> to
          liczby bez części dzięsiętnych.
        </Text>
        <Text style={styles.lectureText}>
          <Text style={styles.lectureTextBold}>{'np. '}</Text>1, 2, 13, 103
        </Text>
        <Text style={styles.lectureText}>
          <Text style={styles.lectureTextBold}>{'Liczby rzeczywiste '}</Text> to
          liczby posiadające część dziesiętną.
        </Text>
        <Text style={styles.lectureText}>
          <Text style={styles.lectureTextBold}>{'np. '}</Text> 1.2, 2.025, 13.5,
          103.99
        </Text>
      </View>
      <View style={styles.child}>
        <Text style={styles.lectureTitle}>Operatory</Text>

        <View style={styles.operatorContainer}>
          <Text style={styles.lectureTextBold}>{'Potęgowanie\n**'}</Text>
          <View style={styles.cmdContainer}>
            <CommandLine lines={['>>> print(2**3)', '8']}></CommandLine>
          </View>
        </View>
        <View style={styles.operatorContainer}>
          <Text style={styles.lectureTextBold}>{'Modulo\n%'}</Text>
          <View style={styles.cmdContainer}>
            <CommandLine lines={['>>> print(5%3)', '2']}></CommandLine>
          </View>
        </View>
        <View style={styles.operatorContainer}>
          <Text style={styles.lectureTextBold}>
            {'Dzielenie liczb całkowitych\n \\\\ '}
          </Text>
          <View style={styles.cmdContainer}>
            <CommandLine lines={['>>> print(6//4)', '1']}></CommandLine>
          </View>
        </View>
        <View style={styles.operatorContainer}>
          <Text style={styles.lectureTextBold}>{'Dzielenie\n '}</Text>
          <View style={styles.cmdContainer}>
            <CommandLine lines={['>>> print(6/4)', '1.5']}></CommandLine>
          </View>
        </View>
        <View style={styles.operatorContainer}>
          <Text style={styles.lectureTextBold}>{'Mnożenie\n* '}</Text>
          <View style={styles.cmdContainer}>
            <CommandLine lines={['>>> print(2*3)', '6']}></CommandLine>
          </View>
        </View>
        <View style={styles.operatorContainer}>
          <Text style={styles.lectureTextBold}>{'Odejmowanie\n-'}</Text>
          <View style={styles.cmdContainer}>
            <CommandLine lines={['>>> print(10-3)', '7']}></CommandLine>
          </View>
        </View>
        <View style={styles.operatorContainer}>
          <Text style={styles.lectureTextBold}>{'Dodawanie\n+'}</Text>
          <View style={styles.cmdContainer}>
            <CommandLine lines={['>>> print(2+3)', '5']}></CommandLine>
          </View>
        </View>
      </View>

      <View style={styles.child}>
        <Text style={styles.lectureTitle}>Wyrażenie </Text>

        <Image source={operator} style={styles.operatorImage}></Image>

        <Text style={styles.lectureText}>
          W Pythonie, 1+2 jest nazywane
          <Text style={styles.lectureTextBold}>{' wyrażaniem '}</Text>, czyli
          najbardziej podstawowy rodzaj instrukcji danego języka. Wyrażenie
          składa się z<Text style={styles.lectureTextBold}>{' wartości '}</Text>
          – 1 i 2 oraz z
          <Text style={styles.lectureTextBold}>{' operatora '}</Text>
          “+”. Wyrażenia są sprowadzane do pojedynczej wartości, dlatego mogą
          być umieszczane w każdym miejscu w kodzie, gdzie możemy użyć
          pojedynczej wartości.
        </Text>
      </View>
    </SwiperFlatList>
  );
};

export default Lecture1;

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
  operatorContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
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
    margin: 20,
  },
  lectureText: {
    fontSize: 16,
    fontFamily: 'OpenSansRegular',
    // letterSpacing: 0,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    marginBottom: 10,
    justifyContent: 'space-between',
    // justifyContent: 'center',
  },
  lectureTextBold: {
    fontSize: 16,
    fontFamily: 'OpenSansSemiBold',
    letterSpacing: 0,
    flex: 3,
    textAlign: 'center',
  },
  cmdContainer: {
    paddingTop: 10,
    paddingBottom: 10,
    display: 'flex',
    flex: 5,
  },
  numbersContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 60,
    marginRight: 20,
  },
  operatorImage: {
    width: 320,
    height: 120,
  },
});
