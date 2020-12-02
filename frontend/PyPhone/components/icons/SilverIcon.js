import React, {useState, useEffect} from 'react';
import {StyleSheet, Image} from 'react-native';
import silvermedal from '../../images/achievements/silver-medal.png';
import {TouchableOpacity} from 'react-native-gesture-handler';

const SilverIcon = (props) => {
  const [active, setActive] = useState(props.active);

  return (
    <TouchableOpacity onPress={() => props.pressAchievement(props.description)}>
      {active ? (
        <Image source={silvermedal} style={styles.image}></Image>
      ) : (
        <Image
          source={silvermedal}
          style={styles.image}
          tintColor="#5afffb"></Image>
      )}
    </TouchableOpacity>
  );
};
export default SilverIcon;

const styles = StyleSheet.create({
  image: {
    width: 70,
    height: 70,
    margin: 15,
  },
});
