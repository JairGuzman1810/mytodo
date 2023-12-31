import {Text, TouchableOpacity, View} from 'react-native';
import React, {FC} from 'react';
import {TaskItemProps} from '../../interfaces';
import styles from '../../styles';
import {format} from 'date-fns';

const TaskItem: FC<TaskItemProps> = ({item, markDone, deleteFunction}) => {
  const formattedDate = format(item.date, 'dd/MM/yyyy');

  return (
    <View style={styles.itemContainer}>
      <View style={styles.leftcontainer}>
        <TouchableOpacity onPress={() => markDone(item)}>
          <Text style={item.done ? styles.textDone : styles.text}>
            {item.title}
          </Text>
          <Text style={styles.text}>{formattedDate}</Text>
        </TouchableOpacity>
      </View>
      {item.done && (
        <TouchableOpacity
          style={styles.removebutton}
          onPress={() => deleteFunction(item)}>
          <Text style={styles.whiteText}>Eliminar</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default TaskItem;
