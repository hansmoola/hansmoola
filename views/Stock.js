import React, { Component } from "react";
import { StackNavigator } from "react-navigation";
import {
  PixelRatio,
  StyleSheet,
  Text,
  View
} from 'react-native';

// To get the font size scaled for different devices
import { getCorrectFontSizeForScreen } from '../shared/multiFontResolution.js';
// To scale for same feel on different devices
import Dimensions from 'Dimensions';
const {height:h, width:w} = Dimensions.get('window');


// The Stock Page Content
class Stock extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.stockData.symbol} (${navigation.state.params.stockData.name})`,
    headerTitleStyle: {
      textAlign: 'center',
      alignSelf: 'center'
    },
    headerRight: <View />
  });

  render () {
    const { navigate } = this.props.navigation;
    const { stockData } = this.props.navigation.state.params;

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit Stock.js
        </Text>
      </View>
    );
  }
};


// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: getCorrectFontSizeForScreen(PixelRatio, w, h, 18),
    textAlign: 'center',
    margin: w * 0.05,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: w * 0.10,
  }
});


export default Stock;