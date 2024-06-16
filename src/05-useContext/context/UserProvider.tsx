import { ReactNode } from 'react';
import { User, UserContext } from './UserContext';

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const user: User = {
    id: 'ABC123',
    name: 'Fernando',
    email: 'fernando@fernando.com',
  };
  return <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>;
};
