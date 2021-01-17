import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import TabOneScreen from '../screens/TabOneScreen';
import TabTwoScreen from '../screens/TabTwoScreen';

import TabPerfilDeUsuarioScreen from '../screens/TabPerfilDeUsuarioScreen';

import MensajesDeUsuario from '../screens/MensajesDeUsuario';

import { ProductosParamList ,MensajesDeUsuarioParamList, BottomTabParamList, TabOneParamList, TabTwoParamList, TabPerfilDeUsuarioParamList } from '../types';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="TabOne"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
      <BottomTab.Screen
        name="TabOne"
        component={TabOneNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="TabTwo"
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="TabPerfilDeUsuario"
        component={TabPerfilDeUsuarioNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="MensajesDeUsuario"
        component={MensajesDeUsuarioNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Productos"
        component={ProductosNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />
    </BottomTab.Navigator>
    
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: string; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

//ejemplo de productos
const ProductosStack = createStackNavigator<ProductosParamList>();

import Productos from '../screens/Productos';

function ProductosNavigator() {
  return (
    <ProductosStack.Navigator>
      <ProductosStack.Screen
        name="Productos"
        component={Productos}
        options={{ headerTitle: 'Productos Title' }}
      />
    </ProductosStack.Navigator>
  );
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator<TabOneParamList>();

function TabOneNavigator() {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="TabOneScreen"
        component={TabOneScreen}
        options={{ headerTitle: 'Tab One Title' }}
      />
    </TabOneStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="TabTwoScreen"
        component={TabTwoScreen}
        options={{ headerTitle: 'Tab Two Title' }}
      />
    </TabTwoStack.Navigator>
  );
}

const MensajesDeUsuarioStack = createStackNavigator<MensajesDeUsuarioParamList>();

function MensajesDeUsuarioNavigator() {
  return (
    <MensajesDeUsuarioStack.Navigator>
      <MensajesDeUsuarioStack.Screen
        name="MensajesDeUsuario"
        component={MensajesDeUsuario}
        options={{ headerTitle: 'Mensajes de usuario' }}
      />
    </MensajesDeUsuarioStack.Navigator>
  );
}

const TabPerfilDeUsuarioStack = createStackNavigator<TabPerfilDeUsuarioParamList>();



function TabPerfilDeUsuarioNavigator() {
  return (
    <TabPerfilDeUsuarioStack.Navigator>
      <TabPerfilDeUsuarioStack.Screen
        name="TabPerfilDeUsuarioScreen"
        component={TabPerfilDeUsuarioScreen}
        options={{ headerTitle: 'Perfil de usuario' }}
      />
    </TabPerfilDeUsuarioStack.Navigator>
  );
}
