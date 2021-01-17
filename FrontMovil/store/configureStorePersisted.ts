import { persistStore, persistReducer } from 'redux-persist'
//import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import AsyncStorage from '@react-native-community/async-storage';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk'

import { ApplicationState, reducers } from './';

export default function configureStore(initialState?: ApplicationState) {
    const middleware = [
        thunk
    ];

    const rootReducer = combineReducers({
        ...reducers
    });
 
    const persistConfig = {
        key: 'root',
        storage: AsyncStorage,
    }
 
    const persistedReducer = persistReducer(persistConfig, rootReducer)
    
    const enhancers = [];
    const windowIfDefined = typeof window === 'undefined' ? null : window as any;
    if (windowIfDefined && windowIfDefined.__REDUX_DEVTOOLS_EXTENSION__) {
        enhancers.push(windowIfDefined.__REDUX_DEVTOOLS_EXTENSION__());
    }


    let store = createStore(persistedReducer,
        initialState,
        compose(applyMiddleware(...middleware), ...enhancers))
    let persistor = persistStore(store)
    return { store, persistor }
}



