import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {FC} from 'react';
import {TaskItemProps} from '../interfaces';

const TaskItem: FC<TaskItemProps> = ({item}) => {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.leftcontainer}>
        <TouchableOpacity>
          <Text style={item.done ? styles.textDone : styles.text}>
            {item.title}
          </Text>
          <Text style={styles.text}>{item.date.toLocaleDateString()}</Text>
        </TouchableOpacity>
      </View>
      {item.done && (
        <TouchableOpacity style={styles.removebutton}>
          <Text style={styles.whiteText}>Eliminar</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default TaskItem;

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    paddingVertical: 20,
    borderBottomColor: '#6f6f6f',
    borderBottomWidth: 1,
  },
  text: {
    fontSize: 14,
    color: '#6f6f6f',
  },
  whiteText: {
    fontSize: 14,
    color: '#ffff',
  },
  textDone: {
    fontSize: 14,
    color: '#6f6f6f',
    textDecorationLine: 'line-through',
  },
  removebutton: {
    backgroundColor: '#f33d3d',
    paddingHorizontal: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginLeft: 20,
  },
  leftcontainer: {
    flex: 1,
  },
});
