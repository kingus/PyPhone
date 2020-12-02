import React, {useState} from 'react';
import {StyleSheet, View, Image, ImageBackground, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import award from '../../images/achievements/award.png';

const AwardIcon = (props) => {
  const [active, setActive] = useState(props.active);

  return (
    <TouchableOpacity>
      {active ? (
        <ImageBackground source={award} style={styles.image}>
          <View
            style={{
              position: 'absolute',
              top: 15,
              left: 0,
              right: 0,
              bottom: 0,
              alignItems: 'center',
            }}>
            <Text style={styles.xpText}>{props.number}</Text>
          </View>
        </ImageBackground>
      ) : (
        <ImageBackground
          source={award}
          style={styles.image}
          tintColor="#5afffb">
          <View
            style={{
              position: 'absolute',
              top: 15,
              left: 0,
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
  },
  image: {
    width: 70,
    height: 70,
    margin: 15,
  },
});
