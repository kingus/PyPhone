import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';

import {WebView} from 'react-native-webview';
import Result from './Result';

const Interpreter2 = (props) => {
  const [webView, setWebView] = useState(null);
  const [result, setResult] = useState([]);
  const [run, setRun] = useState(false);

  const sendPostMessage = (mess) => {
    console.log('COMMAND ' + mess);
    webView.postMessage(mess);
  };

  const onMessageHandler = (event) => {
    console.log('RESULT ' + event.nativeEvent.data);
    setRun(false);
    setResult(event.nativeEvent.data);
    props.setResult(event.nativeEvent.data.split('\n'));
  };

  return (
    <View>
      <View style={styles.align}>
        <WebView
          onLoad={() => sendPostMessage(props.command)}
          ref={(webView) => setWebView(webView)}
          source={{
            uri: 'file:///android_asset/file.html',
          }}
          onMessage={(event) => {
            onMessageHandler(event);
          }}
        />
      </View>
    </View>
  );
};

export default Interpreter2;

const styles = StyleSheet.create({
  align: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    color: 'white',
    margin: 10,
  },
});
