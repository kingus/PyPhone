import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';
import DraggableFlatList from 'react-native-draggable-flatlist';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as Animatable from 'react-native-animatable';

const DragableExercise = (props) => {
  const AnimationRef = useRef(null);

  const [answers, setAnswers] = useState(
    props.answers.map((d, index) => ({
      answer: d,
      key: index,
    })),
  );

  useEffect(() => {
    props.sendUsersAnswer(answers);
    if (AnimationRef) {
      AnimationRef.current?.bounceIn();
    }
  }, [answers]);

  const renderItem = ({item, index, drag, isActive}) => {
    return (
      <TouchableOpacity
        style={{
          backgroundColor: '#00072b',
          margin: 5,
          display: 'flex',
          flexDirection: 'row',
          padding: 10,
          alignItems: 'center',
          justifyContent: 'space-between',
          borderRadius: 10,
          width: '80%',
          alignSelf: 'center',
        }}>
        <Text style={styles.textStyle}>{item.answer}</Text>
        <View style={styles.iconContainer} onTouchStart={drag}>
          <Icon name="bars" size={30} color="#5afffb" />
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <DraggableFlatList
      data={answers}
      renderItem={renderItem}
      keyExtractor={(item, index) => `draggable-item-${item.key}`}
      onDragEnd={({data}) => setAnswers(data)}
    />
  );
};

export default DragableExercise;

const styles = StyleSheet.create({
  iconContainer: {
    height: 50,
    width: 80,
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingRight: 10,
  },
  textStyle: {
    color: '#5afffb',
    fontFamily: 'Inconsolata',
    letterSpacing: 1,
    fontSize: 18,
    marginLeft: 10,
  },
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
  answersContainer: {
    backgroundColor: 'yellow',
    height: 300,
  },
});
