import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mis tareas por hacer</Text>
      <View style={styles.content}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Agregar una nueva tarea"
          />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.whiteText}>Agregar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    borderWidth: 1,
    flex: 1,
  },
  title: {
    fontSize: 20,
    color: '#6f6f6f',
  },
  text: {
    fontSize: 14,
    color: '#6f6f6f',
  },
  whiteText: {
    fontSize: 14,
    color: '#ffff',
  },
  textInput: {
    borderColor: '#6f6f6f',
    borderWidth: 1,
    borderRadius: 16,
    paddingLeft: 15,
  },
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  buttonContainer: {
    justifyContent: 'center',
  },
  content: {
    marginTop: 20,
    flexDirection: 'row',
  },
  button: {
    backgroundColor: '#5897df',
    padding: 12,
    alignItems: 'center',
    borderRadius: 10,
    marginLeft: 20,
  },
});
