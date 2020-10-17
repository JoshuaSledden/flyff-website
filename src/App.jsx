import React from 'react';
import { ThemeProvider } from 'styled-components';
import { useSelector } from 'react-redux';

const App = () => {
  const { theme } = useSelector(state => state.themeReducer);
  return (
    <ThemeProvider theme={theme}>
      <p>Hello, World!</p>
    </ThemeProvider>
  );
};

export default App;
