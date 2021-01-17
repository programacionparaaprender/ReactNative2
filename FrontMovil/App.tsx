import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';



import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux';


import configureStore from './store/configureStorePersisted';



const store = configureStore();

export function App4() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
    return (
      <React.Fragment>
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </SafeAreaProvider>
      <React.Fragment></React.Fragment></React.Fragment>
    );

}    


  export default function App() {
 
      return (
        <Provider store={store.store}>
          <PersistGate loading={null} persistor={store.persistor}>
            <App4 />
          </PersistGate>
        </Provider>
      );
    
  }


