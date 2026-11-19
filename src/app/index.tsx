import React, { useState } from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet
} from 'react-native';

export default function App() {
  const [resultado, setResultado] = useState(
    'Elige una opción para comprobar tu respuesta'
  );

  function revisarRespuesta(respuesta: string) {
    if (respuesta === 'RAM') {
      setResultado(
        '¡Muy bien! La RAM es la memoria volátil de acceso rápido.'
      );
    } else {
      setResultado(
        'Casi. Esa opción no corresponde a la memoria volátil principal, inténtalo de nuevo.'
      );
    }
  }

  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>
        RETO TECH DE JUNIOR
      </Text>

      <Text style={styles.pregunta}>
        ¿Qué componente guarda datos temporalmente mientras la PC está encendida?
      </Text>

      <Button
        title="HDD"
        onPress={() => revisarRespuesta('HDD')}
      />

      <Button
        title="RAM"
        onPress={() => revisarRespuesta('RAM')}
      />

      <Button
        title="Fuente de poder"
        onPress={() => revisarRespuesta('Fuente de poder')}
      />

      <Text style={styles.resultado}>
        Resultado: {resultado}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    justifyContent: 'center',
    padding: 25,
    backgroundColor: '#e6f4ea' // Estilo cambiado: fondo verde suave
  },
  titulo: {
    fontSize: 28, // Estilo cambiado: tamaño más grande
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 25,
    color: '#137333' // Estilo cambiado: color verde oscuro
  },
  pregunta: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
    color: '#202124'
  },
  resultado: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 25,
    fontWeight: 'bold',
    color: '#174ea6'
  }
});
