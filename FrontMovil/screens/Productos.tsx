import * as React from 'react';
import { connect } from 'react-redux';
import { ApplicationState } from '../store';
import { StyleSheet, FlatList, RefreshControl } from 'react-native';

import { ListItem, Avatar, Image } from 'react-native-elements'

import EditScreenInfo from '../components/EditScreenInfo';
//import * as CounterStore from '../store/Counter';
import * as ProductStore from '../store/Product';
import {Producto} from '../tipos'

import { Text, View, Input } from '../components/Themed';

import Boton  from '../components/Button';

import { SafeAreaView, ScrollView } from 'react-native';

import Constants from 'expo-constants';

type ProductProps =
ProductStore.ProductState &
    typeof ProductStore.actionCreators;
/* <View style={styles.subtitleView}>
          
          <Text style={styles.ratingText}>5 months ago</Text>
      </View> */
    //Productos colocarlo en el extends para que funcione todo
class Productos extends React.PureComponent<ProductProps, Producto> {
    keyExtractor = (item:any, index:any) => index;
  renderItem = ({ item }: { item: Producto }) => (
    <ListItem bottomDivider>
    
    <ListItem.Content>
      <ListItem.Title>{item.name}</ListItem.Title>
      <ListItem.Subtitle>{item.description}</ListItem.Subtitle>
     
    </ListItem.Content>
    {/* <Boton
        title="Registrar"
        text="Registrar"
        onPress={() => { this.añadirProducto(); }}>

    </Boton> */}
    <ListItem.Chevron />
  </ListItem>
  );
    constructor(props: any) {
        super(props);
        
        this.state = {
            id: '1',
            name: 'Product 1',
            description:'Description product 1',
            price: "20.00"
        }
        this.handleChange1 = this.handleChange1.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
        this.handleChange3 = this.handleChange3.bind(this);
        this.handleChange4 = this.handleChange4.bind(this);
        this.añadirProducto = this.añadirProducto.bind(this);
        this.editarProducto = this.editarProducto.bind(this);
    } 
    editarProducto(forecast:any){
        this.setState({
            id: forecast.id,
            name: forecast.name,
            description:forecast.description,
            price: forecast.price
        });
    }
    añadirProducto(){
        var product:Producto; 
        product = {
            id: this.state.id,
            name: this.state.name,
            description:this.state.description,
            price: this.state.price
        }
        this.props.addToCart(product);
    }
    handleChange1(e:any) {
        /* var obj[e.target.name] = e.target.value
        this.setState(obj); */
        //console.log(e.target.value);
        this.setState({ id: String(e.target.value) });
        //this.state.id = e.target.value;
    }
    handleChange2(e:any) {
        /* var obj[e.target.name] = e.target.value
        this.setState(obj); */
        //console.log(e.target.value);
        this.setState({ name: String(e.target.value) });
        //this.state.id = e.target.value;
    }
    handleChange3(e:any) {
        /* var obj[e.target.name] = e.target.value
        this.setState(obj); */
        //console.log(e.target.value);
        this.setState({ description: String(e.target.value) });
        //this.state.id = e.target.value;
    }
    handleChange4(e:any) {
        /* var obj[e.target.name] = e.target.value
        this.setState(obj); */
        //console.log(e.target.value);
        this.setState({ price: String(e.target.value) });
        //this.state.id = e.target.value;
    }
    public render() {
        return (
            <React.Fragment>
                <View>
                <SafeAreaView style={styles.container2}>
                    <ScrollView style={styles.scrollView}>
                    <View>
                    <Text style={styles.title}>Código de producto</Text>
                    <Input
                        onChange={this.handleChange1}
                        placeholder="Codigo"
                        value={this.state.id}
                        />
                    <Text style={styles.title}>Nombre de producto</Text>
                    <Input
                        onChange={this.handleChange2}
                        placeholder="Nombre(s)"
                        value={this.state.name}
                        />
                    <Text style={styles.title}>Descripción de producto</Text>
                    <Input
                        onChange={this.handleChange3}
                        placeholder="Descripción"
                        value={this.state.description}
                        />
                    <Text style={styles.title}>Precio de producto</Text>
                    <Input
                        onChange={this.handleChange4}
                        placeholder="Precio"
                        value={this.state.price}
                        />
                    <Boton
                        title="Registrar"
                        text="Registrar"
                        onPress={() => { this.añadirProducto(); }}>

                    </Boton>
                    </View>
                    <View>
                    <Text style={styles.title}>Lista de productos</Text>
                    <FlatList<Producto>
                        keyExtractor={this.keyExtractor}
                        renderItem={this.renderItem}
                        data={this.props.products}
                    />
                    
                    </View>
                    </ScrollView>
                    </SafeAreaView>
                </View>
            
            </React.Fragment>
        );
    }
}
const styles = StyleSheet.create({
    subtitleView: {
        flexDirection: 'row',
        paddingLeft: 10,
        paddingTop: 5
    },
    ratingImage: {
        height: 19.21,
        width: 100
    },
    ratingText: {
        paddingLeft: 10,
        color: 'grey'
    },
    container2: {
        flex: 1,
        marginTop: Constants.statusBarHeight,
      },
    scrollView: {
      backgroundColor: 'pink',
      marginHorizontal: 20,
    },
    text: {
      fontSize: 42,
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

export default connect(
    (state: ApplicationState) => state.products,
    ProductStore.actionCreators
)(Productos as any);