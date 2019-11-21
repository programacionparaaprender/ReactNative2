import React from 'react';
import { 
  View, 
  Text,
  TouchableOpacity 
} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const axios = require('axios');




class HomeScreen extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      user: null
    };
    this.getUserData = this.getUserData.bind(this);
  }
  getUserData(){
    // Make a request for a user with a given ID
    axios.get('https://randomuser.me/api/')
    .then(function (response) {
      // handle success
      console.log(response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });
  }
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text> {this.state.user.name} </Text>
        <TouchableOpacity 
        onPress={()=>{
          this.props.navigation.navigate('Settings');
        }

        }
        >
          <Text>Go to navigation</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

class SettingsScreen extends React.Component {
  render() {
    const { goBack } = this.props.navigation;
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Settings Screen</Text>
        <TouchableOpacity 
        onPress={()=>{
          goBack();
        }

        }
        >
          <Text>Go back</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

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