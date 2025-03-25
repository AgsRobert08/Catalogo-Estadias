import React, { useState } from 'react';
import { View, ScrollView, StyleSheet, TextInput } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Header from '../Componentes/Header';
import JobCard from '../Componentes/JobCard';

const HomeScreen = ({ navigation }) => {
  const [carrera, setCarrera] = useState('Todas');
  const [busqueda, setBusqueda] = useState('');

  const trabajos = [
    {
      id: 1,
      titulo: 'Empresa de Tecnología',
      salario: 'Prácticas en Desarrollo de Software',
      ubicacion: 'CDMX',
      carrera: 'Ingeniería en Software',
    },
    {
      id: 2,
      titulo: 'Empresa de Finanzas',
      salario: 'Prácticas en Análisis Financiero',
      ubicacion: 'Monterrey',
      carrera: 'Contaduría',
    },
    // Agregar más trabajos aquí
  ];

  const filteredTrabajos = carrera === 'Todas' 
    ? trabajos.filter(trabajo => 
        trabajo.titulo.toLowerCase().includes(busqueda.toLowerCase()) || 
        trabajo.ubicacion.toLowerCase().includes(busqueda.toLowerCase())
      )
    : trabajos.filter(trabajo => 
        trabajo.carrera === carrera && 
        (trabajo.titulo.toLowerCase().includes(busqueda.toLowerCase()) || 
         trabajo.ubicacion.toLowerCase().includes(busqueda.toLowerCase()))
      );

  return (
    <View>
      <Header />
      <TextInput
        style={styles.buscador}
        placeholder="🔍 Buscar por título o ubicación..."
        value={busqueda}
        onChangeText={setBusqueda}
      />
      <Picker
        selectedValue={carrera}
        style={styles.picker}
        onValueChange={(itemValue) => setCarrera(itemValue)}
      >
        <Picker.Item label="Todas las Carreras" value="Todas" />
        <Picker.Item label="Ingeniería en Software" value="Ingeniería en Software" />
        <Picker.Item label="Contaduría" value="Contaduría" />
        {/* Agrega más carreras aquí */}
      </Picker>
      <ScrollView>
        {filteredTrabajos.map((trabajo) => (
          <JobCard
            key={trabajo.id}
            titulo={trabajo.titulo}
            salario={trabajo.salario}
            ubicacion={trabajo.ubicacion}
            onPress={() => navigation.navigate('Detalle', { trabajo })}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  picker: {
    height: 50,
    backgroundColor: '#e3f2fd', // Azul claro
    borderRadius: 8,
    marginHorizontal: 10,
    marginVertical: 5,
    borderColor: '#64b5f6',
    borderWidth: 1,
  },  
  buscador: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    margin: 10,
  },
});

export default HomeScreen;