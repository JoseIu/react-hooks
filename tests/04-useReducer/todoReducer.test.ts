import { TodoAppAction, todoReducer } from '../../src/04-useReducer/todoReducer';
import { Task } from '../../src/interfaces/todoApp.interface';

describe('Pruebas en todoReducer', () => {
  const initialState: Task[] = [
    {
      id: '1',
      desc: 'Aprender React',
      done: false,
    },
  ];

  test('Debe de retornar el estado por defecto', () => {
    const action = { type: 'ACCION_DESCONOCIDA' };

    const newState = todoReducer(initialState, action as TodoAppAction);

    expect(newState).toBe(initialState);
  });

  test('Debe de agregar un TODO', () => {
    const action: TodoAppAction = {
      type: 'add',
      payload: {
        id: '2',
        desc: 'Aprender Angular',
        done: false,
      },
    };

    const newState = todoReducer(initialState, action);

    expect(newState.length).toBe(2);
    expect(newState).toContain(action.payload);
  });

  test('Debe de borrar un TODO', () => {
    const action: TodoAppAction = {
      type: 'delete',
      payload: initialState[0].id,
    };

    const newState = todoReducer(initialState, action);

    expect(newState.length).toBe(0);
  });

  test('Debe de hacer el TOGGLE del TODO', () => {
    const action: TodoAppAction = {
      type: 'toogle',
      payload: initialState[0].id,
    };

    const newState = todoReducer(initialState, action);

    expect(newState[0].done).toBe(true);
  });
});
