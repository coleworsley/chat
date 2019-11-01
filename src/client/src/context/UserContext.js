import { createContext } from 'react';

export const user = JSON.parse(localStorage.getItem('user')) || {
  name: `RandomUser${Date.now()}`
};

export const UserContext = createContext(user);
