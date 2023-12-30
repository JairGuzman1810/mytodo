import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
} from 'react-native';
import TaskItem from './src/components/TaskItem';
import styles from './src/styles';
import {Task} from './src/types';
import useTaskStorage from './src/hooks/useTaskStorage';

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

// Pasamos todos nuestros elementos de task para que se visualice,
//Se tipa con una interfaz para que se puedan obtener de manera correcta los elementos.

export default function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [text, setText] = useState<string>('');
  const {onSaveTask, onGetTask, onUpdateTask} = useTaskStorage();

  const loadTasks = async () => {
    try {
      const tasksResponse = await onGetTask();
      setTasks(tasksResponse);
      //console.log(tasksResponse);
    } catch (error) {
      console.log(error);
      setTasks([]);
    }
  };

  useEffect(() => {
    loadTasks().catch(null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const addTask = async () => {
    if (text !== '') {
      //Verificamos si el titulo es unico.
      const isTitleUnique = tasks.every(task => task.title !== text);

      if (isTitleUnique) {
        try {
          await onSaveTask({
            title: text,
            done: false,
            date: new Date().toISOString(),
          });

          Alert.alert('Exito', 'Tarea agregada con exito.');
          setText('');
          loadTasks();
        } catch (error) {
          Alert.alert('Error', 'Hubo un error al agregar la tarea.');
          console.log(error);
        }
      } else {
        Alert.alert(
          'Tarea duplicada',
          'El nombre de la tarea no se debe repetir.',
        );
      }
    } else {
      Alert.alert('Campo vacio', 'El nombre de la tarea es obligatorio.');
    }
  };

  const markDone = (task: Task) => {
    const tmpTask = [...tasks];
    // Buscamos el index del mediante el titulo de la tarea seleccionado.
    const index = tmpTask.findIndex(el => el.title === task.title);

    //Conseguimos la tarea con el index.
    const todo = tmpTask[index];
    //cambiar el estatus al contrario de si esta marcado o no.
    todo.done = !todo.done;
    onUpdateTask(tmpTask);
    loadTasks();
  };
  const deleteFunction = (task: Task) => {
    Alert.alert(
      'Confirmación',
      '¿Estás seguro de eliminar esta tarea?',
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Eliminar',
          onPress: () => {
            // Usuario hizo clic en "Eliminar"
            const tmpTask = [...tasks];
            const index = tmpTask.findIndex(el => el.title === task.title);
            tmpTask.splice(index, 1);
            onUpdateTask(tmpTask);
            loadTasks();
            Alert.alert('Tarea eliminada con éxito');
          },
        },
      ],
      {cancelable: false},
    );
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
          data={tasks}
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
