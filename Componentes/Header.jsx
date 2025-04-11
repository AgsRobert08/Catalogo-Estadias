import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

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
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        paddingVertical: 15,
        paddingHorizontal: 20,
        backgroundColor: '#084c02',
        flexDirection: 'row',
        alignItems: 'center', // Alineación vertical correcta
        justifyContent: 'space-between',
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 4 },
        shadowRadius: 5,
        elevation: 5,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
        paddingBlockStart: 20, // Espacio adicional para que no se vea pegado arriba
        flex: 1,
    },
    imagen: {
        width: 80,  
        height: 80,
        resizeMode: 'contain',
        marginTop: 15, // Ajuste preciso para alinear con el texto
    },
    menuButton: {
        padding: 5,
    },
});

export default Header;
