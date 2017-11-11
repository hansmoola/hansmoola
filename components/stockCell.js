import React from 'react';
import {
  PixelRatio,
  StyleSheet,
  Text,
  TouchableHighlight
} from 'react-native';

// To get the font size scaled for different devices
import { getCorrectFontSizeForScreen } from '../shared/multiFontResolution.js';
// To scale for same feel on different devices
import Dimensions from 'Dimensions';
const {height:h, width:w} = Dimensions.get('window');


const StockCell = (props) => (
  <TouchableHighlight 
    style={styles.container} 
    underlayColor='gray'
    onPress={() => props.navigate('Stock', { stockData: props.stockData }) }>
    <Text style={styles.stockText}>
      {`${props.stockData.symbol}\t\t(${props.stockData.name})`}
    </Text>
  </TouchableHighlight>
);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  stockText: {
    fontSize: getCorrectFontSizeForScreen(PixelRatio, w, h, 15),
    width: w * 0.90,
    margin: w * 0.05,
    padding: w * 0.03
  }
});

export default StockCell;