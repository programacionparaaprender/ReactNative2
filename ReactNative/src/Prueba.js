import React, { Component } from 'react'
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
} from 'react-native'


export default class Prueba extends React.Component {
  constructor(props){
    super(props);
    this.state = { count: 0 }
    //permite que se pueda usar this dentro del metodo
    this.onPress = this.onPress.bind(this);
    
  }
  //Creando el componente
  componentWillMount(){
    console.log('iniciando componente.');
  }

  //Cuando el componente ya esta montado
  componentDidMount(){
    console.log('componente en ejecución.');
    }

    //Cuando el componente se desmonta
    componentWillUnMount(){
      console.log('cerrando componente.');
    }

    onPress(){
      this.setState({
        count: this.state.count+1
      })
      //this.alerta();
    }

    alerta(){
      alert('Hola alerta');
    }

  render(){
    return (
    <View>
      <TouchableOpacity
         style={styles.button}
         onPress={this.onPress}
       >
         <Text>{this.props.text} {this.state.count}</Text>
       </TouchableOpacity>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10
  },
  countContainer: {
    alignItems: 'center',
    padding: 10
  },
  countText: {
    color: '#FF00FF'
  }
})

