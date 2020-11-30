import React from 'react';
import {Text, Dimensions, StyleSheet, View} from 'react-native';
import SwiperFlatList from 'react-native-swiper-flatlist';
import CommandLine from '../components/CommandLine';

const Lecture9 = () => {
  return (
    <SwiperFlatList
      index={0}
      showPagination
      backgroundColor="white"
      paginationDefaultColor="#f9f9f9"
      paginationActiveColor="#d0f7ff"
      paginationStyleItem={styles.active}>
      <View style={styles.child}>
        <Text style={styles.lectureTitle}>Operatory logiczne</Text>
        <Text style={styles.lectureText}>
          Operatory logiczne to operatory, które zwracają wartość logiczną,
          działając na argumentach reprezentujących wartości logiczne.
        </Text>
        <Text style={styles.lectureTitle}>Operator and</Text>
        <CommandLine
          lines={[
            'x = 1',
            'y = 2',
            'if (x > 0 and y > 0):',
            '    print("Liczby dodatnie.")',
          ]}></CommandLine>
        <Text style={styles.lectureText}>
          Operator logiczny and oznacza, że obydwie wartości muszą być
          prawdziwe, aby została zwrócona wartość True.
        </Text>
        <Text style={styles.lectureTitle}>Operator or</Text>
        <CommandLine
          lines={[
            'x = 1',
            'y = 2',
            'if (x > 0 or y > 0):',
            '    print("Co najmniej jedna z liczb jest dodatnia.")',
          ]}></CommandLine>
      </View>
      <View style={styles.child}>
        <Text style={styles.lectureTitle}>Operator in</Text>
        <CommandLine
          lines={[
            'x = 1',
            'if (x in [1,2,3]):',
            '    print("W zmiennej x przechowywana jest cyfra 1, 2 lub 3")',
          ]}></CommandLine>
        <Text style={styles.lectureText}>
          Operator logiczny in pozwala sprawdzić, czy zmienna jest zawarta w
          innym obiekcie(w tym przypadku w tablicy[]).
        </Text>
        <Text style={styles.lectureTitle}>Operator is</Text>
        <CommandLine
          lines={[
            '>>> x = 1',
            '>>> y = 2',
            '>>> x is y',
            'False',
          ]}></CommandLine>
        <Text style={styles.lectureText}>
          Operator logiczny is pozwala sprawdzić, czy porównywane wartości są
          takie same.
        </Text>
        <Text style={styles.lectureTitle}>Operator not</Text>
        <CommandLine
          lines={[
            '>>> print(not False)',
            'True',
            '>>> print(not True and False)',
            'False',
          ]}></CommandLine>
        <Text style={styles.lectureText}>
          Poprzez zapisanie operatora not przed wyrażeniem logicznym, zmieniamy
          jego wartość logiczną na przeciwną.
        </Text>
      </View>
      <View style={styles.child}>
        <Text style={styles.lectureTitle}>Czym się różni "is" od "=="? </Text>
        <Text style={styles.lectureText}>
          Znak == sprawdza, czy obie strony warunku zawierają takie same
          wartości, natomiast is sprawdza, czy obie zmienne wskazują na ten sam
          obiekt.
        </Text>
        <CommandLine
          lines={[
            'print("hello" is "hello")',
            'True',
            'print("hello" == "hello")',
            'True',
            '',
            '>>> print("hellohello" is ("hello" * 2))',
            'True',
            '>>> print("hellohello" == ("hello" * 2))',
            'True',
            '',
            ">>> x = 'hello'",
            '>>> y = "world"',
            '>>> z = "hello world"',
            '>>> print(z is (x + " " + y))',
            'False',
            '>>> print(z == (x + " " + y))',
            'True',
          ]}></CommandLine>
      </View>
    </SwiperFlatList>
  );
};

export default Lecture9;
Lecture9.navigationOptions = (navigationData) => {
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
    marginTop: 12,
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
