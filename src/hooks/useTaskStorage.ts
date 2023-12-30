import AsyncStorage from '@react-native-async-storage/async-storage';
import {Task} from '../types';

const MY_TASK_KEY = '@MyTask:Key';

const useTaskStorage = () => {
  const handleSaveTask = async (task: Task) => {
    try {
      //Revisamos si algo esta almacenado.
      const currentSaveTask = await AsyncStorage.getItem(MY_TASK_KEY);
      //Si es diferente a null, significa que hay algo guardado.
      if (currentSaveTask != null) {
        //Convertimos el string a JSON para hacer uso de la info
        const currentSavedTaskParsed = JSON.parse(currentSaveTask);
        //Se agrega la nueva información al JSON.
        currentSavedTaskParsed.push(task);
        //Se guarda el nuevo JSON a la misma llave, pero se debio convertir en string antes.
        await AsyncStorage.setItem(
          MY_TASK_KEY,
          JSON.stringify(currentSavedTaskParsed),
        );

        return Promise.resolve('Exito.');
      } else {
        //Si no hay nada, se crea uno nuevo, guardando en string un json con las calorias.
        await AsyncStorage.setItem(MY_TASK_KEY, JSON.stringify([task]));

        return Promise.resolve('Exito.');
      }
    } catch (error) {
      return Promise.reject(error);
    }
  };

  const handleGetTask = async () => {
    try {
      //Se obtiene la comida ya registrada en el asyncStorage
      const task = await AsyncStorage.getItem(MY_TASK_KEY);
      if (task != null) {
        //Si hay, se obtiene y lo retorna.
        const parsedFood = JSON.parse(task);
        return Promise.resolve(parsedFood);
      }
    } catch (error) {
      //Si no hay, retorna error.
      return Promise.reject(error);
    }
  };

  const handleUpdateTask = async (task: Task[]) => {
    await AsyncStorage.setItem(MY_TASK_KEY, JSON.stringify(task));
  };

  return {
    onSaveTask: handleSaveTask,
    onGetTask: handleGetTask,
    onUpdateTask: handleUpdateTask,
  };
};

export default useTaskStorage;
