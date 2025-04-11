import React, { useState } from 'react';
import { View, ScrollView, StyleSheet, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';

import Header from '../Componentes/Header';
import JobCard from '../Componentes/JobCard';

const HomeScreen = () => {
  const [carrera, setCarrera] = useState('Todas');
  const [busqueda, setBusqueda] = useState('');
  const navigation = useNavigation();

  const trabajos = [
    // Ingeniería en Software (4 ejemplos)
    {
      id: 1,
      titulo: 'KIO Networks',
      salario: '$12,000 - $18,000 MXN/mes',
      ubicacion: 'CDMX',
      carrera: 'Ingeniería en Software',
      descripcion: 'Desarrollo de soluciones cloud para empresas. Requiere conocimientos en AWS y Python'
    },
    {
      id: 2,
      titulo: 'Softtek',
      salario: '$10,000 - $15,000 MXN/mes',
      ubicacion: 'Monterrey',
      carrera: 'Ingeniería en Software',
      descripcion: 'Prácticas profesionales en desarrollo de aplicaciones empresariales con Java'
    },
    {
      id: 3,
      titulo: 'Wizeline',
      salario: '$15,000 - $20,000 MXN/mes',
      ubicacion: 'Guadalajara',
      carrera: 'Ingeniería en Software',
      descripcion: 'Desarrollo de software para clientes internacionales usando React y Node.js'
    },
    {
      id: 4,
      titulo: 'Oracle México',
      salario: '$18,000 - $25,000 MXN/mes',
      ubicacion: 'CDMX',
      carrera: 'Ingeniería en Software',
      descripcion: 'Prácticas en desarrollo de bases de datos y soluciones empresariales'
    },

    // Redes y Ciberseguridad (3 ejemplos)
    {
      id: 5,
      titulo: 'Trend Micro México',
      salario: '$14,000 - $22,000 MXN/mes',
      ubicacion: 'CDMX',
      carrera: 'Redes y Ciberseguridad',
      descripcion: 'Analista de seguridad para protección de endpoints contra ciberamenazas'
    },
    {
      id: 6,
      titulo: 'Telcel',
      salario: '$12,000 - $16,000 MXN/mes',
      ubicacion: 'Monterrey',
      carrera: 'Redes y Ciberseguridad',
      descripcion: 'Prácticas en configuración y mantenimiento de redes corporativas'
    },
    {
      id: 7,
      titulo: 'Cisco México',
      salario: '$16,000 - $24,000 MXN/mes',
      ubicacion: 'Guadalajara',
      carrera: 'Redes y Ciberseguridad',
      descripcion: 'Implementación de soluciones de seguridad para redes empresariales'
    },

    // Mecatrónica (3 ejemplos)
    {
      id: 8,
      titulo: 'Siemens México',
      salario: '$13,000 - $18,000 MXN/mes',
      ubicacion: 'Puebla',
      carrera: 'Mecatrónica',
      descripcion: 'Prácticas en automatización industrial y control de procesos'
    },
    {
      id: 9,
      titulo: 'Bombardier',
      salario: '$14,000 - $19,000 MXN/mes',
      ubicacion: 'Querétaro',
      carrera: 'Mecatrónica',
      descripcion: 'Mantenimiento de sistemas mecatrónicos en transporte ferroviario'
    },
    {
      id: 10,
      titulo: 'Nemak',
      salario: '$12,000 - $16,000 MXN/mes',
      ubicacion: 'Nuevo León',
      carrera: 'Mecatrónica',
      descripcion: 'Operación y programación de robots industriales en línea de producción'
    },

    // Derecho (3 ejemplos)
    {
      id: 11,
      titulo: 'Santamarina y Steta',
      salario: '$10,000 - $15,000 MXN/mes',
      ubicacion: 'CDMX',
      carrera: 'Derecho',
      descripcion: 'Prácticas en derecho corporativo para despacho de abogados líder'
    },
    {
      id: 12,
      titulo: 'Bufete Jurídico del Estado',
      salario: '$9,000 - $12,000 MXN/mes',
      ubicacion: 'Jalisco',
      carrera: 'Derecho',
      descripcion: 'Asistente legal en departamento de derecho administrativo'
    },
    {
      id: 13,
      titulo: 'Baker McKenzie',
      salario: '$15,000 - $20,000 MXN/mes',
      ubicacion: 'CDMX',
      carrera: 'Derecho',
      descripcion: 'Prácticas en derecho internacional para firma global'
    },

    // Administración (3 ejemplos)
    {
      id: 14,
      titulo: 'PepsiCo México',
      salario: '$11,000 - $15,000 MXN/mes',
      ubicacion: 'Estado de México',
      carrera: 'Administración',
      descripcion: 'Prácticas en gestión de cadena de suministro para empresa global'
    },
    {
      id: 15,
      titulo: 'Cemex',
      salario: '$12,000 - $16,000 MXN/mes',
      ubicacion: 'Monterrey',
      carrera: 'Administración',
      descripcion: 'Asistente en departamento de finanzas corporativas'
    },
    {
      id: 16,
      titulo: 'Grupo Bimbo',
      salario: '$10,000 - $14,000 MXN/mes',
      ubicacion: 'CDMX',
      carrera: 'Administración',
      descripcion: 'Prácticas en gestión de recursos humanos'
    },

    // Mercadotecnia (3 ejemplos)
    {
      id: 17,
      titulo: 'Grupo Modelo',
      salario: '$11,000 - $15,000 MXN/mes',
      ubicacion: 'CDMX',
      carrera: 'Mercadotecnia',
      descripcion: 'Prácticas en desarrollo de campañas de marketing digital'
    },
    {
      id: 18,
      titulo: 'Loréal México',
      salario: '$12,000 - $16,000 MXN/mes',
      ubicacion: 'Estado de México',
      carrera: 'Mercadotecnia',
      descripcion: 'Asistente en investigación de mercado para productos cosméticos'
    },
    {
      id: 19,
      titulo: 'Google México',
      salario: '$15,000 - $22,000 MXN/mes',
      ubicacion: 'CDMX',
      carrera: 'Mercadotecnia',
      descripcion: 'Prácticas en análisis de datos para estrategias de marketing digital'
    },

    // Ingeniería Civil (3 ejemplos)
    {
      id: 20,
      titulo: 'ICA',
      salario: '$12,000 - $17,000 MXN/mes',
      ubicacion: 'CDMX',
      carrera: 'Ingeniería Civil',
      descripcion: 'Prácticas en supervisión de obra para proyectos de infraestructura'
    },
    {
      id: 21,
      titulo: 'Grupo Carso',
      salario: '$13,000 - $18,000 MXN/mes',
      ubicacion: 'Monterrey',
      carrera: 'Ingeniería Civil',
      descripcion: 'Asistente en diseño de proyectos de construcción sustentable'
    },
    {
      id: 22,
      titulo: 'OHL México',
      salario: '$14,000 - $19,000 MXN/mes',
      ubicacion: 'Guadalajara',
      carrera: 'Ingeniería Civil',
      descripcion: 'Prácticas en cálculo de estructuras para puentes y carreteras'
    },

    // Enfermería (3 ejemplos)
    {
      id: 23,
      titulo: 'Hospital ABC',
      salario: '$9,000 - $12,000 MXN/mes',
      ubicacion: 'CDMX',
      carrera: 'Enfermería',
      descripcion: 'Prácticas clínicas en hospital de tercer nivel con rotación por especialidades'
    },
    {
      id: 24,
      titulo: 'IMSS',
      salario: '$8,000 - $11,000 MXN/mes',
      ubicacion: 'Puebla',
      carrera: 'Enfermería',
      descripcion: 'Prácticas en atención primaria en centros de salud comunitarios'
    },
    {
      id: 25,
      titulo: 'Hospital Zambrano Hellion',
      salario: '$10,000 - $13,000 MXN/mes',
      ubicacion: 'Nuevo León',
      carrera: 'Enfermería',
      descripcion: 'Prácticas en enfermería especializada en área de cardiología'
    },

    // Terapia Física (2 ejemplos)
    {
      id: 26,
      titulo: 'CRIT Teletón',
      salario: '$9,000 - $12,000 MXN/mes',
      ubicacion: 'Querétaro',
      carrera: 'Terapia Física',
      descripcion: 'Prácticas en rehabilitación física para pacientes pediátricos'
    },
    {
      id: 27,
      titulo: 'Sport City',
      salario: '$8,000 - $11,000 MXN/mes',
      ubicacion: 'CDMX',
      carrera: 'Terapia Física',
      descripcion: 'Terapeuta deportivo para gimnasio de alto rendimiento'
    },

    // Recursos Naturales (2 ejemplos)
    {
      id: 28,
      titulo: 'SEMARNAT',
      salario: '$10,000 - $14,000 MXN/mes',
      ubicacion: 'CDMX',
      carrera: 'Recursos Naturales',
      descripcion: 'Prácticas en análisis de impacto ambiental para proyectos gubernamentales'
    },
    {
      id: 29,
      titulo: 'Cemex Sustentabilidad',
      salario: '$12,000 - $16,000 MXN/mes',
      ubicacion: 'Monterrey',
      carrera: 'Recursos Naturales',
      descripcion: 'Asistente en programas de conservación de recursos naturales'
    },

    // Ingeniería Industrial (3 ejemplos)
    {
      id: 30,
      titulo: 'Ford México',
      salario: '$13,000 - $18,000 MXN/mes',
      ubicacion: 'Hermosillo',
      carrera: 'Ingeniería Industrial',
      descripcion: 'Prácticas en optimización de procesos de producción automotriz'
    },
    {
      id: 31,
      titulo: 'FEMSA',
      salario: '$12,000 - $16,000 MXN/mes',
      ubicacion: 'Monterrey',
      carrera: 'Ingeniería Industrial',
      descripcion: 'Asistente en logística y cadena de suministro para bebidas'
    },
    {
      id: 32,
      titulo: 'Whirlpool',
      salario: '$11,000 - $15,000 MXN/mes',
      ubicacion: 'Querétaro',
      carrera: 'Ingeniería Industrial',
      descripcion: 'Prácticas en mejora continua de líneas de ensamble'
    },

    // Mantenimiento Industrial (2 ejemplos)
    {
      id: 33,
      titulo: 'Grupo México',
      salario: '$12,000 - $16,000 MXN/mes',
      ubicacion: 'Sonora',
      carrera: 'Mantenimiento Industrial',
      descripcion: 'Técnico en mantenimiento predictivo para maquinaria pesada minera'
    },
    {
      id: 34,
      titulo: 'Ternium',
      salario: '$14,000 - $19,000 MXN/mes',
      ubicacion: 'Nuevo León',
      carrera: 'Mantenimiento Industrial',
      descripcion: 'Prácticas en mantenimiento de equipos en planta siderúrgica'
    }
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
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
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
          <Picker.Item label="Redes y Ciberseguridad" value="Redes y Ciberseguridad" />
          <Picker.Item label="Mecatrónica" value="Mecatrónica" />
          <Picker.Item label="Derecho" value="Derecho" />
          <Picker.Item label="Administración" value="Administración" />
          <Picker.Item label="Mercadotecnia" value="Mercadotecnia" />
          <Picker.Item label="Ingeniería Civil" value="Ingeniería Civil" />
          <Picker.Item label="Enfermería" value="Enfermería" />
          <Picker.Item label="Terapia Física" value="Terapia Física" />
          <Picker.Item label="Recursos Naturales" value="Recursos Naturales" />
          <Picker.Item label="Ingeniería Industrial" value="Ingeniería Industrial" />
          <Picker.Item label="Mantenimiento Industrial" value="Mantenimiento Industrial" />
        </Picker>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          {filteredTrabajos.map((trabajo) => (
            <JobCard
              key={trabajo.id}
              titulo={trabajo.titulo}
              ubicacion={trabajo.ubicacion}
              carrera={trabajo.carrera}
              descripcion={trabajo.descripcion}
              onPress={() => navigation.navigate('JobDetail', {
                trabajo: trabajo
              })}
            />
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    paddingBottom: 20,
  },
  picker: {
    height: 50,
    backgroundColor: '#e3f2fd',
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