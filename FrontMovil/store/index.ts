import * as WeatherForecasts from './WeatherForecasts';
import * as Counter from './Counter';
import * as Product from './Product';
import * as Usuario from './Usuario';

import * as GoogleMaps from './GoogleMaps';

//import { ProductState }  from '../types.ts'
// The top-level state object


export interface ApplicationState {
    counter: Counter.CounterState | undefined;
    products: Product.ProductState | undefined;
    weatherForecasts: WeatherForecasts.WeatherForecastsState | undefined;
    usuario: Usuario.UsuarioState | undefined;
    markers: GoogleMaps.MarkerState | undefined;
}

// Whenever an action is dispatched, Redux will update each top-level application state property using
// the reducer with the matching name. It's important that the names match exactly, and that the reducer
// acts on the corresponding ApplicationState property type.
export const reducers = {
    counter: Counter.reducer,
    products: Product.reducer,
    weatherForecasts: WeatherForecasts.reducer,
    usuario: Usuario.reducer,
    markers: GoogleMaps.reducer
};

// This type can be used as a hint on action creators so that its 'dispatch' and 'getState' params are
// correctly typed to match your store.
export interface AppThunkAction<TAction> {
    (dispatch: (action: TAction) => void, getState: () => ApplicationState): void;
}
