import React, {useState, useEffect} from 'react';
import {StyleSheet, Image} from 'react-native';
import programming from '../../images/achievements/programming.png';
import {TouchableOpacity} from 'react-native-gesture-handler';

const CodeIcon = (props) => {
  const [active, setActive] = useState(props.active);

  useEffect(() => {
    setActive(props.active);
  }, [props.active]);

  return (
    <TouchableOpacity onPress={() => props.pressAchievement(props.description)}>
      {active ? (
        <Image source={programming} style={styles.image}></Image>
      ) : (
        <Image
          source={programming}
          style={styles.image}
          tintColor="#5afffb"></Image>
      )}
    </TouchableOpacity>
  );
};
export default CodeIcon;

const styles = StyleSheet.create({
  image: {
    width: 70,
    height: 70,
    margin: 15,
  },
});
