import React, {useState} from 'react';
import {
  View,
  Text,
  Modal,
  StyleSheet,
  Dimensions,
  TouchableWithoutFeedback,
} from 'react-native';

const Result = (props) => {
  const [showResult, setShowResult] = useState(true);

  const onPr = () => {
    setShowResult(false);
    console.log('FALSE');
    console.log(props.result)
  };

  return (
    <TouchableWithoutFeedback onPress={() => onPr()}>
      <View style={styles.modalContainer}>
        <Modal
          visible={showResult}
          transparent={true}
          position="center"
          animationType="fade">
          <View style={styles.content}>
            <Text style={styles.textStyle}>{props.result}</Text>
          </View>
        </Modal>
      </View>
    </TouchableWithoutFeedback>
  );
};
export default Result;

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: 'yellow',
  },
  content: {
    marginTop: Dimensions.get('window').height / 2 + 100,
    backgroundColor: 'black',
    width: Dimensions.get('window').width - 80,
    height: 200,
    shadowRadius: 10,
    borderRadius: 10,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    margin: 50,
  },
  textStyle: {
    color: 'white',
    margin: 10,
  },
});
