import React from "react";
import { ScrollView, View, Text, StyleSheet } from "react-native";
import DescargaPDF from "../Componentes/DescargarPDF";

const ReglasScreen = () => {
    return (
        <ScrollView contentContainerStyle={styles.container}>

            <Text style={styles.informacion}>Se adjuntan tres archivos que es necesario leer respectivamente:</Text>

            <Text style={styles.descripcion}>🔹 <Text style={styles.bold}>Lineamientos de estadías:</Text> Leer completo e identificar registros ahí mencionados.</Text>
            <Text style={styles.descripcion}>🔹 <Text style={styles.bold}>Reglamento de estadías:</Text> Leer completo e identificar lo que les aplica.</Text>
            <Text style={styles.descripcion}>🔹 <Text style={styles.bold}>Registro de estadías:</Text> Requisitar correctamente (de preferencia en computadora en una sola hoja; si es a tinta, que sea legible y entendible). Entregar impreso en la oficina de estadías.</Text>

            <Text style={styles.nota}>📌 Considerar que algunas organizaciones requerirán entrevista, por lo que es importante planear sus salidas para no afectar la asistencia a clases.</Text>

            <Text style={styles.nota}>📅 La gestión se realizará por etapas, iniciando con su respectivo análisis en el registro de estadía. Quienes requieran la consulta del catálogo de empresas de la UTSH podrán acudir a la oficina de lunes a viernes de 10:00 a.m. a 17:00 y continuar el proceso de su tramite.</Text>

            <Text style={styles.nota}>📨 Una vez identificadas sus propuestas se enviarán solicitudes a las Organizaciones Receptoras. Algunas contestan pronto, otras pueden demorar más de dos semanas.</Text>

            <DescargaPDF />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: "#f0f4f8",
        flexGrow: 1,
    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
        color: "blue",
        textAlign: "center",
        marginBottom: 10,
    },
    informacion: {
        fontSize: 18,
        fontWeight: "600",
        marginVertical: 10,
    },
    descripcion: {
        fontSize: 16,
        marginBottom: 5,
    },
    nota: {
        fontSize: 14,
        fontStyle: "italic",
        color: "#555",
        marginVertical: 5,
    },
    bold: {
        fontWeight: "bold",
    }
});

export default ReglasScreen;