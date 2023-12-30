import {Task} from '../types';

export interface TaskItemProps {
  item: {
    title: string;
    done: boolean;
    date: string;
    // Agrega cualquier otra propiedad necesaria aquí
  };
  markDone: (task: Task) => void;
  deleteFunction: (task: Task) => void;
}
