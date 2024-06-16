import { createContext } from 'react';
export interface User {
  id: string;
  name: string;
  email: string;
}

type UserContextType = {
  user: User;
};

export const UserContext = createContext<UserContextType>({} as UserContextType);
