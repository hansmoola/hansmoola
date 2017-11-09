import React from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';

// Import Pages
import About from './views/About';
import Search from './views/Search';
import Portfolio from './views/Portfolio';
import Stock from './views/Stock';
import Tutorial from './views/Tutorial';


// Set up Tab Navigator for Main Menu
const MainMenu = TabNavigator ({
	About: {
		screen: About
	},
  	Search: {
		screen: Search
	},
  	Portfolio: {
  		screen: Portfolio
  	}
});


// Set up the Navigator
const AppNavigator = StackNavigator({
	MainMenu: { 
	  	screen: MainMenu,
	  	navigationOptions: ({ navigation }) => ({
	      	title: 'MPyre Financials',
	      	headerTitleStyle: {
			    textAlign: 'center',
			    alignSelf: 'center'
	      	}
	    })
  	},
  	Stock: {
  		screen: Stock
  	},
  	Tutorial: {
  		screen: Tutorial
  	}
});

export default AppNavigator;