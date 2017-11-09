import React, { Component } from "react";
import { StackNavigator } from "react-navigation";
import {
  Button,
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


// The About Tab Content
class About extends Component {
  render () {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to MPyre Financials!
        </Text>
        <Text style={styles.description}>
          MPyre Finances is a stock search engine meets investment advisor for the everyday consumer trying to get into the stock trading realm.
        </Text>
        <Text style={styles.description}>
          For a quick tutorial on how the app works, click the button below.
        </Text>
        <View style={styles.buttonContainer}>
          <Button
            title="START TUTORIAL"
            onPress={() => navigate('Tutorial')}
            />
        </View>
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
    textAlign: 'center',
    color: 'blue',
    fontSize: getCorrectFontSizeForScreen(PixelRatio, w, h, 18),
    margin: w * 0.05
  },
  description: {
    textAlign: 'center',
    color: '#333333',
    fontSize: getCorrectFontSizeForScreen(PixelRatio, w, h, 14),
    margin: w * 0.05
  },
  buttonContainer: {
    margin: w * 0.08,
    width: w * 0.90
  }
});


export default About;