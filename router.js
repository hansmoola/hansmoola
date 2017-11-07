import React from 'react';
import { StackNavigator } from 'react-navigation';

import Menu from './views/Menu';

const MenuScreen = props => {
  return <Menu navigation={props.navigation} />;
};

MenuScreen.navigationOptions = {
  title: "MPyre Financials",
  headerTitleStyle : {
    textAlign: 'center',
    alignSelf:'center'
  }
};

const AppNavigator = StackNavigator({
  Menu: { screen: MenuScreen }
});

export default AppNavigator;