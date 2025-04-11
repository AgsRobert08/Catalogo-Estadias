import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import * as FileSystem from 'expo-file-system';
import * as Sharing from 'expo-sharing';
import { Asset } from 'expo-asset';

// Array con los archivos disponibles
const archivos = [
  { nombre: 'Reglamento_Estadias.pdf', ruta: require('../assets/ReglamentoUTSH.pdf') },
  { nombre: 'Lineamiento_Estadias.pdf', ruta: require('../assets/LINEAMIENTOSPARAESTADÍAUTSENERO2025.pdf') },
  { nombre: 'Registro_De_Estadias.pdf', ruta: require('../assets/REGISTRODEESTDIA-REQUISITARYENTREGARIMPRESOENLAOFICINADEESTADIAS.pdf') }
];

const DescargaPDF = () => {
  const [descargando, setDescargando] = useState(null); // null = ningún archivo descargando

  // Función para obtener la URI local del archivo
  const copiarArchivoLocal = async (archivo) => {
    const asset = Asset.fromModule(archivo.ruta);

    if (!asset.localUri) {
      await asset.downloadAsync();
    }

    const fileUri = `${FileSystem.documentDirectory}${archivo.nombre}`;

    // Copia el archivo solo si no existe previamente
    const fileInfo = await FileSystem.getInfoAsync(fileUri);
    if (!fileInfo.exists) {
      await FileSystem.copyAsync({
        from: asset.localUri,
        to: fileUri
      });
    }

    return fileUri;
  };

  // Función para descargar un archivo específico
  const descargarPDF = async (archivo) => {
    try {
      setDescargando(archivo.nombre);

      const fileUri = await copiarArchivoLocal(archivo);

      if (await Sharing.isAvailableAsync()) {
        await Sharing.shareAsync(fileUri, {
          mimeType: 'application/pdf',
          dialogTitle: `Descargar ${archivo.nombre}`,
          UTI: 'com.adobe.pdf'
        });
      } else {
        Alert.alert(
          'Descarga completa',
          `El PDF se guardó en: ${fileUri}`,
          [{ text: 'OK' }]
        );
      }
    } catch (error) {
      Alert.alert('Error', `No se pudo descargar: ${error.message}`);
    } finally {
      setDescargando(null);
    }
  };

  return (
    <View style={styles.container}>
      {archivos.map((archivo) => (
        <TouchableOpacity
          key={archivo.nombre}
          onPress={() => descargarPDF(archivo)}
          disabled={descargando === archivo.nombre}
          style={styles.botonDescarga}
        >
          <MaterialIcons
            name={descargando === archivo.nombre ? "hourglass-full" : "cloud-download"}
            size={24}
            color="white"
          />
          <Text style={styles.textoBoton}>
            {descargando === archivo.nombre ? 'Descargando...' : `Descargar ${archivo.nombre}`}
          </Text>
        </TouchableOpacity>
      ))}

      <View style={styles.nota}>
        <MaterialIcons name="info" size={16} color="#084c02" />
        <Text style={styles.textoNota}>
          Los documentos se guardarán en tu dispositivo (PDF).
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    alignItems: 'center',
  },
  botonDescarga: {
    flexDirection: 'row',
    backgroundColor: '#084c02',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 10,
    elevation: 3,
  },
  textoBoton: {
    color: 'white',
    fontWeight: 'bold',
    marginLeft: 10,
    fontSize: 16,
  },
  nota: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    padding: 8,
    backgroundColor: '#e8f5e9',
    borderRadius: 5,
  },
  textoNota: {
    color: '#2e7d32',
    fontSize: 12,
    marginLeft: 5,
  },
});

export default DescargaPDF;
