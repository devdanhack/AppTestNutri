import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/screens/Home';
import Appointments from './src/screens/Appointments';
import Services from './src/screens/Services';
import Profile from './src/screens/Profile';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#059669',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen 
          name="Home" 
          component={Home}
          options={{ title: 'NutriLife' }}
        />
        <Stack.Screen 
          name="Appointments" 
          component={Appointments}
          options={{ title: 'Agendar Consulta' }}
        />
        <Stack.Screen 
          name="Services" 
          component={Services}
          options={{ title: 'Serviços' }}
        />
        <Stack.Screen 
          name="Profile" 
          component={Profile}
          options={{ title: 'Meu Perfil' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}