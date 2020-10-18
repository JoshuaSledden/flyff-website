import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { useSelector } from 'react-redux';
import Routes from './routes';
import NavigationBar from './components/navigation-bar';
import BackgroundImage from './components/images/placeholder.jpg';

const Background = styled.div`
  position: fixed;
  background-image: url(${BackgroundImage});
  background-repeat: no-repeat;
  height: 100vh;
  width: 100%;
  z-index: -1;
`;

const App = () => {
  const { theme } = useSelector(state => state.themeReducer);
  return (
    <ThemeProvider theme={theme}>
      <Background />
      <NavigationBar />
      <Routes />
    </ThemeProvider>
  );
};

export default App;
