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

// To get stock suggestions
import stockDataAPI from '../shared/stockDataAPI';

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

    // Get stored favorites
    // TO-DO: For now, these will be pre-set
    let favorites = [{ name: 'Apple Inc.', symbol: 'AAPL' }, { name: 'Amazon Inc.', symbol: 'AMZN' } ];

    this.state = {
      dataSource: ds.cloneWithRows(favorites),
      favorites: favorites,
      query: ""
    };
  }

  setQuery(searchQuery) {
    let query = searchQuery.text || '';
    // Update query value
    this.setState({ query });

    if(query == '') {
      // Display favorites
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(this.state.favorites)
      });
    }
    else {
      // Update the suggested list
      stockDataAPI.suggestStock(query)
        .then(response => response.text())
        .then((result) => {
          result = result.replace(/(YAHOO\.util\.ScriptNodeDataSource\.callbacks\()(.*)(\);)/g, '$2');
          return JSON.parse(result);
        })
        .then((json) => {
          this.setState({
            dataSource: this.state.dataSource.cloneWithRows(json.ResultSet.Result)
          });
        })
        .catch((error) => {
          console.error('Request failed', error);
        });
    }
  }

  render () {
    const { navigation } = this.props;

    return (
      <View style={styles.container}>
        <TextInput
          style={styles.searchBar}
          value={this.state.query}
          onChangeText={ (text) => this.setQuery({ text }) }
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