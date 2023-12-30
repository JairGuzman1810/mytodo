import React from 'react';
import {View, Text, TextInput, TouchableOpacity, FlatList} from 'react-native';
import TaskItem from './src/components/TaskItem';
import styles from './src/styles';

const tasks = [
  {
    title: 'Alimentar al perro.',
    done: false,
    date: new Date(),
  },
  {
    title: 'Hablar con Marissa.',
    done: false,
    date: new Date(),
  },
  {
    title: 'Programar un rato.',
    done: true,
    date: new Date(),
  },
];

const deleteFunction = () => {
  console.log('Deleteado');
};
const markDone = () => {
  console.log('marqueado.');
};
// Pasamos todos nuestros elementos de task para que se visualice,
//Se tipa con una interfaz para que se puedan obtener de manera correcta los elementos.

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
      <View style={styles.scrollcontainer}>
        {/* Se pasan los elementos a la función que se hace cargo de proyectarlos y en data se pasan los elementos. */}
        <FlatList
          renderItem={({item}) => (
            <TaskItem
              item={item}
              deleteFunction={deleteFunction}
              markDone={markDone}
            />
          )}
          data={tasks}
        />
      </View>
    </View>
  );
}
