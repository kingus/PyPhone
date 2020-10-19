import React, {PureComponent} from 'react';
import {Text, Dimensions, Image, StyleSheet, View} from 'react-native';
import box from '../images/package.png';

import SwiperFlatList from 'react-native-swiper-flatlist';

const Lecture = () => {
  return (
    <View style={styles.container}>
      <SwiperFlatList
        index={0}
        showPagination
        paginationDefaultColor="#f9f9f9"
        paginationActiveColor="#d0f7ff"
        paginationStyleItem={styles.active}>
        <View style={styles.child}>
          <Text style={styles.lectureTitle}>Zmienne</Text>
          <Image source={box} style={styles.image}></Image>

          <Text style={styles.lectureText}>
            W programowaniu zmienne są kontenerami, które przechowują wartości.
          </Text>

          <Text style={styles.lectureText}>
            Zmienne mogą przechowywać różne typy danych: od liczb, poprzez ciągi
            znaków aż po całe funkcje.
          </Text>
          <Text style={styles.lectureText}>
            W programowaniu zmienne są kontenerami, które przechowują wartości.
          </Text>
        </View>
        <View style={[styles.child, {backgroundColor: 'thistle'}]}>
          <Text style={styles.text}>2</Text>
        </View>
        <View style={[styles.child, {backgroundColor: 'skyblue'}]}>
          <Text style={styles.text}>3</Text>
        </View>
        <View style={[styles.child, {backgroundColor: 'teal'}]}>
          <Text style={styles.text}>4</Text>
        </View>
      </SwiperFlatList>
    </View>
  );
};

export default Lecture;
export const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  child: {
    flex: 1,
    width: width,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: width * 0.5,
    textAlign: 'center',
  },
  active: {
    borderRadius: 10,
    borderColor: 'white',
    backgroundColor: 'red',
    borderWidth: 1,
    shadowColor: '#abf0ff',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0,

    elevation: 1,
  },
  // lecture container
  image: {
    width: 100,
    height: 120,
  },
  lectureTitle: {
    fontSize: 20,
    fontFamily: 'OpenSansSemiBold',
    letterSpacing: 0,
  },
  lectureText: {
    fontSize: 16,
    fontFamily: 'OpenSansRegular',
    letterSpacing: 0,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 20,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
