import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Image, ImageBackground, Text} from 'react-native';
import coin from '../../images/achievements/coin2.png';
import {TouchableOpacity} from 'react-native-gesture-handler';

const CoinIcon = (props) => {
  const [active, setActive] = useState(props.active);

  useEffect(() => {
    setActive(props.active);
    console.log('PROPS ACTIVE COIN', props.active);
  }, [props.active]);

  return (
    <TouchableOpacity onPress={() => props.pressAchievement(props.description)}>
      {props.active ? (
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            margin: 0,
          }}>
          <Image style={styles.image} source={coin} />
          <Text style={styles.xpText}>{props.xp}</Text>
        </View>
      ) : (
        <ImageBackground source={coin} style={styles.image} tintColor="#5afffb">
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
export default CoinIcon;

const styles = StyleSheet.create({
  xpText: {
    fontWeight: 'bold',
    color: '#D37C00',
    fontSize: 12,
    position: 'absolute',
  },
  image: {
    width: 70,
    height: 70,
    margin: 15,
  },
});
