import React, {useState, useEffect} from 'react';
import {StyleSheet, Image} from 'react-native';
import satisfaction from '../../images/achievements/satisfaction.png';
import {TouchableOpacity} from 'react-native-gesture-handler';

const FirstCorrect = (props) => {
  const [active, setActive] = useState(props.active);

  return (
    <TouchableOpacity>
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
export default FirstCorrect;

const styles = StyleSheet.create({
  image: {
    width: 70,
    height: 70,
    margin: 15,
  },
});
