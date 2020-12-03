import React, {useRef, useState} from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as Animatable from 'react-native-animatable';
import Carousel from 'react-native-snap-carousel';
import monster0 from '../images/monsters/monster0.png';
import monster1 from '../images/monsters/monster1.png';
import monster2 from '../images/monsters/monster2.png';
import monster3 from '../images/monsters/monster3.png';
import monster4 from '../images/monsters/monster4.png';
import monster5 from '../images/monsters/monster5.png';
import {width} from '../lectures/Lecture2';

const MonsterCarousel = (props) => {
  const [lista, setLista] = useState([
    monster0,
    monster1,
    monster2,
    monster3,
    monster4,
    monster5,
  ]);
  const [carousel, setCarousel] = useState(false);

  _renderItem = ({item, index}) => {
    return (
      <View style={styles.slide}>
        <Image source={item} style={styles.avatar}></Image>
        {/* <Text style={styles.carouselText}>Api</Text> */}
      </View>
    );
  };
  return (
    <View style={styles.carousel}>
      <Text style={styles.carouselText}>Wybierz postać:</Text>

      <Carousel
        ref={(c) => {
          setCarousel(c);
        }}
        data={lista}
        renderItem={_renderItem}
        sliderWidth={width}
        itemWidth={120}
        onSnapToItem={(item) => {
          props.setAvatar(item);
          console.log('ITEM ', item);
        }}
      />
    </View>
  );
};

export default MonsterCarousel;

const styles = StyleSheet.create({
  carouselText: {
    color: 'white',
    fontFamily: 'OpenSansRegular',
    fontSize: 16,
    marginBottom: 20,
    // justifyContent: 'center',
    marginLeft: 20,
    textAlign: 'left',
  },
  slide: {
    width: 150,
    marginLeft: 10,
    marginRight: 10,
    justifyContent: 'center',
    display: 'flex',
    alignItems: 'center',
  },
  avatar: {
    width: 100,
    height: 100,
  },
  carousel: {
    height: 140,
  },
});
