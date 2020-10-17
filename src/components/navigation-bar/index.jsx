import React from 'react';
import { useDispatch } from 'react-redux';
import { replace } from 'connected-react-router';
import styled from 'styled-components';
import logo from '../images/logos/logo.svg';
import burgerMenu from '../images/icons/burger-menu.svg';
import accountMenu from '../images/icons/account-menu.svg';

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: nowrap;
  position: fixed;
  top: 0;
  width: 100%;
  background-color: black;
  opacity: 0.65;
  padding: 0.25rem 1rem 0.25rem 1rem;
`;

const LogoContainer = styled.div`
  cursor: pointer;
  margin-right: 1rem;
`;

const Logo = styled.img`
  width: 5rem;
`;

const MenuContainer = styled.img`
  display: flex;
  justify-content: flex-start;
  padding-right: 2rem;
  margin-right: auto;
  cursor: pointer;
  width: 2rem;
`;

const AccountContainer = styled.img`
  display: flex;
  justify-content: flex-end;
  padding-right: 2rem;
  margin-left: auto;
  cursor: pointer;
  width: 2.5rem;
`;

const NavigationBar = () => {
  const dispatch = useDispatch();

  const onClickHandle = clickType => {
    switch (clickType) {
      case 'LOGO': {
        dispatch(replace('./'));
        break;
      }
      default:
        dispatch({ type: clickType });
        break;
    }
  };

  return (
    <>
      <Container>
        <MenuContainer
          onClick={() => onClickHandle('TOGGLE_MENU_PANE')}
          src={burgerMenu}
        />
        <LogoContainer>
          <Logo src={logo} onClick={() => onClickHandle('LOGO')} />
        </LogoContainer>
        <AccountContainer
          onClick={() => onClickHandle('TOGGLE_ACCOUNT_PANE')}
          src={accountMenu}
        />
      </Container>
    </>
  );
};

export default NavigationBar;
