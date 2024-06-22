import { render, screen } from '@testing-library/react';
import TodoApp from '../../src/04-useReducer/TodoApp';
import useTodo from '../../src/hooks/useTodo';

jest.mock('../../src/hooks/useTodo');
const mockedUseTodo = useTodo as jest.MockedFunction<typeof useTodo>;

describe('Pruebas en <TodoApp/>', () => {
  mockedUseTodo.mockReturnValue({
    todos: [{ id: '1', desc: 'Todo #1', done: false }],
    hadleNewTodo: jest.fn(),
    handleDeleteTodo: jest.fn(),
    handleToogleTodo: jest.fn(),
  });
  test('Debe de mosrar el component correctamente', () => {
    render(<TodoApp />);

    expect(screen.getByText('Todo #1')).toBeTruthy();
    expect(screen.getByRole('textbox')).toBeTruthy();
  });
});
