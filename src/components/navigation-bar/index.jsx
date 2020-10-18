import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { replace } from 'connected-react-router';
import styled from 'styled-components';
import logo from '../images/logos/logo.svg';
import AccountIcon from '../images/icons/account-icon';

const Container = styled.div`
  width: 100%;
  align-items: center;
  display: flex;
  flex-wrap: nowrap;
  top: 0;
  background-color: black;
  opacity: 0.7;
`;

const Logo = styled.img`
  cursor: pointer;
  margin-left: 3rem;
  width: 4.5rem;
`;

const AccountContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-right: 2rem;
  margin-left: auto;
  cursor: pointer;
  width: 2.5rem;
`;

const List = styled.ul`
  list-style-type: none;
  margin-top: 0;
`;

const ListItem = styled.li`
  position: relative;
  cursor: pointer;
  float: left;
  padding: 0 2rem 0 0rem;
  margin-top: 6px;

  &.selected {
    border-top: 6px solid ${props => props.theme.colors.branding.primary};
    margin-top: 0;
  }
`;

const ListItemText = styled.p`
  user-select: none;
  margin-left: 0.5rem;
  text-align: left;
  font-family: ${props => props.theme.fonts.normal};
  line-height: 1px;
  font-size: large;
  color: ${props => props.theme.colors.branding.tertiary};

  ${ListItem}:hover & {
    color: ${props => props.theme.colors.branding.primary};
  }

  ${ListItem}.selected & {
    color: ${props => props.theme.colors.branding.secondary};
  }

  &.description {
    font-size: x-small;
  }
`;

const NavigationBar = () => {
  const dispatch = useDispatch();
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onClickHandle = (route, key) => {
    dispatch(replace(route));
    setSelectedIndex(key);
  };

  const menuItems = [
    { name: 'Home', description: 'welcome', route: './' },
    { name: 'Download', description: 'play flyff', route: './download' },
    { name: 'Blog', description: 'latest news', route: './blog' },
    { name: 'Features', description: 'about us', route: './features' }
  ];

  return (
    <>
      <Container>
        <Logo src={logo} onClick={() => onClickHandle('./')} />
        <List>
          {menuItems.map((item, index) => (
            <ListItem
              onClick={() => onClickHandle(item.route, index)}
              className={index === selectedIndex ? 'selected' : ''}
            >
              <ListItemText>{item.name}</ListItemText>
              <ListItemText className="description">
                {item.description}
              </ListItemText>
            </ListItem>
          ))}
        </List>
        <AccountContainer>
          <AccountIcon />
        </AccountContainer>
      </Container>
    </>
  );
};

export default NavigationBar;
