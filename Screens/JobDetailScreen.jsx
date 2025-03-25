import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking, Share } from 'react-native';

const JobDetailScreen = ({ route }) => {
  const { trabajo } = route.params;

  const handleContacto = () => {
    Linking.openURL('mailto:contacto@empresa.com'); 
  };

  const handleCompartir = async () => {
    try {
      await Share.share({
        message: `Mira esta oferta: ${trabajo.titulo} - ${trabajo.salario} en ${trabajo.ubicacion}`,
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>{trabajo.titulo}</Text>
      <Text style={styles.salario}>{trabajo.salario}</Text>
      <Text style={styles.ubicacion}>{trabajo.ubicacion}</Text>
      <Text style={styles.descripcion}>
        Descripción del puesto: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Text>
      <TouchableOpacity style={styles.boton} onPress={handleContacto}>
        <Text style={styles.textoBoton}>Contactar a la Empresa</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.boton, styles.botonCompartir]} onPress={handleCompartir}>
        <Text style={styles.textoBoton}>Compartir Oferta</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  salario: {
    fontSize: 20,
    color: 'green',
    marginTop: 10,
  },
  ubicacion: {
    fontSize: 18,
    color: 'gray',
    marginTop: 10,
  },
  descripcion: {
    fontSize: 16,
    color: '#555',
    marginTop: 20,
  },
  boton: {
    marginTop: 20,
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  botonCompartir: {
    backgroundColor: '#28a745',
  },
  textoBoton: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default JobDetailScreen;