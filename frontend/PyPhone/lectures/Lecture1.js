import React from 'react';
import {Text, Dimensions, Image, StyleSheet, View} from 'react-native';
import diagram from '../images/diagram.png';
import flowers from '../images/flowers.png';
import flowers2 from '../images/flowers2.png';
import one from '../images/numbers/one.png';
import two from '../images/numbers/two.png';
import three from '../images/numbers/three.png';
import four from '../images/numbers/four.png';
import SwiperFlatList from 'react-native-swiper-flatlist';
import CommandLine from '../components/CommandLine';

const Lecture1 = () => {
  return (
    <SwiperFlatList
      index={0}
      showPagination
      paginationDefaultColor="#f9f9f9"
      paginationActiveColor="#d0f7ff"
      backgroundColor="white"
      paginationStyleItem={styles.active}>
      <View style={styles.child}>
        <Text style={styles.lectureTitle}>Czym są zmienne?</Text>
        <Image source={flowers} style={styles.image}></Image>

        <Text style={styles.lectureText}>
          <Text style={styles.lectureTextBold}>{'Zmienna '}</Text> jest
          podstawowym pojęciem wykorzystywanym w programowaniu. Zmienną możemy
          przyrównać do pudełka, w którym przechowujemy przedmioty lub doniczki,
          w której sadzimy różne gatunki kwiatów. Każda z doniczek ma tabliczkę
          z jej nazwą (nazwą zmiennej), a wewnątrz niej przechowujemy jej
          zawartość.
        </Text>
        <Text style={styles.lectureText}>
          Aby zapisać lub odczytać daną wartość z pamięci komputera, nie musimy
          znać jej adresu. Możemy się do niej odwołać za pomocą jej nazwy.
        </Text>
      </View>
      <View style={styles.child}>
        <Image source={flowers2} style={styles.flowersImage}></Image>

        <Text style={styles.lectureText}>
          Zmienne mogą przechowywać różne typy danych: od liczb, poprzez ciągi
          znaków aż po różne struktury danych - listy, słowniki, krotki.
        </Text>
        <View style={styles.cmdContainer}>
          <CommandLine
            lines={[
              'typ = "tulipan"',
              'kolor = "czerwony"',
              'doniczka1 = {"typ": typ, "kolor": kolor}',
            ]}></CommandLine>
        </View>
      </View>

      <View style={styles.child}>
        <Text style={styles.lectureTitle}>Instrukcja przypisania</Text>

        <Text style={styles.lectureText}>
          Na początku należy wywołać
          <Text style={styles.lectureTextBold}>
            {' instrukcję przypisania'}
          </Text>
          , która służy nadaniu zmiennej wartości.
        </Text>
        <Image source={diagram} style={styles.diagramImage}></Image>

        <Text style={styles.lectureText}>
          Poniższa instrukcja przypisania tworzy zmienną "doniczka_1" i
          przypisuje do niej wartość "tulipan".
        </Text>
        <CommandLine lines={['doniczka_1 = "tulipan"']}></CommandLine>
      </View>

      <View style={styles.child}>
        <Text style={styles.lectureTitle}>Jak nazywać zmienne?</Text>
        <View style={styles.numbersContainer}>
          <Image source={one} style={styles.numberImage}></Image>

          <Text style={styles.lectureText}>
            Pierwszy znak w nazwie zmiennej musi być literą alfabetu lub znakiem
            podkreślenia "_" (te zmienne mają w Pythonie specjalnie znaczenie),
            chociaż zwykle jako pierwszy znak używa się małą literę alfabetu.{' '}
          </Text>
        </View>
        <View style={styles.numbersContainer}>
          <Text style={styles.lectureText}>
            Pozostałymi znakami w nazwie zmiennej mogą być litery alfabetu,
            cyfry lub "_".{' '}
          </Text>
          <Image source={two} style={styles.numberImage}></Image>
        </View>
        <View style={styles.numbersContainer}>
          <Image source={three} style={styles.numberImage}></Image>

          <Text style={styles.lectureText}>
            Nazwy zmiennych są "case-sensitive", co oznacza to, że rozróżniana
            jest wielkość liter.{' '}
          </Text>
        </View>
        <View style={styles.numbersContainer}>
          <Text style={styles.lectureText}>
            Zwykle nazwy zmiennych nadaje się w stylu camelCase, czyli pierwszy
            wyraz w nazwie zmiennej zapisujemy za pomocą małej litery, a każdy
            kolejny wyraz rozpoczynamy od wielkiej litery. Należy pamiętać, że
            kod, który piszemy powinien być samokomentujący się. Pamiętaj, żeby
            nazywać zmienne zgodnie z ich przeznaczeniem, aby nasz kod był
            czytelny.
          </Text>
          <Image source={four} style={styles.numberImage}></Image>
        </View>
      </View>
    </SwiperFlatList>
  );
};

export default Lecture1;
Lecture1.navigationOptions = (navigationData) => {
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
