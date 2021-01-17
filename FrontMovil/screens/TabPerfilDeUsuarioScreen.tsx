import * as React from 'react';
import { StyleSheet, FlatList, RefreshControl } from 'react-native';

import { ListItem, Avatar } from 'react-native-elements'

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

import { connect } from 'react-redux';
import { ApplicationState } from '../store';
import * as ProductStore from '../store/Product';
import {Producto} from '../tipos'


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


type ProductProps =
ProductStore.ProductState &
    typeof ProductStore.actionCreators ;


//Producto colocarlo en el extends para que funcione todo
export class TabPerfilDeUsuarioScreen extends React.PureComponent<ProductProps, Producto> {
  keyExtractor = (item:any, index:any) => index;
  //<ListItem title={item.name} checkmark={item.chosen} />
  renderItem = ({ item }: { item: Producto }) => (
    //<ListItem title={item.name} />
    //<Avatar source={{uri: item.avatar_url}} />
    <ListItem bottomDivider>
    
    <ListItem.Content>
      <ListItem.Title>{item.name}</ListItem.Title>
      <ListItem.Subtitle>{item.description}</ListItem.Subtitle>
    </ListItem.Content>
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
      this.renderItem = this.renderItem.bind(this);
      //this.editarProducto = this.editarProducto.bind(this);
  } 

  /* editarProducto(forecast:any){
    this.setState({
        id: forecast.id,
        name: forecast.name,
        description:forecast.description,
        price: forecast.price
    });
} */
  public render() {
      //var product:ProductoClass = new ProductoClass();  //Product.ProductState.;
      /* product = {
          id: '1',
          name: 'Product 1',
          description:'Description product 1',
          price: 20.00
      } 
      <View style={styles.container}>
            {this.props.products.map((forecast: Producto) =>
              <Text style={styles.title}>{forecast.name}</Text>     
            )}
      */
      return (
          <React.Fragment>
            <View>
              <FlatList<Producto>
                keyExtractor={this.keyExtractor}
                renderItem={this.renderItem}
                data={this.props.products}
              />
              
            </View>
          </React.Fragment>
      );
  }
};



function TabPerfilDeUsuarioScreen2() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab Perfil de Usuario</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/TabPerfilDeUsuarioScreen.tsx" />
    </View>
  );
}

export default connect(
  (state: ApplicationState) => state.products,
  ProductStore.actionCreators
)(TabPerfilDeUsuarioScreen as any); 

