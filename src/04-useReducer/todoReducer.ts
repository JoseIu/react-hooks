import { Task } from '../interfaces/todoApp.interface';

export type TodoAppState = Task[];
export type TodoAppAction =
  | { type: 'add'; payload: Task }
  | { type: 'delete'; payload: string }
  | { type: 'toogle'; payload: string };

export const todoReducer = (initialState: TodoAppState, action: TodoAppAction) => {
  switch (action.type) {
    case 'add':
      return [...initialState, action.payload];

    case 'delete':
      return initialState.filter((todo) => todo.id !== action.payload);

    case 'toogle':
      return initialState.map((todo) => (todo.id === action.payload ? { ...todo, done: !todo.done } : todo));
    default:
      return initialState;
  }
};
