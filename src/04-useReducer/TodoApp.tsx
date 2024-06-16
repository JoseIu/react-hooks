import useTodo from '../hooks/useTodo';
import TodoAdd from './TodoAdd';
import TodoList from './TodoList';
import './todo.css';

const TodoApp = () => {
  const { todos, hadleNewTodo, handleDeleteTodo, handleToogleTodo } = useTodo();
  const pendingTasks = todos.filter((todo) => !todo.done).length;
  return (
    <main className="wrapper">
      <h1 className="title">
        <span> TodoApp: {todos.length} </span>
        <span>Pendientes: {pendingTasks}</span>
      </h1>
      <TodoAdd onNewTodo={hadleNewTodo} />

      <TodoList todos={todos} onDeleteTodo={handleDeleteTodo} ontToogleTodo={handleToogleTodo} />
    </main>
  );
};

export default TodoApp;
