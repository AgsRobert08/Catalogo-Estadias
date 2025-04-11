import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking, Share, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const JobDetailScreen = ({ route, navigation }) => {
  const { trabajo } = route.params;

  const handleContacto = () => {
    Linking.openURL('mailto:contacto@empresa.com');
  };

  const handleCompartir = async () => {
    try {
      await Share.share({
        message: `Mira esta oferta: ${trabajo.titulo} en ${trabajo.ubicacion}`,
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.titulo}>{trabajo.titulo}</Text>

        <View style={styles.detailRow}>
          <Icon name="place" size={20} color="#F44336" />
          <Text style={styles.ubicacion}>{trabajo.ubicacion}</Text>
        </View>

        <View style={styles.detailRow}>
          <Icon name="school" size={20} color="#2196F3"  />
          <Text style={styles.salario}>{ trabajo.carrera}</Text>
        </View>

        <Text style={styles.descripcion}>
          {trabajo.descripcion}
        </Text>
      </View>

      <TouchableOpacity style={[styles.boton, styles.botonContacto]} onPress={handleContacto}>
        <Icon name="email" size={20} color="#fff" />
        <Text style={styles.textoBoton}>Contactar a la Empresa</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.boton, styles.botonCompartir]} onPress={handleCompartir}>
        <Icon name="share" size={20} color="#fff" />
        <Text style={styles.textoBoton}>Compartir Oferta</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#ECEFF1',
  },
  card: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 12,
    shadowColor: '#6200EE',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 4,
    marginBottom: 20,
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#6200EE',
    marginBottom: 10,
    textAlign: 'center',
  },
  salario: {
    fontSize: 20,
    color: '#4CAF50',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  ubicacion: {
    fontSize: 18,
    color: '#F44336',
    marginLeft: 8,
  },
  descripcion: {
    fontSize: 16,
    color: '#555',
    marginTop: 10,
    lineHeight: 24,
    textAlign: 'justify',
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  boton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderRadius: 8,
    justifyContent: 'center',
    marginTop: 10,
  },
  botonContacto: {
    backgroundColor: '#6200EE',
  },
  botonCompartir: {
    backgroundColor: '#4CAF50',
  },
  textoBoton: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 8,
  },
});

export default JobDetailScreen;
