import React, {useState, useEffect} from 'react';
import {Text, Dimensions, Image, StyleSheet, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';

const QuizAnswerRadio = (props) => {
  const onClickCard = () => {
    props.onClickCard(props.id);
  };

  return (
    <TouchableOpacity style={styles.answerCard} onPress={onClickCard}>
      {props.isClicked ? (
        <Icon name="check-circle-o" size={25} color="#5afffb" />
      ) : (
        <Icon name="circle-o" size={25} color="#5afffb" />
      )}
      <Text style={styles.answerText}>{props.answer}</Text>
    </TouchableOpacity>
  );
};

export default QuizAnswerRadio;

const styles = StyleSheet.create({
  answerCard: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#00072b',
    borderRadius: 5,
    width: 320,
    height: 40,
    margin: 10,
    padding: 10,
    elevation: 2,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  answerText: {
    fontSize: 16,
    fontFamily: 'OpenSansRegular',
    letterSpacing: 0,
    justifyContent: 'space-around',
    alignItems: 'center',
    marginLeft: 15,
    color: '#5afffb',
  },
});
