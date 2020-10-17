import React from 'react';
import { ThemeProvider } from 'styled-components';
import { useSelector } from 'react-redux';
import NavigationBar from './components/navigation-bar';

const App = () => {
  const { theme } = useSelector(state => state.themeReducer);
  return (
    <ThemeProvider theme={theme}>
      <NavigationBar />
    </ThemeProvider>
  );
};

export default App;
