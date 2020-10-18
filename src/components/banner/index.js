import React from 'react';
import styled from 'styled-components';
import KnightImage from '../images/art/knight.png';

const Container = styled.div`
  overflow: hidden;
  display: flex;
  position: relative;
  width: 100%;
  height: 100vh;
`;

const CharacterImage = styled.div`
  position: absolute;
  @keyframes load {
    0% {
      opacity: 0;
      left: 50vw;
    }
    50% {
      opacity: 1;
      left: calc(1.5rem - 10vw);
    }
    100% {
      opacity: 1;
      left: calc(1.5rem - 5vw);
    }
  }

  left: calc(1.5rem - 5vw);
  height: inherit;
  width: inherit;
  background-image: url(${KnightImage});
  background-repeat: no-repeat;

  animation-name: load;
  animation-duration: 2s;

  ${props => props.theme.resolutions.small} {
    background-position: right 0.5rem top 1rem;
    background-size: 15rem;
  }

  ${props => props.theme.resolutions.medium} {
    background-position: right 2.5rem top 2.5rem;
    background-size: 25rem;
  }

  ${props => props.theme.resolutions.large} {
    background-position: right 5rem top 1rem;
    background-size: 40rem;
  }
`;

const ContentContainer = styled.div`
  position: absolute;
  @keyframes loadContent {
    0% {
      opacity: 0;
      top: -20vh;
    }
    50% {
      opacity: 0.65;
      top: 20vh;
    }
    100% {
      opacity: 0.65;
      top: 12vh;
    }
  }

  background-color: black;
  opacity: 0.65;
  border: 1px solid ${props => props.theme.colors.branding.tertiary};

  animation-name: loadContent;
  animation-duration: 2.5s;

  ${props => props.theme.resolutions.small} {
    height: 150px;
    width: 200px;
    left: calc(1.5rem + 5vw);
    top: 12vh;
  }

  ${props => props.theme.resolutions.medium} {
    height: 300px;
    width: 450px;
    left: calc(1.5rem + 5vw);
    top: 12vh;
  }

  ${props => props.theme.resolutions.large} {
    height: 300px;
    width: 650px;
    left: calc(1.5rem + 5vw);
    top: 12vh;
  }
`;

const Banner = () => {
  return (
    <>
      <Container>
        <CharacterImage />
        <ContentContainer />
      </Container>
    </>
  );
};

export default Banner;
