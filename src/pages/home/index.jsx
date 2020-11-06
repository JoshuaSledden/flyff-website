import React from 'react';
import styled from 'styled-components';
import Banner from '../../components/banner';

const ContentContainer = styled.div`
  background-color: ${props => props.theme.colors.background.primary};
  position: relative;
  top: -20em;
  width: 100%;
  min-height: 50vh;
`;

const Home = () => {
  return (
    <>
      <Banner />
      <ContentContainer />
    </>
  );
};

export default Home;
