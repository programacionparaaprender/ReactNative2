import React from 'react';
import { 
  View, 
  Text,
  Image,
  TouchableOpacity,
  StyleSheet
} from 'react-native';


export default class SettingsScreen extends React.Component {
    constructor(props){
        super(props);
        this.state = {
         user: null
        };
        
      }
      componentWillMount(){
        this.setState({
          user: this.props.navigation.state.params.user
        });  
      }
      componentDidMount(){
        
      }
  render() {
    const { goBack } = this.props.navigation;
    return (
      <View style={[styles.container, this.state.user.gender == 'male'? styles.male:styles.female ]}>
        <Image 
          style={styles.itemImage} 
          source={{ uri: this.state.user.picture.large }}
        />
        
          <Text style={styles.itemTitle}>Name: {this.state.user.name.first + ' ' + this.state.user.name.last}.</Text>
          <Text style={styles.itemTitle}>Email: {this.state.user.email}</Text>
          <Text style={styles.itemTitle}>Localización: </Text>
        
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
    width:70,
    height:70,
    borderRadius:35
  },
  female:{
    backgroundColor:'pink'
  },
  male:{
    backgroundColor:'blue'
  },
  container: {
    flex: 1,
    alignItems: 'center',
    flexDirection:'column'
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



