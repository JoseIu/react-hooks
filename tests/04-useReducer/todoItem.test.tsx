import { fireEvent, render, screen } from '@testing-library/react';
import TodoItem from '../../src/04-useReducer/TodoItem';
import { Task } from '../../src/interfaces/todoApp.interface';

describe('Pruebas en <TodoItem/> ', () => {
  const todo: Task = {
    id: '1',
    desc: 'Aprender React',
    done: false,
  };
  const onDeleteTodoMock = jest.fn();
  const ontToogleTodoMock = jest.fn();

  beforeEach(() => jest.clearAllMocks());

  test('Debe de mostrar el Todo Pendiente a completar', () => {
    render(<TodoItem todo={todo} onDeleteTodo={onDeleteTodoMock} ontToogleTodo={ontToogleTodoMock} />);

    const liElement = screen.getByRole('listitem');

    expect(liElement.className).toBe('todos__task');

    const spanElement = screen.getByLabelText('toogle-todo');

    //Verificamos la clase del span
    expect(spanElement.className).toContain('todos__text');
    expect(spanElement.className).not.toContain('done');
  });
  test('Debe de mostrar el Todo Completado', () => {
    todo.done = true;
    render(<TodoItem todo={todo} onDeleteTodo={onDeleteTodoMock} ontToogleTodo={ontToogleTodoMock} />);

    const liElement = screen.getByRole('listitem');

    expect(liElement.className).toBe('todos__task');

    const spanElement = screen.getByLabelText('toogle-todo');

    //Verificamos la clase del span
    expect(spanElement.className).toContain('todos__text');
    expect(spanElement.className).toContain('done');
  });

  test('Debe de llar al onToggleTodo', () => {
    render(<TodoItem todo={todo} onDeleteTodo={onDeleteTodoMock} ontToogleTodo={ontToogleTodoMock} />);

    const spanElement = screen.getByLabelText('toogle-todo');

    fireEvent.click(spanElement);

    expect(ontToogleTodoMock).toHaveBeenCalledWith(todo.id);
  });
  test('Debe de llar al onDeleteTodo', () => {
    render(<TodoItem todo={todo} onDeleteTodo={onDeleteTodoMock} ontToogleTodo={ontToogleTodoMock} />);

    const spanElement = screen.getByLabelText('toggle-delete');

    fireEvent.click(spanElement);

    expect(onDeleteTodoMock).toHaveBeenCalledWith(todo.id);
  });
});
