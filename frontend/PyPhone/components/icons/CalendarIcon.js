import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Image, ImageBackground, Text} from 'react-native';
import calendar from '../../images/achievements/calendar.png';
import {TouchableOpacity} from 'react-native-gesture-handler';

const CalendarIcon = (props) => {
  const [active, setActive] = useState(props.active);

  return (
    <TouchableOpacity>
      {active ? (
        <ImageBackground source={calendar} style={styles.image}>
          <View
            style={{
              position: 'absolute',
              top: 27,
              left: 2,
              right: 0,
              bottom: 0,
              alignItems: 'center',
            }}>
            <Text style={styles.xpText}>{props.xp}</Text>
          </View>
        </ImageBackground>
      ) : (
        <ImageBackground
          source={calendar}
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
export default CalendarIcon;

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
