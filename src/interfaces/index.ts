import {Task} from '../types';

export interface TaskItemProps {
  item: {
    title: string;
    done: boolean;
    date: Date;
    // Agrega cualquier otra propiedad necesaria aquí
  };
  markDone: (task: Task) => void;
  deleteFunction: () => void;
}
