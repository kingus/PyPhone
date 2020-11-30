import React, {useState} from 'react';
import {
  View,
  Button,
  StyleSheet,
  TextInput,
  Dimensions,
  Text,
} from 'react-native';
import Interpreter from './Interpreter';

const Editor = (props) => {
  const [value, onChangeText] = useState(`x=100
print x`);
  const [check, onCheck] = useState(false);
  const [numOfLines, setNum] = useState(0);
  let content = <View></View>;

  if (check) {
    content = (
      <View style={styles.main}>
        <Interpreter command={value}></Interpreter>
      </View>
    );
  }

  const handleClick = () => {
    if (check) {
      onCheck(false);
    } else {
      onCheck(true);
    }
    console.log('check ' + check);
  };

  const onChangeTextInput = (text) => {
    onChangeText(text);
    var lines = 1;
    for (var i = 0; i < text.length; i++) {
      if (text[i] === '\n') {
        lines++;
      }
    }
    setNum(lines);
  };

  const myloop = [];

  for (let i = 0; i < numOfLines; i++) {
    myloop.push(
      <Text key={i} style={styles.textStyle}>
        {i}
      </Text>,
    );
  }

  return (
    <View style={styles.main}>
      <View style={styles.cmd}>
        <View style={styles.label}>{myloop}</View>

        <TextInput
          style={styles.cmdText}
          spellCheck={false}
          autoCorrect={false}
          onChangeText={(text) => onChangeTextInput(text)}
          value={value}
          autoCapitalize={'none'}
          multiline={true}
          underlineColorAndroid="transparent"
          textAlign={'left'}
          textAlignVertical={'top'}
        />
      </View>
      {content}
      <View style={styles.buttonStyle}>
        <Button title="RUN" onPress={handleClick} />
      </View>
    </View>
  );
};
export default Editor;

const styles = StyleSheet.create({
  cmd: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    backgroundColor: '#00072b',
    padding: 15,
    borderRadius: 5,
    width: '95%',
    alignSelf: 'center',
  },

  main: {
    flex: 1,
  },
  outside: {
    flexDirection: 'row',
    textAlignVertical: 'top',
    height: 200,
    width: 380,
    backgroundColor: 'grey',
  },
  input: {
    width: Dimensions.get('window').width - 60,
    height: 200,
    borderColor: 'gray',
    borderLeftWidth: 0.4,
    backgroundColor: '#00072b',
    color: 'white',
    fontSize: 15,
  },
  cmdText: {
    color: '#5afffb',
    fontFamily: 'Inconsolata',
    letterSpacing: 1,
  },
  label: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-end',
    textAlignVertical: 'top',
    backgroundColor: '#DBDBDB',
    borderColor: '#6D6D6D',
    borderLeftWidth: 1,
    borderRightWidth: 0,
    borderTopWidth: 1,
    borderBottomWidth: 1,
  },

  textStyle: {
    fontSize: 12.5,
    margin: 0.1,
  },
  buttonStyle: {
    padding: 10,
    margin: 10,
  },
});
