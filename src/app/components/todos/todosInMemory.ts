import { TodoInterface } from 'src/app/types/todo.interface';

export const todosInMemory: TodoInterface[] = [
  {
    id: Math.random().toString().slice(2),
    text: 'learn angular',
    isCompleted: true,
  },
  {
    id: Math.random().toString().slice(2),
    text: 'learn c#',
    isCompleted: false,
  },
  {
    id: Math.random().toString().slice(2),
    text: 'Learn docker',
    isCompleted: true,
  },
];
