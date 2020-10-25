import React, {useState} from 'react';
import {Text, Dimensions, Image, StyleSheet, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';

const QuizAnswerCheckBox = (props) => {
  const [isClicked, setIsClicked] = useState('square-o');
  const onClickCard = () => {
    if (isClicked == 'square-o') setIsClicked('check-square-o');
    else {
      setIsClicked('square-o');
    }
  };

  return (
    <TouchableOpacity style={styles.answerCard} onPress={onClickCard}>
      <Icon name={isClicked} size={25} color="#5afffb" />
      <Text style={styles.answerText}>{props.answer}</Text>
    </TouchableOpacity>
  );
};

export default QuizAnswerCheckBox;

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
