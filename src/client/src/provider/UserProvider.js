import React, { useState } from 'react';
import { UserContext, user } from '../context';

export const UserProvider = (props) => {
  return (
    <UserContext.Provider value={useState(user)}>
      {props.children}
    </UserContext.Provider>
  );
}
