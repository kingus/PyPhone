import React, {useState} from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {useSelector} from 'react-redux';
import monster0 from '../images/monsters/monster0.png';
import monster1 from '../images/monsters/monster1.png';
import monster2 from '../images/monsters/monster2.png';
import monster3 from '../images/monsters/monster3.png';
import monster4 from '../images/monsters/monster4.png';
import monster5 from '../images/monsters/monster5.png';

const UserMonster = (props) => {
  const [monstersList, setMonstersList] = useState([
    monster0,
    monster1,
    monster2,
    monster3,
    monster4,
    monster5,
  ]);
  const userAvatar = useSelector((state) => state.auth.avatar);

  return (
    <View style={styles.userInfo}>
      <Image source={monstersList[userAvatar]} style={styles.monster}></Image>
    </View>
  );
};

export default UserMonster;

const styles = StyleSheet.create({
  monster: {
    width: 100,
    height: 100,
    margin: 10,
  },
});
