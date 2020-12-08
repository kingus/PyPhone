import React, {useState, useEffect} from 'react';
import {StyleSheet, Image} from 'react-native';
import goldmedal from '../../images/achievements/gold-medal.png';
import {TouchableOpacity} from 'react-native-gesture-handler';

const GoldIcon = (props) => {
  const [active, setActive] = useState(props.active);

  return (
    <TouchableOpacity onPress={() => props.pressAchievement(props.description)}>
      {props.active ? (
        <Image source={goldmedal} style={styles.image}></Image>
      ) : (
        <Image
          source={goldmedal}
          style={styles.image}
          tintColor="#5afffb"></Image>
      )}
    </TouchableOpacity>
  );
};
export default GoldIcon;

const styles = StyleSheet.create({
  image: {
    width: 70,
    height: 70,
    margin: 15,
  },
});
