import * as React from 'react';
import { Dimensions, StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

import MapView,{PROVIDER_GOOGLE, Marker, Polygon, MapViewAnimated, MapViewProps, MapEvent } from 'react-native-maps';

import Boton from '../components/Button'

const {width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE = 29.9990674;
const LONGITUDE = -90.0852767;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const SPACE = 0.01;

import * as MarkerStore from '../store/GoogleMaps';
import { Coordenada } from '../store/GoogleMaps';
import { ApplicationState } from '../store';
import { connect } from 'react-redux';


import { Button, SafeAreaView } from 'react-native';

type MarkerProps =
MarkerStore.MarkerState & MapViewProps &
    typeof MarkerStore.actionCreators;


export  class TabTwoScreen extends React.PureComponent<MarkerProps>{
  
  constructor(props:any){
    super(props);
    //this.getInitialState = this.getInitialState.bind(this);
    this.onRegionChange = this.onRegionChange.bind(this);
    this.onPress1 = this.onPress1.bind(this);
    this.state = {
      region:{
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: LATITUDE_DELTA,
        logitudeDelta: LONGITUDE_DELTA
      }
    }
    this.añadirProducto = this.añadirProducto.bind(this);
    this.limpiar = this.limpiar.bind(this);
  }
  añadirProducto(){
    
  }
  limpiar(){
    this.props.limpiar();
  }
  onRegionChange(region:any) {
    //this.setState({ region });
  }
  onPress1(event: MapEvent){
    //const markerID = event.nativeEvent.identifier;
    //console.log(JSON.stringify(event))
    //console.log(event.toJSON())
    console.log("coordinates:" + JSON.stringify(event.nativeEvent.coordinate));
    //console.log("latitude:" + String(event.nativeEvent.coordinate.latitude));
     var product:Coordenada; 
    product = {
      latitude: event.nativeEvent.coordinate.latitude,
      longitude: event.nativeEvent.coordinate.longitude,
    } 
    this.props.addToCart(product);
    /* this.setState({
      markers: [
        {
          coordinate: event.nativeEvent.coordinate
        }
      ]
    });  */
    //alert(event)
  }



  public render() {

    /*
    title="This is a native view"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation"
    */
   console.log('this.props')
   console.log(JSON.stringify(this.props))
   console.log(JSON.stringify(this.props.region))
   console.log(JSON.stringify(this.props.markers))
   if(this.props.markers.length > 0){
      return (
   
          <View style={styles.container}>
            <MapView
              provider={this.props.provider}
              style={styles.map}
              initialRegion={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}
              zoomTapEnabled={false}
              onPress={this.onPress1}>
                {this.props.markers.map((forecast) =>
                        <Marker
                        ref={(ref) => {
                          //let updateRef = markerRefs;
                          //updateRef[0].ref = ref;
                          //setMarkerRefs(updateRef);
                        }}
                        coordinate={forecast}
                        
                      />
                    )} 
              <Polygon coordinates={this.props.markers}  /> 
            </MapView>
          
            <View style={ styles.buttonsContainer }>
              <Button title={ 'Limpiar' } onPress={ this.limpiar } />
            </View>
            <SafeAreaView />
          
          </View>
        
      ); 
    }else{
      return (
   
        <View style={styles.container}>
          <MapView
            provider={this.props.provider}
            style={styles.map}
            initialRegion={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
            zoomTapEnabled={false}
            onPress={this.onPress1}>

          </MapView>
        
          <View style={ styles.buttonsContainer }>
            <Button title={ 'Limpiar' } onPress={ this.limpiar } />
          </View>
          <SafeAreaView />
        
        </View>
      
    ); 
    }
  }
}


export default connect(
  (state: ApplicationState) => state.markers,
  MarkerStore.actionCreators
)(TabTwoScreen as any);

/* export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab Two</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/TabTwoScreen.tsx" />
    </View>
  );
} */

const styles = StyleSheet.create({
  map:{
    ...StyleSheet.absoluteFillObject,
  },
  container: { flex: 1, backgroundColor: 'white' },
  mapViewContainer: { flex: 1 },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 16
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
