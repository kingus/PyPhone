import React from 'react';
import {Text, Dimensions, StyleSheet, View} from 'react-native';
import SwiperFlatList from 'react-native-swiper-flatlist';
import CommandLine from '../components/CommandLine';

const Lecture2 = () => {
  return (
    <SwiperFlatList
      index={0}
      showPagination
      backgroundColor="white"
      paginationDefaultColor="#f9f9f9"
      paginationActiveColor="#d0f7ff"
      paginationStyleItem={styles.active}>
      <View style={styles.child}>
        <Text style={styles.lectureTitle}>Ciągi znaków</Text>

        <Text style={styles.lectureText}>
          Kolejnym często wykorzystywanym typem danych jest{' '}
          <Text style={styles.lectureTextBold}>{' string '}</Text>, czyli ciąg
          znaków.
        </Text>
        <CommandLine
          lines={[">>> print('Hello world')", 'Hello world']}></CommandLine>
        <Text style={styles.lectureTitle}>Konkatenacja</Text>

        <Text style={styles.lectureText}>
          Jeśli chcemy połączyć dwa ciągi znaków w jeden, możemy to zrobić za
          pomocą operatora “+”. Operator zmienia swoje działanie w zależności od
          typów danych wartości, które się obok niego znajdują. Jeśli chcemy
          dodać do siebie dwie wartości typu int możemy to zrobić w następujący
          sposób:
        </Text>
        <CommandLine lines={['>>> 3 + 2', '5']}></CommandLine>

        <Text style={styles.lectureText}>
          jeśli chcemy połączyć dwa ciągi znaków możemy do tego wykorzystać
          także znak +
        </Text>
        <CommandLine
          lines={[">>> 'Hello ' + 'world'", 'Hello world']}></CommandLine>
      </View>

      <View style={styles.child}>
        <Text style={styles.lectureTitle}>Replikacja</Text>

        <Text style={styles.lectureText}>
          Operator * wykorzystywany w połączeniu ze stringiem oraz intem służy
          jako operator replikacji. Za jego pomocą ciąg znaków zostanie
          zwielokrotniony odpowiednią ilość razy.
        </Text>
        <CommandLine
          lines={[
            ">>> 'Hello' * 5",
            'HelloHelloHelloHelloHello',
          ]}></CommandLine>
        <Text style={styles.lectureTitle}>Długość ciągu znaków – len()</Text>

        <Text style={styles.lectureText}>
          Funkcja len() przyjmuje jako parametr ciąg znaków i zwraca liczbę
          znaków w danym ciągu.
        </Text>
        <CommandLine lines={[">>>len('Hello')", '5']}></CommandLine>
      </View>

      <View style={styles.child}>
        <Text style={styles.lectureText}>
          Funkcja upper() przyjmuje jako parametr string i zwraca ten sam ciąg
          znaków napisany wielkimi literami.
        </Text>
        <CommandLine lines={[">>> 'hello'.upper()", 'HELLO']}></CommandLine>
        <Text style={styles.lectureText}>
          Funkcja isupper() sprawdza, czy przekazany jako parametr ciąg znaków
          składa się z wielkich liter. Jeśli tak, zwraca warotść true, jeśli nie
          – false.
        </Text>
        <CommandLine
          lines={[
            ">>> 'hello'.isupper()",
            'False',
            ">>> 'HELLO'.isupper()",
            'True',
          ]}></CommandLine>
      </View>
      <View style={styles.child}>
        <Text style={styles.lectureText}>
          Funkcja lower() przyjmuje jako parametr string i zwraca ten sam ciąg
          znaków napisany małymi literami.
        </Text>
        <CommandLine lines={[">>> 'HELLO'.lower()", 'hello']}></CommandLine>
        <Text style={styles.lectureText}>
          Funkcja islower() sprawdza, czy przekazany jako parametr ciąg znaków
          składa się z małych liter. Jeśli tak, zwraca warotść true, jeśli nie –
          false.
        </Text>
        <CommandLine
          lines={[
            ">>> 'hello'.islower()",
            'True',
            ">>> 'HELLO'.islower()",
            'False',
          ]}></CommandLine>
      </View>
      <View style={styles.child}>
        <Text style={styles.lectureTitle}>startswith() endswith() </Text>

        <Text style={styles.lectureText}>
          Funkcje
          <Text style={styles.lectureTextBold}>{' startswith() '}</Text> i
          <Text style={styles.lectureTextBold}>{' endswith() '}</Text> zwracają
          True, jeśli ciąg znaków zaczyna/kończy się na przekazany ciąg znaków.
          W przeciwnym przypadku fukcja zwraca wartość False.
        </Text>
        <CommandLine
          lines={[
            ">>> 'Hello world'.startswith('Hello')",
            'True',
            ">>> 'Hello world'.startswith('world')",
            'False',
            ">>> 'Hello world'.endswith('Hello')",
            'False',
            ">>> 'Hello world'.endswith('world')",
            'True',
          ]}></CommandLine>
      </View>
    </SwiperFlatList>
  );
};

export default Lecture2;
Lecture2.navigationOptions = (navigationData) => {
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
    marginTop: 20,
  },
  cmdContainer: {
    paddingTop: 30,
    paddingBottom: 30,
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
