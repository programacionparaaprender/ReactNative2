import React from 'react';
import { 
  View, 
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
    StyleProp,
    TextStyle,
    TouchableHighlight,
    ImageStyle,
    ViewStyle
  } from 'react-native';
  interface Props {
    navigation: any
  }

interface Picture{
    large:string
}  
interface Usuario{
    gender: string,
    picture: Picture,
    email:string
}

interface IProps {
    navigation: any
    itemContainerStyle?: StyleProp<ViewStyle>;
      itemTitleStyle?: StyleProp<ViewStyle>;
      itemImageStyle?: StyleProp<ViewStyle>;
      femaleStyle?: StyleProp<ViewStyle>;
      maleStyle?: StyleProp<ViewStyle>;
      containerStyle?: StyleProp<ViewStyle>;
      buttonStyle?: StyleProp<ViewStyle>;
      countContainerStyle?: StyleProp<ViewStyle>;
      countTextStyle?: StyleProp<ViewStyle>;
}  
interface Styles {
    itemContainer: ViewStyle;
      itemTitle: ViewStyle;
      itemImage: ViewStyle;
      female: ViewStyle;
      male: ViewStyle;
      container:  ViewStyle;
      button:  ViewStyle;
      countContainer:  ViewStyle;
      countText: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
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




export default class SettingsScreen extends React.Component<IProps,{user:Object}> {
    constructor(props:any){
        super(props);
        /* this.state = {
         user: null
        }; */
        
      }
      public state = {
        user: null
     }
      componentWillMount(){
        this.setState({
          user: this.props.navigation.state.params.user
        });  
      }
      componentDidMount(){
        
      }
  public render() {
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





