import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, FlatList} from 'react-native';
import TaskItem from './src/components/TaskItem';
import styles from './src/styles';
import {Task} from './src/types';

/*const tasks = [
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
];*/

const deleteFunction = () => {
  console.log('Deleteado');
};
const markDone = () => {
  console.log('marqueado.');
};
// Pasamos todos nuestros elementos de task para que se visualice,
//Se tipa con una interfaz para que se puedan obtener de manera correcta los elementos.

export default function App() {
  const [task, setTask] = useState<Task[]>([]);
  const [text, setText] = useState<string>('');

  const addTask = () => {
    const tmp = [...task];
    const newTask = {
      title: text,
      done: false,
      date: new Date(),
    };

    tmp.push(newTask);
    setTask(tmp);
    setText('');
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mis tareas por hacer</Text>
      <View style={styles.content}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Agregar una nueva tarea"
            value={text}
            onChangeText={(t: string) => setText(t)}
          />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={addTask}>
            <Text style={styles.whiteText}>Agregar</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.scrollcontainer}>
        {/* Se pasan los elementos a la función que se hace cargo de proyectarlos y en data se pasan los elementos. */}
        <FlatList
          data={task}
          renderItem={({item}) => (
            <TaskItem
              item={item}
              deleteFunction={deleteFunction}
              markDone={markDone}
            />
          )}
        />
      </View>
    </View>
  );
}
