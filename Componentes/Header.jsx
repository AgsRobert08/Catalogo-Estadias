import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Asegúrate de tener instalada esta librería

const Header = () => {
    return (
        <View style={styles.header}>
            <Image 
                style={styles.imagen} 
                source={require('../assets/logoUTF.png')} 
            />
            
            <Text style={styles.title}>
                Universidad Tecnológica{'\n'}de la Sierra Hidalguense
            </Text>

            <TouchableOpacity style={styles.menuButton} onPress={() => alert('Menú abierto')}>
                <Icon name="menu" size={30} color="#fff" />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        paddingVertical: 15,
        paddingHorizontal: 20,
        backgroundColor: '#084c02',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 4 },
        shadowRadius: 5,
        elevation: 5,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
        flex: 1, // Permite que el texto se expanda proporcionalmente
    },
    imagen: {
        width: 50,
        height: 50,
        resizeMode: 'contain',
    },
    menuButton: {
        padding: 5,
    },
});

export default Header;
