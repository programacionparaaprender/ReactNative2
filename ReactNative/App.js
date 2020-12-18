import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Prueba from './src/Prueba'
import ReactNavigation from './src/ReactNavigation'

/*
<View style={styles.container}>
      <Prueba text="Hola soy el componente 1" />
      <Prueba text="Hola soy el componente 2" />
    </View>
*/
export default function App() {
  return (
    <ReactNavigation />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
