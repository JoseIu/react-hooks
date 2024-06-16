import { useForm } from '../hooks/useForm';
import { Task } from '../interfaces/todoApp.interface';
type TodoForm = {
  task: string;
};
type TodoAddProps = {
  onNewTodo: (newTodo: Task) => void;
};

const TodoAdd = ({ onNewTodo }: TodoAddProps) => {
  const { formState, onInputChange } = useForm<TodoForm>({ task: '' });
  const handeSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newTodo: Task = {
      id: crypto.randomUUID(),
      desc: formState.task,
      done: false,
    };
    onNewTodo(newTodo);
  };
  return (
    <form className="form" onSubmit={handeSubmit}>
      <input
        className="form__input"
        type="text"
        name="task"
        id="task"
        value={formState.task}
        onChange={onInputChange}
      />
      <button className="form__btn" type="submit">
        Add
      </button>
    </form>
  );
};

export default TodoAdd;
