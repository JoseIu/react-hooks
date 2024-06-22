import { render, screen } from '@testing-library/react';
import { UserContext } from '../../../src/05-useContext/context/UserContext';
import { HomePage } from '../../../src/05-useContext/pages';

describe('Pruebas en <HomePage/> useContext', () => {
  test('Debe de mostrar el componente si n el usuario', () => {
    render(
      <UserContext.Provider
        value={{
          user: {
            id: 'ABC123',
            name: 'Fernando',
            email: 'fernando@fernando.com',
          },
        }}
      >
        <HomePage />
      </UserContext.Provider>
    );
    const spanElement = screen.getByLabelText('user');

    expect(spanElement.innerHTML).toBe('Fernando ');
  });
});
