import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  FlatList,
  Modal,
  TouchableHighlight,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import CoinIcon from '../components/icons/CoinIcon';
import AwardIcon from '../components/icons/AwardIcon';
import {useDispatch, useSelector} from 'react-redux';
import GoldIcon from '../components/icons/GoldIcon';
import SilverIcon from '../components/icons/SilverIcon';
import FirstCorrect from '../components/icons/FirstCorrect';
import ThirdCorrect from '../components/icons/ThirdCorrect';
import CalendarIcon from '../components/icons/CalendarIcon';
import CodeIcon from '../components/icons/CodeIcon';
import DiplomaIcon from '../components/icons/DiplomaIcon';
import {View} from 'react-native-animatable';
import AwardIcon2 from '../components/icons/AwardIcon2';

const Achievements = (props) => {
  const [visible, setVisible] = useState(false);
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();
  const achievementsList = useSelector(
    (state) => state.achievements.achievementsList,
  );
  const [newList, setNewList] = useState(achievementsList);

  const pressAchievement = (description) => {
    setVisible(true);
    setDescription(description);
  };

  useEffect(() => {
    setNewList(achievementsList);
    console.log('ACHIEVEMENTS LIST, ', achievementsList);
  }, [achievementsList]);

  return (
    // <LinearGradient
    //   colors={['#34adf9', '#8ee7fe', '#34adf9']}
    //   style={styles.linearGradient}>
    <View
      style={styles.container}
      onTouchStart={() => {
        setVisible(false);
      }}>
      <Text style={styles.appName}>Twoje osiągnięcia</Text>
      <FlatList
        numColumns={4}
        keyExtractor={(item) => item.achievementName}
        data={newList}
        renderItem={({item}) => {
          if (item.achievementType === 'coin')
            return (
              <CoinIcon
                xp={item.achievementName}
                description={item.achievementDescription}
                active={item.active}
                pressAchievement={pressAchievement}></CoinIcon>
            );
          if (item.achievementType === 'award')
            return (
              <AwardIcon
                number={item.achievementName}
                active={item.active}
                description={item.achievementDescription}
                pressAchievement={pressAchievement}></AwardIcon>
            );

          if (item.achievementType === 'allCorrect') {
            return (
              <GoldIcon
                active={item.active}
                description={item.achievementDescription}
                pressAchievement={pressAchievement}></GoldIcon>
            );
          }
          if (item.achievementType === '75correct') {
            return (
              <SilverIcon
                active={item.active}
                description={item.achievementDescription}
                pressAchievement={pressAchievement}></SilverIcon>
            );
          }
          if (item.achievementType === 'firstCorrect') {
            return (
              <FirstCorrect
                active={item.active}
                description={item.achievementDescription}
                pressAchievement={pressAchievement}></FirstCorrect>
            );
          }
          if (item.achievementType === 'thirdCorrect') {
            return (
              <ThirdCorrect
                active={item.active}
                description={item.achievementDescription}
                pressAchievement={pressAchievement}></ThirdCorrect>
            );
          }
          if (item.achievementType === 'calendar') {
            return (
              <CalendarIcon
                active={item.active}
                description={item.achievementDescription}
                pressAchievement={pressAchievement}></CalendarIcon>
            );
          }
          if (item.achievementType === 'code') {
            return (
              <CodeIcon
                active={item.active}
                description={item.achievementDescription}
                pressAchievement={pressAchievement}></CodeIcon>
            );
          }
          if (item.achievementType === 'diploma') {
            return (
              <DiplomaIcon
                active={item.active}
                description={item.achievementDescription}
                pressAchievement={pressAchievement}></DiplomaIcon>
            );
          }
        }}
      />
      <Modal
        animationType="slide"
        transparent={true}
        visible={visible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>{description}</Text>
          </View>
        </View>
      </Modal>
    </View>
    // </LinearGradient>
  );
};
export default Achievements;

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    display: 'flex',
    alignItems: 'stretch',
  },
  container: {
    backgroundColor: '#00072b',
    flex: 1,
    alignItems: 'center',
    borderRadius: 5,
    display: 'flex',
  },
  firstLine: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 40,
  },
  flatContainer: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
  },
  modalText: {
    color: '#00072b',
    textAlign: 'center',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 40,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    opacity: 0.9,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  appName: {
    fontSize: 48,
    paddingTop: 50,
    textAlign: 'center',
    fontFamily: 'OpenSansRegular',
    letterSpacing: 0,
    textAlign: 'center',
    fontWeight: '700',
    letterSpacing: 0.1,
    color: '#ffe25b',
    textShadowColor: 'rgba(0, 0, 0, 0.45)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
    marginBottom: 40,
  },
  image: {
    width: 80,
    height: 80,
    margin: 10,
    backgroundColor: 'red',
  },
  xpText: {
    fontWeight: 'bold',
    color: '#D37C00',
  },
});
