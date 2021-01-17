import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { History } from 'history';
import { ApplicationState, reducers } from './';

//import { applyMiddleware, createStore, compose } from 'redux';
//import { createLogger } from 'redux-logger';
//import { composeWithDevTools } from 'redux-devtools-extension';
//import { autoRehydrate } from 'redux-persist';

/* import rootReducer from './reducers';

const middlewares = [];

if (__DEV__) {
  middlewares.push(createLogger());
}

export default createStore(
  rootReducer,
  undefined,
  composeWithDevTools(applyMiddleware(...middlewares), autoRehydrate()),
); */


export default function configureStore(history: History, initialState?: ApplicationState) {
    const middleware = [
        thunk,
        routerMiddleware(history)
    ];

    const rootReducer = combineReducers({
        ...reducers,
        router: connectRouter(history)
    });

    const enhancers = [];
    const windowIfDefined = typeof window === 'undefined' ? null : window as any;
    if (windowIfDefined && windowIfDefined.__REDUX_DEVTOOLS_EXTENSION__) {
        enhancers.push(windowIfDefined.__REDUX_DEVTOOLS_EXTENSION__());
    }

    return createStore(
        rootReducer,
        initialState,
        compose(applyMiddleware(...middleware), ...enhancers)
    );
}





