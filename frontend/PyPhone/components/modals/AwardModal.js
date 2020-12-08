import React, {useState} from 'react';
import {Alert, Modal, StyleSheet, Text, View, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AwardIcon from '../../components/icons/AwardIcon';

const AwardModal = (props) => {
  const [visible, setVisible] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);

  const deactivateModal = () => {
    setVisible(false);
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
      }}>
      <View style={styles.centeredView}>
        <View style={styles.modalViewContainer}>
          <View style={styles.iconStyle}>
            <Icon
              name="close"
              size={25}
              color="#abf0ff"
              onPress={() => {
                deactivateModal();
              }}
            />
          </View>
          <AwardIcon
            active={true}
            number={props.data.achievementName}></AwardIcon>

          <Text
            style={styles.mainModalText}
            onPress={() => {
              console.log(props.data);
              console.log('ID', props.id);
            }}>
            Gratulacje!
          </Text>
          <Text style={styles.modalText}>
            Udało Ci się ukończyć {props.data.achievementName} kursów,
            powodzenia w dalszej nauce!
          </Text>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalText: {
    color: '#ffe25b',
    textAlign: 'center',
    width: 250,
    margin: 10,
    fontFamily: 'OpenSansRegular',
  },
  mainModalText: {
    color: '#ffe25b',
    textAlign: 'center',
    width: 250,
    fontWeight: '700',
    fontSize: 18,
    fontFamily: 'OpenSansRegular',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  modalViewContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: 320,
    height: 220,
    backgroundColor: '#00072b',
    borderRadius: 20,
    opacity: 0.9,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    width: 60,
    height: 60,
    marginBottom: 5,
  },
  iconStyle: {
    alignItems: 'flex-end',
    width: '100%',
    marginTop: 10,
    marginRight: 30,
  },
});

export default AwardModal;
