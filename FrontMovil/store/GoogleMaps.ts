//import { Action, Reducer } from 'redux';
import { Reducer } from 'redux';

import { Dimensions, StyleSheet } from 'react-native';


import MapView,{PROVIDER_GOOGLE, Marker, MapViewAnimated, MapViewProps, MarkerProps, MapEvent } from 'react-native-maps';



export interface Coordenada{
    latitude: number,
    longitude: number
}

// -----------------
// STATE - This defines the type of data maintained in the Redux store.

const {width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE = 29.9990674;
const LONGITUDE = -90.0852767;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const SPACE = 0.01;

export interface MarkerState{
    markers:Coordenada[]
}  
// -----------------
// ACTIONS - These are serializable (hence replayable) descriptions of state transitions.
// They do not themselves have any side-effects; they just describe something that is going to happen.
// Use @typeName and isActionType for type detection that works even after serialization/deserialization.

export interface IncrementCountAction { type: 'INCREMENT_COUNT' }
export interface DecrementCountAction { type: 'DECREMENT_COUNT' }
export interface LimpiarAction { type: 'LIMPIAR' }
export interface ADD_TO_CART { 
    type: 'ADD_TO_CART',
    payload:{
        latitude: number,
        longitude: number
    }
}

// Declare a 'discriminated union' type. This guarantees that all references to 'type' properties contain one of the
// declared type strings (and not any other arbitrary string).
export type KnownAction = IncrementCountAction | DecrementCountAction | ADD_TO_CART | LimpiarAction ;

// ----------------
// ACTION CREATORS - These are functions exposed to UI components that will trigger a state transition.
// They don't directly mutate state, but they can have external side-effects (such as loading data).

export const actionCreators = {
    increment: () => ({ payload:'data',type: 'INCREMENT_COUNT' } as IncrementCountAction),
    decrement: () => ({ type: 'DECREMENT_COUNT' } as DecrementCountAction),
    addToCart: (product:Coordenada) => ({ payload:product,type: 'ADD_TO_CART' } as ADD_TO_CART) , 
    limpiar: () => ({ type: 'LIMPIAR' } as LimpiarAction) 
};

// ----------------
// REDUCER - For a given state and action, returns the new state. To support time travel, this must not mutate the old state.

export const reducer: Reducer<MarkerState> = (state: MarkerState | undefined, incomingAction: KnownAction): MarkerState => {
    if (state === undefined) {
        
        /* let markers = [
            {
                latitude: LATITUDE + SPACE,
                longitude: LONGITUDE + SPACE,
            },
            {
                latitude: LATITUDE + SPACE,
                longitude: LONGITUDE - SPACE,
            },
            {
                latitude: LATITUDE,
                longitude: LONGITUDE,
             
            },
             {
                latitude: LATITUDE,
                longitude: LONGITUDE - SPACE / 2,
              }
          ] */
        return { markers: [] };
    }
    //console.log('incomingAction: '+JSON.stringify(incomingAction))
    const action = incomingAction as KnownAction;
    switch (action.type) {
        case 'LIMPIAR':
            
            return { markers: [] };
        case 'ADD_TO_CART':
           //let products:Array<Producto>
           let markers = []
           for(var x in state.markers)
            markers.push(state.markers[x]);
            markers.push({
                latitude: action.payload.latitude,
                longitude: action.payload.longitude
            }) 
            console.log('markers')
            console.log(JSON.stringify(markers))
           return  { markers: markers };
            
        default:
            return state;
    }
};
