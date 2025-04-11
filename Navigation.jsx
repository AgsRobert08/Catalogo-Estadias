import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Icon from 'react-native-vector-icons/MaterialIcons';  // Asegúrate de instalar esta librería si aún no la tienes

/** Importación de los screens */
import PresentacionScreen from "./Screen/PresentacionScreen";
import HomeScreen from './Screen/HomeScreen';
import JobDetailScreen from "./Screen/JobDetailScreen";
import ReglasScreen from "./Screen/ReglasScreen";

/** Stack Navigator para Home */
const HomeStack = createNativeStackNavigator();
function HomeStackScreen() {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen 
                name="Home" 
                component={HomeScreen}
                options={{ headerShown: false }}
            />
            <HomeStack.Screen
                name="JobDetail"
                component={JobDetailScreen}
                options={{ title: 'Detalles de la Empresa' }}
            />
        </HomeStack.Navigator>
    );
};

/** Stack Navigator para Reglas */
const ReglasStack = createNativeStackNavigator();
function ReglasStackScreen() {
    return (
        <ReglasStack.Navigator>
            <ReglasStack.Screen 
                name="ReglasMain" 
                component={ReglasScreen}
                options={{ title: 'Reglamento' }}
            />
        </ReglasStack.Navigator>
    );
};

/** Bottom Tab Navigator */
const Tab = createBottomTabNavigator();
function MyTabs() {
    return (
        <Tab.Navigator
            initialRouteName="Presentacion"
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: '#4CAF50', // Color para la pestaña activa
                tabBarInactiveTintColor: '#BDBDBD', // Color para la pestaña inactiva
                tabBarStyle: {
                    backgroundColor: '#fff', // Fondo blanco
                    borderTopColor: '#e0e0e0', // Línea superior sutil
                    borderTopWidth: 1,
                    height: 60, // Ajuste la altura de la barra de pestañas
                },
            }}
        >
            <Tab.Screen 
                name="Presentacion" 
                component={PresentacionScreen} 
                options={{
                    tabBarLabel: 'Inicio',
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="home" size={size} color={color} />
                    ),
                }}
            />
            <Tab.Screen 
                name="Empresas" 
                component={HomeStackScreen} 
                options={{
                    tabBarLabel: 'Empresas',
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="business" size={size} color={color} />
                    ),
                }}
            />
            <Tab.Screen 
                name="Reglas" 
                component={ReglasStackScreen} 
                options={{
                    tabBarLabel: 'Reglas',
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="assignment" size={size} color={color} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
};

export default function Navigation() {
    return (
        <NavigationContainer>
            <MyTabs />
        </NavigationContainer>
    );
};
