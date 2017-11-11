import React, { Component } from "react";
import { StackNavigator } from "react-navigation";
import {
  ListView,
  PixelRatio,
  StyleSheet,
  TextInput,
  View
} from 'react-native';

import StockCell from '../components/stockCell';

// To get the font size scaled for different devices
import { getCorrectFontSizeForScreen } from '../shared/multiFontResolution.js';
// To scale for same feel on different devices
import Dimensions from 'Dimensions';
const {height:h, width:w} = Dimensions.get('window');


// The Seach Tab Content
class Search extends Component {

  constructor() {
    super();

    // Rerender the ListView whenever changes occur
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    let sampleData = [{ name: 'Apple Inc.', symbol: 'AAPL' }, { name: 'Amazon Inc.', symbol: 'AMZN' } ];

    this.state = {
      dataSource: ds.cloneWithRows(sampleData),
      query: ""
    };
  }

  setQuery(e) {
    let query = e.nativeEvent.text;
    // Update query value
    this.setState({ query });

    // Update the suggested list
    // TO-DO
  }

  render () {
    const { navigation } = this.props;

    return (
      <View style={styles.container}>
        <TextInput
          style={styles.searchBar}
          value={this.state.query}
          onChange={this.setQuery.bind(this)}
          placeholder='Search Stock...' />
      <ListView
        dataSource={this.state.dataSource}
        renderRow={(stockData) => <StockCell {...navigation} stockData={stockData} />}
        renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />} />
      </View>
    );
  }
};


// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  searchBar: {
    fontSize: getCorrectFontSizeForScreen(PixelRatio, w, h, 16),
    width: w * 0.90,
    margin: w * 0.05,
    padding: w * 0.03
  },
  separator: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: 'gray',
  }
});


export default Search;