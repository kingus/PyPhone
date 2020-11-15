import React, {useState, useEffect, useRef} from 'react';
import {Text, Dimensions, Image, StyleSheet, View} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as Animatable from 'react-native-animatable';

const QuizAnswerRadio = (props) => {
  const AnimationRef = useRef(null);

  const onClickCard = () => {
    // if (AnimationRef) {
    //   AnimationRef.current?.bounce();
    // }
    props.onClickCard(props.id);
  };

  // const onClickCard = () => {
  //   props.onClickCard(props.id);
  // };
  useEffect(() => {
    if (AnimationRef) {
      AnimationRef.current?.bounceIn();
    }
  }, [props.answer]);

  return (
    <TouchableWithoutFeedback onPress={onClickCard}>
      <Animatable.View
        ref={AnimationRef}
        style={styles.answerCard}
        ease="linear"
        useNativeDriver={false}
        duration={1400}>
        {props.isClicked ? (
          <Icon name="check-circle-o" size={25} color="#5afffb" />
        ) : (
          <Icon name="circle-o" size={25} color="#5afffb" />
        )}
        <Text style={styles.answerText}>{props.answer}</Text>
      </Animatable.View>
    </TouchableWithoutFeedback>
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
