import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <HeaderWrapper>
      <Logo>Leadz</Logo>
      <NavWrapper>
        <NavItem>
          <a>Home</a>
        </NavItem>
        <NavItem>
          <a>Leads</a>
        </NavItem>
        <NavItem>
          <a>Log in</a>
        </NavItem>
        <NavItem>
          <a>Sign up</a>
        </NavItem>
      </NavWrapper>
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.h1``;

const NavWrapper = styled.ul`
  display: flex;
  list-style-type: none;
  justify-content: space-between;
  width: 20rem;
`;

const NavItem = styled.li``;
