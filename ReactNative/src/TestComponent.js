import React from 'react';
import { 
    StyleSheet, 
    Text, 
    View
} from 'react-native';


export default class TestComponent extends React.Component {
  constructor(props){
    super(props);
    this.state={

    };
  }
  render(){
    return (
    <View>
      <Text>{this.props.text}</Text>
    </View>
    );
  }
}


