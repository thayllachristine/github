import React from 'react';
import styled from 'styled-components';
import logo from './logo.svg';

const StyledNav = styled.nav`
  align-items: center;
  background-color: #24292e;
  display: flex;
  padding: 10px 15px;
`;

const StyledLogo = styled.img`
  margin: 0 7.5px;
  width: 30px;
`;

const Navbar = ({ className }) => (
  <StyledNav className={className}>
    <StyledLogo
      src={logo}
      alt='GitHub icon'
    />
  </StyledNav>
);

export default Navbar;