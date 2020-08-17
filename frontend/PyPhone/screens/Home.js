import React from 'react';
import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Card from '../components/Card';
import image from '../images/image.png';
import {Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.main}></View>
      <ScrollView>
        <Card completed="30%" category="STRINGS"></Card>
        <Card completed="50%" category="NUMBERS"></Card>
        <Card completed="60%" category="LISTS"></Card>
        <Card completed="70%" category="DICTIONARIES"></Card>
        <Card completed="70%" category="DICTIONARIES"></Card>
        <Card completed="70%" category="DICTIONARIES"></Card>
        <Card completed="70%" category="DICTIONARIES"></Card>
        <Card completed="70%" category="DICTIONARIES"></Card>
        <Card completed="70%" category="DICTIONARIES"></Card>
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#c9e8ff',
  },
  main: {
    height: '20%',
    width: windowWidth,
    backgroundColor: 'white',
    marginBottom: 10,
    alignItems: 'center',
  },
  image: {
    height: 100,
    width: 100,
    rotation: -30,
  },
  text: {
    paddingTop: 10,
    fontSize: 20,
    color: '#49a9c4',
  },
});
