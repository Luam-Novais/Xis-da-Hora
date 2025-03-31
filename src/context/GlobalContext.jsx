import React from 'react';
import { UserStorage } from './UserContext';

const globalContext = ({ children }) => {
  return (
    
        <UserStorage>
          {children}
      </UserStorage>
  )
};

export default globalContext;
