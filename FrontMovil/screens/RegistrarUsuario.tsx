import * as React from 'react';
import { StyleSheet, FlatList, RefreshControl } from 'react-native';

import { ListItem, Avatar } from 'react-native-elements'

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View, Input } from '../components/Themed';

import { connect } from 'react-redux';
import { ApplicationState } from '../store';
import * as UsuariotStore from '../store/Usuario';
import {Usuario} from '../tipos'

import Boton from '../components/Button'

import LinearGradient from 'react-native-linear-gradient';

import { Dimensions, Platform} from 'react-native'
const { width, height } = Dimensions.get('window');


const styles = StyleSheet.create({
  container2: {
    width 	: width,
    height 	: height
  },
  containerRegistro: {
    width 	: width,
    height 	: height
  },
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


//Producto colocarlo en el extends para que funcione todo
export class RegistrarUsuario extends React.PureComponent<UsuarioProps, Usuario> {
  
  constructor(props: any) {
      super(props);
      
      this.state = {
        id:"1",
        usuario:"usuario1",
        password: "123456",
        nombre: "Pedro",
        apellido:"Gonzales"
      }  
      /* this.state = {
        id:"0",
        usuario:"",
        password: "",
        nombre: "",
        apellido:""
      }  */
      this.handleChange1 = this.handleChange1.bind(this);
      this.handleChange2 = this.handleChange2.bind(this);
      this.handleChange3 = this.handleChange3.bind(this);
      this.handleChange4 = this.handleChange4.bind(this);
  } 
  handleChange1(e:any) {
    this.setState({ nombre: String(e.target.value) });
  }
  handleChange2(e:any) {
    this.setState({ apellido: String(e.target.value) });
  }
  handleChange3(e:any) {
    this.setState({ usuario: String(e.target.value) });
  }
  handleChange4(e:any) {
    this.setState({ password: String(e.target.value) });
  }
  añadirProducto(){
    var usuario:Usuario; 
    usuario = {
        id: this.state.id,
        usuario:this.state.usuario,
        password: this.state.password,
        nombre: this.state.nombre,
        apellido:this.state.apellido,

    }
    this.props.registrarUsuario(usuario);
  }
  public render() {
      return (
          <React.Fragment>
          <View>
            <View
                  style={styles.container2}>
                <Text style={styles.title}>Nombres</Text>
                <Input
                  onChange={this.handleChange1}
                  placeholder="Nombre(s)"
                  />
                <Text style={styles.title}>Apellidos</Text>
                <Input
                  onChange={this.handleChange2}
                  placeholder="Apellido(s)"
                  />
                <Text style={styles.title}>Usuario</Text>
                <Input
                  onChange={this.handleChange3}
                  placeholder="usuario"
                />
                <Text style={styles.title}>Contraseña</Text>
                <Input
                  onChange={this.handleChange4}
                  secureTextEntry={true}
                  placeholder="Contraseña"
                />
                <Boton
                  title="Registrar"
                  text="Registrar"
                  onPress={() => { this.añadirProducto(); }}>

                  </Boton>
              </View>
            
          </View>
          </React.Fragment>
      );
  }
};


export default connect(
  (state: ApplicationState) => state.usuario,
  UsuariotStore.actionCreators
)(RegistrarUsuario as any); 

