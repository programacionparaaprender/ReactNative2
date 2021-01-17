import * as React from 'react';
import { StyleSheet, FlatList, RefreshControl } from 'react-native';

import { ListItem, Avatar } from 'react-native-elements'

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

import { connect } from 'react-redux';
import { ApplicationState } from '../store';
import * as UsuariotStore from '../store/Usuario';
import {Usuario} from '../tipos'

import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import RegistrarUsuario from './RegistrarUsuario';

import Navigation from '../navigation';

import useCachedResources from '../hooks/useCachedResources';
import useColorScheme from '../hooks/useColorScheme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});


type UsuarioProps =
UsuariotStore.UsuarioState &
    typeof UsuariotStore.actionCreators ;


//debe declararse de esta forma para que funcione

export function App4(props: any) {
      const isLoadingComplete = useCachedResources();
      const colorScheme = useColorScheme();
      console.log('usuario 12345');
      console.log(JSON.stringify(props.usuario));
      if (!isLoadingComplete || props.usuario == null || props.usuario == undefined) {
        return (
          <RegistrarUsuario />
        );

      }
       else {
        return (
          <React.Fragment>
          <SafeAreaProvider>
            <Navigation colorScheme={colorScheme} />
            <StatusBar />
          </SafeAreaProvider>
          <React.Fragment></React.Fragment></React.Fragment>
        );
      } 
    
    }    

//Producto colocarlo en el extends para que funcione todo
export class VerificarLogeo extends React.PureComponent<UsuarioProps, Usuario> {
  
  constructor(props: any) {
      super(props);
      
      /* this.state = {
        id:"1",
        usuario:"usuario1",
        password: "123456",
        nombre: "Pedro",
        apellido:"Gonzales"
      } */
      //this.renderItem = this.renderItem.bind(this);
      //this.editarProducto = this.editarProducto.bind(this);
  } 

  public render() {
    
    return (
      <React.Fragment>
        <App4 usuario={this.props.usuario} />
      </React.Fragment>
    );
  }
};


export default connect(
  (state: ApplicationState) => state.usuario,
  UsuariotStore.actionCreators
)(VerificarLogeo as any); 

