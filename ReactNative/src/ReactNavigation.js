import React from 'react';
import { 
  View, 
  Text,
  TouchableOpacity 
} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import axios from 'axios';
import HomeScreen from './screens/HomeScreen'
import SettingsScreen from './screens/SettingsScreen'

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,

  },
  Settings:{
    screen: SettingsScreen
  }
});

/* export default createAppContainer(AppNavigator); */

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}