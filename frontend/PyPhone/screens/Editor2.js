import React, {useState, useEffect} from 'react';
import {
  View,
  Button,
  StyleSheet,
  TextInput,
  Image,
  Text,
  ActivityIndicator,
} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {set} from 'react-native-reanimated';

import Interpreter2 from '../components/Interpreter2';
import Icon from 'react-native-vector-icons/FontAwesome';

const Editor = (props) => {
  const [value, onChangeText] = useState(`x=100
print x`);
  const [check, onCheck] = useState(false);
  const [numOfLines, setNum] = useState(0);
  const [result, setResult] = useState([]);
  const [isResult, setIsResult] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [clicked, setClicked] = useState(1);
  const [leftColor, setLeftColor] = useState('');
  const [rightColor, setRightColor] = useState('#00072b');

  let content = <View></View>;

  if (check) {
    content = (
      <View style={styles.main}>
        <Interpreter2 command={value} setResult={setResult}></Interpreter2>
      </View>
    );
  }

  const handleClick = () => {
    onCheck(true);
    setIsLoading(true);
    console.log('check ' + check);
  };

  const changeView = (id) => {
    onCheck(false);
    setIsLoading(false);
    setIsResult(false);
    if (id) {
      setRightColor('white');
      setLeftColor('#00072b');
      setClicked(0);
      setIsResult(true);
    } else {
      setRightColor('#00072b');
      setLeftColor('white');
      setClicked(1);
    }
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
      <Text key={i} style={styles.numLines}>
        {i}
      </Text>,
    );
  }

  const rightItem = {
    flex: 1,
    width: '100%',
    backgroundColor: rightColor,
    borderTopEndRadius: 30,
    borderBottomEndRadius: 30,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };
  const leftItem = {
    flex: 1,
    width: '100%',
    display: 'flex',
    borderTopStartRadius: 30,
    borderBottomStartRadius: 30,
    borderRightColor: '#5afffb',
    borderRightWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: leftColor,
  };

  useEffect(() => {
    setIsLoading(false);
    setIsResult(true);
    console.log('EFFECT');
  }, [result]);

  return (
    <View style={styles.main}>
      <View style={styles.navBar}>
        <TouchableOpacity
          style={{
            flex: 1,
            width: 152,
          }}
          onPress={() => changeView(0)}>
          <View style={[leftItem]}>
            <Text
              style={{
                color: clicked ? '#00072b' : 'white',
              }}>
              CODE
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flex: 1,
            width: 152,
          }}
          onPress={() => changeView(1)}>
          <View style={[rightItem]}>
            <Text
              style={{
                color: clicked ? 'white' : '#00072b',
              }}>
              RESULT
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.cmd}>
        <View style={styles.label}>{myloop}</View>
        {!isLoading && !isResult ? (
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.cmdText}
              spellCheck={false}
              autoCorrect={false}
              onChangeText={(text) => onChangeTextInput(text)}
              value={value}
              multiline={true}
              underlineColorAndroid="transparent"
              textAlign={'left'}
              padding={0}
              margin={0}
              scrollEnabled={false}
              lineHeight={22}
            />
          </View>
        ) : (
          <View>{content}</View>
        )}
        {isLoading && !isResult ? (
          <View style={styles.indicatorContainer}>
            <ActivityIndicator size="large" color="#5afffb" />
          </View>
        ) : (
          <View></View>
        )}
        {isResult ? (
          <View style={styles.inputContainer2}>
            {result.map((number, index) => (
              <Text style={styles.cmdResultText} key={index}>
                {number}
              </Text>
            ))}
          </View>
        ) : (
          <View></View>
        )}
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.runButton}
          onPress={() => handleClick()}>
          <Icon name="play" size={35} color="#00072b" style={{marginLeft: 5}} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Editor;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#00072b',
  },
  navBar: {
    display: 'flex',
    backgroundColor: 'white',
    flexDirection: 'row',
    borderRadius: 30,
    width: '75%',
    height: 55,
    alignItems: 'stretch',
    borderColor: '#5afffb',
    borderWidth: 2,
    marginTop: 10,
  },
  navBarItemLeft: {
    flex: 1,
    width: '100%',
    display: 'flex',
    borderTopStartRadius: 30,
    borderBottomStartRadius: 30,
    borderRightColor: '#5afffb',
    borderRightWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  navBarItemRight: {
    flex: 1,
    width: '100%',
    backgroundColor: '#00072b',
    borderTopEndRadius: 30,
    borderBottomEndRadius: 30,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  navBarText: {
    color: 'white',
  },
  navBarText2: {
    color: '#00072b',
  },

  cmd: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#00072b',
    borderRadius: 5,
    // height: '45%',
    // width: '95%',
    padding: 15,
  },

  inputContainer: {
    display: 'flex',
    flex: 15,
    margin: 0,
    padding: 0,
    marginLeft: 10,
    // backgroundColor: 'red',
  },

  indicatorContainer: {
    display: 'flex',
    flex: 15,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'red',
  },

  inputContainer2: {
    display: 'flex',
    flex: 15,
    margin: 0,
    padding: 0,
    marginLeft: 10,
    // backgroundColor: 'green',
  },

  label: {
    flex: 1,
    alignItems: 'flex-end',
    marginRight: 5,
    margin: 0,
    marginTop: 0,
    paddingRight: 5,
    borderRightWidth: 1,
    borderRightColor: '#cbcbcb',
  },

  cmdText: {
    color: '#5afffb',
    fontFamily: 'Inconsolata',
    letterSpacing: 1,
    fontSize: 15,
    margin: 0,
  },
  cmdResultText: {
    color: '#5afffb',
    fontFamily: 'Inconsolata',
    letterSpacing: 1,
    fontSize: 15,
    margin: 1,
  },
  numLines: {
    color: '#cbcbcb',
    fontFamily: 'Inconsolata',
    fontSize: 15,
    margin: 1,
    padding: 0,
    justifyContent: 'center',
  },
  runButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#5afffb',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 30,
    alignSelf: 'flex-end',
  },
  buttonContainer: {
    display: 'flex',
    width: '100%',
    alignItems: 'flex-end',
  },
});
