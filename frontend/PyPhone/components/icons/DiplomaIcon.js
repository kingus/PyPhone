import React, {useState, useEffect} from 'react';
import {StyleSheet, Image} from 'react-native';
import diploma from '../../images/achievements/diploma.png';
import {TouchableOpacity} from 'react-native-gesture-handler';

const DiplomaIcon = (props) => {
  const [active, setActive] = useState(props.active);

  useEffect(() => {
    setActive(props.active);
  }, [props.active]);

  return (
    <TouchableOpacity onPress={() => props.pressAchievement(props.description)}>
      {active ? (
        <Image source={diploma} style={styles.image}></Image>
      ) : (
        <Image
          source={diploma}
          style={styles.image}
          tintColor="#5afffb"></Image>
      )}
    </TouchableOpacity>
  );
};
export default DiplomaIcon;

const styles = StyleSheet.create({
  image: {
    width: 70,
    height: 70,
    margin: 15,
  },
});
