import React from 'react';
import {Text, Dimensions, StyleSheet, View, Image} from 'react-native';
import SwiperFlatList from 'react-native-swiper-flatlist';
import CommandLine from '../components/CommandLine';
import forImage from '../images/for.png';

const Lecture12 = () => {
  return (
    <SwiperFlatList
      index={0}
      showPagination
      backgroundColor="white"
      paginationDefaultColor="#f9f9f9"
      paginationActiveColor="#d0f7ff"
      paginationStyleItem={styles.active}>
      <View style={styles.child}>
        <Text style={styles.lectureTitle}>Pętla for</Text>

        <Text style={styles.lectureText}>
          Pętle w programowaniu są wykorzystywane, gdy chcemy, aby dana część
          kodu wykonała się wielokrotnie.
        </Text>

        <Text style={styles.lectureText}>
          <Text style={styles.lectureTextBold}>{'Pętla for'}</Text> służy do
          wykonania fragmentu kodu określoną liczbę razy, opierając się na
          uporządkowanej liście elementów. W jej deklaracji możemy opisać
          wartość parametru początkowego i końcowego, które pozwolą nam na
          wykonanie odpowiedniej liczby iteracji.
        </Text>
        <CommandLine
          lines={[
            'for i in range(0, 5):',
            '    print(i)',
            '',
            '[OUTPUT]',
            '0',
            '1',
            '2',
            '3',
            '4',
          ]}></CommandLine>

        <Text style={styles.lectureText}>
          W powyższym przykładzie udało nam się wykonać w pętli 5 razy funkcję
          print i wypisać 5 cyfr od zera do czterech.
        </Text>
      </View>
      <View style={styles.child}>
        <Text style={styles.lectureTitle}>
          Funkcja range(start, stop, step)
        </Text>

        <Text style={styles.lectureText}>
          Funkcja range jest często wykorzystywana przy tworzeniu pętli for.
          Posiada trzy parametry:
          <Text style={styles.lectureTextBold}>{' start, stop '}</Text>
          oraz <Text style={styles.lectureTextBold}>{' step. '}</Text> Parametr
          start określa początek zakresu, end - koniec, a step - co jaki krok ma
          się wykonywać nasza pętla.
        </Text>
        <Image source={forImage} style={styles.image}></Image>
        <Text style={styles.lectureText}>
          Funkcję range() możemy wykorzystać na trzy różne sposoby:
        </Text>
        <Text style={styles.lectureText}>
          <Text style={styles.lectureTextBold}>{'1.range(start, end) '}</Text>-
          parametr step otrzymuje domyślną wartość 1.
        </Text>
        <CommandLine
          lines={[
            'for i in range(0, 3):',
            '    print(i)',
            '',
            '[OUTPUT]',
            '0',
            '1',
            '2',
          ]}></CommandLine>
      </View>
      <View style={styles.child}>
        <Text style={styles.lectureText}>
          <Text style={styles.lectureTextBold}>{'2.range(end) '}</Text> - taki
          zapis oznacza, że parametry start oraz step przyjmują domyślne
          wartości – start = 0, step = 1.
        </Text>
        <CommandLine
          lines={[
            'for i in range(3):',
            '    print(i)',
            '',
            '[OUTPUT]',
            '0',
            '1',
            '2',
          ]}></CommandLine>

        <Text style={styles.lectureText}>
          <Text style={styles.lectureTextBold}>
            {'3.range(start, end, step) '}
          </Text>
          - przekazujemy wszystkie parametry, które będą wykorzystane w naszej
          pętli.
        </Text>
        <CommandLine
          lines={[
            'for i in range(0, 6, 2):',
            '    print(i)',
            '',
            '[OUTPUT]',
            '0',
            '2',
            '4',
          ]}></CommandLine>
      </View>
      <View style={styles.child}>
        <Text style={styles.lectureTitle}>Iterowanie po liście</Text>
        <Text style={styles.lectureText}>
          W pętli możemy także iterować po liście. Deklarujemy sobie zmienną i
          przypisujemy do niej listę, a następnie nazwę zmiennej podajemy w
          deklaracji pętli for.
        </Text>
        <CommandLine
          lines={[
            'miasta = ["Warszawa", "Kraków", "Gdańsk"]',
            'for i in miasta:',
            '    print(i)',
            '',
            '[OUTPUT]',
            'Warszawa',
            'Kraków',
            'Gdańsk',
          ]}></CommandLine>
        <Text style={styles.lectureTitle}>Iterowanie po stringu</Text>
        <Text style={styles.lectureText}>
          W podobny sposób możemy iterować po stringu.
        </Text>
        <CommandLine
          lines={[
            'for i in "Kraków":',
            '    print(i)',
            '',
            '[OUTPUT]',
            'K',
            'r',
            'a',
            'k',
            'ó',
            'w',
          ]}></CommandLine>
      </View>
    </SwiperFlatList>
  );
};

export default Lecture12;
Lecture12.navigationOptions = (navigationData) => {
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
    width: 300,
    height: 100,
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
