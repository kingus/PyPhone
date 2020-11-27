import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import image from '../images/project.png';
import ProgressBar from './ProgressBar';
const Card = (props) => {
  return (
    <TouchableOpacity style={styles.card}>
      <Image source={image} style={styles.image}></Image>

      <View>
        <Text style={styles.category}>{props.category}</Text>
      </View>
      <ProgressBar completed={props.completed} />
    </TouchableOpacity>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    display: 'flex',
    marginVertical: 5,
    width: 400,
    height: 120,
    borderRadius: 5,
    elevation: 5,
    backgroundColor: 'white', // invisible color
    justifyContent: 'center',

    alignItems: 'center',
  },
  category: {
    color: '#49a9c4',
  },
  image: {
    width: 60,
    height: 60,
  },
});
