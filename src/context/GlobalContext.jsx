import React from 'react';
import { UserStorage } from './UserContext';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';

const globalContext = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
        <UserStorage>
          {children}
      </UserStorage>
    </ThemeProvider>
  )
};

export default globalContext;
