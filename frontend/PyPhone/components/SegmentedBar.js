import React, {useState, useEffect} from 'react';
import {Text, Dimensions, Image, StyleSheet, View} from 'react-native';

const SegmentedBar = (props) => {
  const [items, setItems] = useState(() => {
    var list = [];
    for (var i = 0; i < props.numOfExercises; i++) {
      if (i <= props.currentExercise) list.push(true);
      else {
        list.push(false);
      }
    }
    console.log(list);
    console.log(props.currentExercise);

    return list;
  });

  useEffect(() => {
    setItems(() => {
      var list = [];
      for (var i = 0; i < props.numOfExercises; i++) {
        if (i <= props.currentExercise) list.push(true);
        else {
          list.push(false);
        }
      }
      console.log(list);
      console.log(props.currentExercise);

      return list;
    });
  }, [props]);

  return (
    <View style={styles.container}>
      {items.map((record) =>
        record === true ? (
          <View style={styles.itemDone}></View>
        ) : (
          <View style={styles.item}></View>
        ),
      )}
    </View>
  );
};

export default SegmentedBar;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 2,
  },
  item: {
    backgroundColor: '#5afffb',
    margin: 2,
    height: 5,
    flex: 1,
    borderColor: 'grey',
    opacity: 0.5,
  },
  itemDone: {
    backgroundColor: '#5afffb',
    margin: 2,
    height: 5,
    flex: 1,
  },
});
