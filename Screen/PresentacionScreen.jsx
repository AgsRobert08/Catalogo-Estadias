import React from "react";
import { View, ScrollView, StyleSheet, Text, Image, TouchableOpacity, Dimensions } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

/** Importación de componentes */
import Header from "../Componentes/Header";

const PresentacionScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Header />

            <ScrollView contentContainerStyle={styles.scrollContainer}>
                {/* Imagen a todo ancho */}
                <Image
                    source={require('../assets/img-bg-home.jpg')}
                    style={styles.fullWidthImage}
                    resizeMode="cover"
                />

                {/* Sección de información */}
                <View style={styles.infoBox}>
                    <Text style={styles.sectionTitle}>¿Qué puedes hacer aquí?</Text>

                    <View style={styles.featureItem}>
                        <MaterialIcons name="search" size={24} color="#084c02" />
                        <Text style={styles.featureText}>Explorar oportunidades de prácticas profesionales</Text>
                    </View>

                    <View style={styles.featureItem}>
                        <MaterialIcons name="business" size={24} color="#084c02" />
                        <Text style={styles.featureText}>Conocer empresas colaboradoras de la UTSH</Text>
                    </View>

                    <View style={styles.featureItem}>
                        <MaterialIcons name="description" size={24} color="#084c02" />
                        <Text style={styles.featureText}>Consultar requisitos y detalles de cada empresa</Text>
                    </View>
                </View>

                {/* Botones principales */}
                <View style={styles.buttonsContainer}>
                    <TouchableOpacity
                        style={[styles.mainButton, styles.primaryButton]}
                        onPress={() => navigation.navigate('Empresas')}
                    >
                        <Text style={styles.buttonText}>Ver Catalogo de Empresas</Text>
                        <MaterialIcons name="work" size={20} color="white" />
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[styles.mainButton, styles.secondaryButton]}
                        onPress={() => navigation.navigate('Reglas')} // Navega al tab de Reglas
                    >
                        <Text style={[styles.buttonText, styles.darkText]}>Reglas de Estadía</Text>
                    </TouchableOpacity>
                </View>

                {/* Descripción reglas de estadía */}
                <View style={styles.rulesBox}>
                    <Text style={styles.rulesText}>
                        Consulta el reglamento completo de prácticas profesionales, requisitos de
                        participación y compromisos como estudiante de la UTSH.
                    </Text>
                </View>

                {/* Contacto */}
                <View style={styles.contactBox}>
                    <Text style={styles.contactTitle}>Contacto</Text>
                    <Text style={styles.contactText}>Mtra.Esmeralda Vargas Martinez</Text>
                    <Text style={styles.contactText}>Coordinacion de Vinvulacion y Extension</Text>
                    <Text style={styles.contactText}>estadias@utsh.edu.mx</Text>
                    <Text style={styles.contactText}>Tel: 774 74 2 11 21  ext.142</Text>
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    scrollContainer: {
        paddingBottom: 30,
    },
    fullWidthImage: {
        width: width,
        height: width * 0.5, // Relación de aspecto 2:1
        marginBottom: 20,
    },
    infoBox: {
        backgroundColor: 'white',
        marginHorizontal: 20,
        padding: 20,
        borderRadius: 10,
        elevation: 3,
        marginBottom: 15,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#084c02',
        marginBottom: 15,
        textAlign: 'center',
    },
    featureItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 12,
        paddingHorizontal: 10,
    },
    featureText: {
        fontSize: 16,
        color: '#333',
        marginLeft: 10,
        flex: 1,
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        marginBottom: 15,
    },
    mainButton: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 12,
        paddingHorizontal: 15,
        borderRadius: 8,
        width: '48%', // Para dos botones con espacio entre ellos
        justifyContent: 'center',
    },
    primaryButton: {
        backgroundColor: '#084c02',
    },
    secondaryButton: {
        backgroundColor: '#e8f5e9',
        borderWidth: 1,
        borderColor: '#084c02',
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        marginRight: 5,
    },
    darkText: {
        color: '#084c02',
    },
    rulesBox: {
        backgroundColor: '#f1f8e9',
        marginHorizontal: 20,
        padding: 15,
        borderRadius: 8,
        borderLeftWidth: 4,
        borderLeftColor: '#084c02',
        marginBottom: 20,
    },
    rulesText: {
        fontSize: 14,
        color: '#2e7d32',
        lineHeight: 20,
    },
    contactBox: {
        backgroundColor: 'white',
        marginHorizontal: 20,
        padding: 20,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#e0e0e0',
    },
    contactTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#084c02',
        marginBottom: 10,
        textAlign: 'center',
    },
    contactText: {
        fontSize: 14,
        color: '#555',
        textAlign: 'center',
        marginBottom: 5,
    },
});

export default PresentacionScreen;