import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Necesitas instalar react-native-vector-icons

const JobCard = ({ titulo, salario, ubicacion, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.card}>
        <Text style={styles.titulo}>{titulo}</Text>
        <Text style={styles.salario}>{salario}</Text>
        <View style={styles.ubicacionContainer}>
          <Icon name="location-on" size={16} color="gray" />
          <Text style={styles.ubicacion}>{ubicacion}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 20,
    margin: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  salario: {
    fontSize: 16,
    color: 'green',
    marginTop: 5,
  },
  ubicacionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  ubicacion: {
    fontSize: 14,
    color: 'gray',
    marginLeft: 5,
  },
});

export default JobCard;