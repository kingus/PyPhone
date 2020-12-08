import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Image, ImageBackground, Text} from 'react-native';
import coin from '../../images/achievements/coin2.png';
import award from '../../images/achievements/award.png';
import {TouchableOpacity} from 'react-native-gesture-handler';

const AwardIcon = (props) => {
  const [active, setActive] = useState(props.active);

  useEffect(() => {
    setActive(props.active);
    console.log('PROPS ACTIVE AWARD', props.active);
  }, [props.active]);

  return (
    <TouchableOpacity onPress={() => props.pressAchievement(props.description)}>
      {props.active ? (
        <View
          style={{
            alignItems: 'center',
            margin: 0,
          }}>
          <Image style={styles.image} source={award} />
          <Text style={styles.xpText}>{props.number}</Text>
        </View>
      ) : (
        <ImageBackground
          source={award}
          style={styles.image}
          tintColor="#5afffb">
          <View
            style={{
              position: 'absolute',
              top: 27,
              left: 2,
              right: 0,
              bottom: 0,
              alignItems: 'center',
            }}></View>
        </ImageBackground>
      )}
    </TouchableOpacity>
  );
};
export default AwardIcon;

const styles = StyleSheet.create({
  xpText: {
    fontWeight: 'bold',
    color: '#D37C00',
    fontSize: 12,
    position: 'absolute',
    marginTop: 30,
  },
  image: {
    width: 70,
    height: 70,
    margin: 15,
  },
});
