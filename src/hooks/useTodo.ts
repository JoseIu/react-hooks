import { useEffect, useReducer } from 'react';
import { TodoAppState, todoReducer } from '../04-useReducer/todoReducer';
import { Task } from '../interfaces/todoApp.interface';
const initialState: TodoAppState = [];
const init = () => {
  return JSON.parse(localStorage.getItem('todos')!) || [];
};

const useTodo = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialState, init);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const hadleNewTodo = (newTodo: Task) => {
    dispatch({ type: 'add', payload: newTodo });
  };

  const handleDeleteTodo = (id: string) => {
    dispatch({ type: 'delete', payload: id });
  };
  const handleToogleTodo = (id: string) => {
    dispatch({ type: 'toogle', payload: id });
  };
  return { todos, hadleNewTodo, handleDeleteTodo, handleToogleTodo };
};

export default useTodo;
