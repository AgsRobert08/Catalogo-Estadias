import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './Screens/HomeScreen';
import JobDetailScreen from './Screens/JobDetailScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Inicio">
        <Stack.Screen 
          name="Inicio" 
          component={HomeScreen} 
          options={{ title: 'Catálogo de Empresas' }}
        />
        <Stack.Screen 
          name="Detalle" 
          component={JobDetailScreen} 
          options={{ title: 'Detalles de la Empresa' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;