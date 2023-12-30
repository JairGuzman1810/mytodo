import {Text, TouchableOpacity, View} from 'react-native';
import React, {FC} from 'react';
import {TaskItemProps} from '../../interfaces';
import styles from '../../styles';

const TaskItem: FC<TaskItemProps> = ({item, markDone, deleteFunction}) => {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.leftcontainer}>
        <TouchableOpacity onPress={markDone}>
          <Text style={item.done ? styles.textDone : styles.text}>
            {item.title}
          </Text>
          <Text style={styles.text}>{item.date.toLocaleDateString()}</Text>
        </TouchableOpacity>
      </View>
      {item.done && (
        <TouchableOpacity style={styles.removebutton} onPress={deleteFunction}>
          <Text style={styles.whiteText}>Eliminar</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default TaskItem;
