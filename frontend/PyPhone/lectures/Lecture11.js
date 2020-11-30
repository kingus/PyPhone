import React from 'react';
import {Text, Dimensions, StyleSheet, View} from 'react-native';
import SwiperFlatList from 'react-native-swiper-flatlist';
import CommandLine from '../components/CommandLine';

const Lecture11 = () => {
  return (
    <SwiperFlatList
      index={0}
      showPagination
      backgroundColor="white"
      paginationDefaultColor="#f9f9f9"
      paginationActiveColor="#d0f7ff"
      paginationStyleItem={styles.active}>
      <View style={styles.child}>
        <Text style={styles.lectureTitle}>Instrukcje warunkowe</Text>

        <Text style={styles.lectureText}>
          W programowaniu, aby umożliwić podejmowanie decyzji, wykorzystuje się
          <Text style={styles.lectureTextBold}>{' instrukcje warunkowe'}</Text>.
          Instrukcje te pozwalają na wykonywanie fragmentów kodu, tylko w
          przypadku, gdy spełnią dany warunek.
        </Text>
        <CommandLine lines={['if (1 == 1): ', '    print(1)']}></CommandLine>

        <Text style={styles.lectureText}>
          W taki sposób możemy sprawdzić, czy użytkownik logujący się do naszej
          aplikacji podał poprawne hasło i jeśli tak, przekierować go do
          głównego menu aplikacji.
        </Text>
        <CommandLine
          lines={[
            "haslo = 'python123'",
            "wpisaneHaslo = input('Podaj haslo: ')",
            'if (wpisaneHaslo == haslo):',
            "    print('Poprawne hasło')",
          ]}></CommandLine>

        <Text style={styles.lectureText}>
          W powyższym kodzie początkowo określamy jakie jest hasło naszego
          użytkownika. Następnie za pomocą funkcji input() pobieramy od
          użytkownika hasło. Za pomocą instrukcji warunkowej sprawdzamy, czy
          hasło zapisane w programie i hasło podane przez użytkownika są takie
          same.
        </Text>
      </View>

      <View style={styles.child}>
        <Text style={styles.lectureTitle}>Instrukcja if</Text>
        <Text style={styles.lectureText}>
          Aby z łatwością pisać instrukcje warunkowe należy zrozumieć ich
          konstrukcję. Po słowie if, zapisujemy warunek, który będziemy
          sprawdzać w instrukcji. Na końcu warunku zapisujemy dwukropek. W
          kolejnej linii zapisujemy instrukcje, które mają się wykonać, gdy
          warunek przyjmie wartość True.
        </Text>
        <Text style={styles.lectureTitle}>Klauzula else</Text>
        <Text style={styles.lectureText}>
          <Text style={styles.lectureTextBold}>{'Klauzula else '}</Text>
          umożliwia wykonanie określonych fragmentów kodu w przeciwnym wypadku
          niż określony w warunku.
        </Text>
        <CommandLine
          lines={[
            "haslo = 'python123'",
            "wpisaneHaslo = input('Podaj haslo: ')",
            'if (wpisaneHaslo == haslo):',
            "    print('Poprawne hasło')",
            'else:',
            "    print('Błędne hasło')",
          ]}></CommandLine>
        <Text style={styles.lectureText}>
          W powyższym programie dzięki klauzuli else, użytkownik otrzyma
          informację, że podał błędne hasło.
        </Text>
      </View>
      <View style={styles.child}>
        <Text style={styles.lectureTitle}>Klauzula elif</Text>
        <Text style={styles.lectureText}>
          <Text style={styles.lectureTextBold}>{'Klauzula elif '}</Text>
          umożliwia dokonywania wyboru, gdy mamy wiele możliwości.
        </Text>
        <CommandLine
          lines={[
            "wiek = input('Podaj swój wiek: ')",
            'if (wiek >= 18):',
            "    print('Jesteś pełnoletni.')",
            'elif(wiek > 0 and wiek < 18 ):',
            "    print('Nie jesteś pełnoletni.')",
            'else: ',
            "    print('Błędny wiek.')",
          ]}></CommandLine>
        <Text style={styles.lectureText}>
          W powyższym programie sprawdzamy, czy użytkownik jest pełnoletni.
          Jeżeli jego wiek jest większy bądź równy 18, to oznacza, że jest osobą
          pełnoletnią. Jeśli jego wiek jest mniejszy od 18, oznacza to, że jest
          niepełnoletni. W każdym innym przypadku podany przez użytkownika wiek
          jest błędny.
        </Text>
      </View>
      <View style={styles.child}>
        <Text style={styles.lectureTitle}>Operatory logiczne</Text>
        <Text style={styles.lectureText}>
          <Text style={styles.lectureTextBold}>{'Operatory logiczne '}</Text>
          umożliwiają nam pisanie bardziej rozbudowanych instrukcji warunkowych.
        </Text>
        <CommandLine
          lines={[
            "haslo = 'python123'",
            "login = 'admin'",
            "wpisaneHaslo = input('Podaj haslo: ')",
            "wpisanyLogin = input('Podaj login: ')",
            'if (login == wpisanyLogin and wpisaneHaslo == haslo):',
            "    print('Poprawne hasło.')",
            'else:',
            "    print('Błędny login lub hasło.')",
          ]}></CommandLine>
        <Text style={styles.lectureText}>
          Dzięki operatorowi logicznemu
          <Text style={styles.lectureTextBold}>{' and '}</Text>
          mamy możliwość sprawdzenia, czy użytkownik podał nie tylko prawidłowy
          login, ale także hasło.
        </Text>
        <Text style={styles.lectureText}>
          Do tworzenia instrukcji warunkowych możemy wykorzystać także inne
          operatory logiczne -
          <Text style={styles.lectureTextBold}>{' and, or, not, in, is.'}</Text>
        </Text>
      </View>
    </SwiperFlatList>
  );
};

export default Lecture11;
Lecture11.navigationOptions = (navigationData) => {
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
