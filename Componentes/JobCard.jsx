import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const JobCard = ({ titulo, salario, ubicacion, carrera, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
      <View style={styles.card}>
        <View style={styles.header}>
          <Text style={styles.titulo}>{titulo}</Text>
        </View>
        
        <View style={styles.detailsContainer}>
          
          <View style={styles.detailRow}>
            <Icon name="location-on" size={18} color="#F44336" />
            <Text style={styles.ubicacion}>{ubicacion}</Text>
          </View>
          
          <View style={styles.detailRow}>
            <Icon name="school" size={18} color="#2196F3" />
            <Text style={styles.carrera}>{carrera}</Text>
          </View>



        </View>
        
        <View style={styles.footer}>
          <Text style={styles.moreInfo}>Ver detalles</Text>
          <Icon name="chevron-right" size={22} color="#666" />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 15,
    marginVertical: 8,
    marginHorizontal: 16,
    backgroundColor: '#fff',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 3,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  header: {
    marginBottom: 12,
  },
  titulo: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
    textAlign: 'center', // Centrado para un toque más formal
  },
  detailsContainer: {
    marginVertical: 10,
    //hacer el contenedor mas grnade
    height:60
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  salario: {
    fontSize: 16,
    color: '#4CAF50',
    marginLeft: 8,
  },
  ubicacion: {
    fontSize: 16,
    color: '#F44336',
    marginLeft: 8,
  },
  carrera: {
    fontSize: 16,
    color: '#2196F3',
    marginLeft: 8,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between', // Para poner "Ver detalles" en el extremo izquierdo
    alignItems: 'center',
    marginTop: 10,
    borderTopWidth: 1,
    borderTopColor: '#eee',
    paddingTop: 10,
  },
  moreInfo: {
    color: '#666',
    fontSize: 16,
  },
});

export default JobCard;
