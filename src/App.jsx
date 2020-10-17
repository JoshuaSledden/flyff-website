import React from 'react';
import { ThemeProvider } from 'styled-components';
import './App.css';
import { useSelector } from 'react-redux';

const theme = useSelector(state => state.theme);

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <p>Hello, World!</p>
    </ThemeProvider>
  );
};

export default App;
