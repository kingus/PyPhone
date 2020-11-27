import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';

import {WebView} from 'react-native-webview';
import Result from './Result';

export default class Interpreter extends Component {
  sendPostMessage(mess) {
    console.log('COMMAND ' + mess);
    this.webView.postMessage(mess);
  }
  onMessageHandler  (event) {
    console.log('RESULT ' + event.nativeEvent.data);
    this.setState({
      run: true,
      res: event.nativeEvent.data,
    });
  }

  constructor(props) {
    super(props);
    this.webView = null;
    this.state = {res: new String(), run: new Boolean(false)};
  }

  render() {
    let content = <View></View>;

    if (this.state.run) {
        // console.log(this.state.res)
      content = <Result result={this.state.res} run={this.state.run}></Result>;
    }

    return (
      <View>
        <View style={styles.align}>
          <WebView
            onLoad={() => this.sendPostMessage(this.props.command)}
            ref={(webView) => (this.webView = webView)}
            source={{
              uri: 'file:///android_asset/file.html',
            }}
            onMessage= {(event)  => {onMessageHandler(event)}}
          />
        </View>
        {content}
      </View>
    );
  }
}

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