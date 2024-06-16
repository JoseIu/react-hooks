import { Task } from '../interfaces/todoApp.interface';

type TodoItemProps = {
  todo: Task;

  onDeleteTodo: (id: string) => void;
  ontToogleTodo: (id: string) => void;
};
const TodoItem = ({ todo, onDeleteTodo, ontToogleTodo }: TodoItemProps) => {
  const { id, desc, done } = todo;
  const todoClass = done ? 'done' : '';
  return (
    <li className="todos__task">
      <span className={`todos__text ${todoClass}`} onClick={() => ontToogleTodo(id)}>
        {desc}
      </span>
      <button className="todos__btn" onClick={() => onDeleteTodo(id)}>
        delete
      </button>
    </li>
  );
};

export default TodoItem;
