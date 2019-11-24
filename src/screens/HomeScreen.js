import React from 'react';
import { 
  View, 
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Image,
  SafeAreaView,
  ActivityIndicator
} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import UserService from '../services/UserService'


export default class HomeScreen extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      users:[],
      isLoading:true
    };
    this.onPress = this.onPress.bind(this);
  }
  componentDidMount(){
    /* this.setState({
      isLoading:true
    }); */  
    UserService.getUsers().then(response => {
        const data  = response.data;
        this.setState({
          users: data.results,
          isLoading: false
        });  
        //return response.json();
    })
    .then(({ data }) => {
        
        
    })
    .catch(error => {
        console.log(error);
    }); 
  }
  onPress(item){
    this.props.navigation.navigate('Settings', {
      user: item
    });
  }
 
  render() {
    if(this.state.isLoading == true){
      return(
        <ActivityIndicator />
      );
    }
    return (
      
      <View>
        <Text> Hay usuarios {this.state.users.length} en el sistema </Text>
        <FlatList
            data={this.state.users}
            renderItem={({ item }) => {
              return(
                <TouchableOpacity 
                onPress={this.onPress(item)}
                style={[styles.itemContainer, item.gender == 'male'? styles.male:styles.female ]}>
                <Image 
                  style={styles.itemImage} 
                  source={{ uri: item.picture.medium }}
                />
                <View style={{flexDirection:'column'}}>
                  <Text style={styles.itemTitle}>{item.name.first + ' ' + item.name.last}.</Text>
                  <Text style={styles.itemTitle}>Toca para más detalles.</Text>
                </View>
                </TouchableOpacity>
              );
            }}
          />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  itemContainer:{
    flexDirection: 'row',
    alignItems:'center',
    padding: 10,
    marginBottom:1
  },
  itemTitle:{
    fontSize:20,
    color:'gray',
    justifyContent:'center',
    alignItems:'center',
    textAlign:'left',
    marginLeft:30
  },
  itemImage:{
    width:50,
    height:50,
    borderRadius:25,
    marginBottom:30
  },
  female:{
    backgroundColor:'pink'
  },
  male:{
    backgroundColor:'blue'
  },
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
