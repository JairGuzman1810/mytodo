import {StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import {TaskItemProps} from '../interfaces';

const TaskItem: FC<TaskItemProps> = ({item}) => {
  return (
    <View style={styles.itemContainer}>
      <Text>{item.title}</Text>
    </View>
  );
};

export default TaskItem;

const styles = StyleSheet.create({
  itemContainer: {
    paddingVertical: 20,
    borderBottomColor: '#6f6f6f',
    borderBottomWidth: 1,
  },
});
