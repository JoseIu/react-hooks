import { Task } from '../interfaces/todoApp.interface';
import TodoItem from './TodoItem';

type TodoListProps = {
  todos: Task[];
  onDeleteTodo: (id: string) => void;
  ontToogleTodo: (id: string) => void;
};
const TodoList = ({ todos, onDeleteTodo, ontToogleTodo }: TodoListProps) => {
  return (
    <ul className="todos">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onDeleteTodo={onDeleteTodo} ontToogleTodo={ontToogleTodo} />
      ))}
    </ul>
  );
};

export default TodoList;
