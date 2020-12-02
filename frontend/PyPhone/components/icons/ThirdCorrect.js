import React, {useState, useEffect} from 'react';
import {StyleSheet, Image} from 'react-native';
import satisfaction from '../../images/achievements/satisfaction3.png';
import {TouchableOpacity} from 'react-native-gesture-handler';

const ThirdCorrect = (props) => {
  const [active, setActive] = useState(props.active);

  return (
    <TouchableOpacity onPress={() => props.pressAchievement(props.description)}>
      {active ? (
        <Image source={satisfaction} style={styles.image}></Image>
      ) : (
        <Image
          source={satisfaction}
          style={styles.image}
          tintColor="#5afffb"></Image>
      )}
    </TouchableOpacity>
  );
};
export default ThirdCorrect;

const styles = StyleSheet.create({
  image: {
    width: 70,
    height: 70,
    margin: 15,
  },
});
