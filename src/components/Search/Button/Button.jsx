import React from 'react';
import styled from 'styled-components';
import Octicon, { Search } from '@primer/octicons-react';

export const StyledButton = styled.button`
  background-color: #24292e;
  border: ${props => props.insideNavbar ? 'none' : '.1px solid white'};
  border-radius: 2.5px;
  height: 36px;
  width: 36px;
  svg {
    color: white;
  }
`;

const Button = () => {
  return (
    <StyledButton>
      <Octicon icon={Search} size='small' />
    </StyledButton>
  );
};

Button.displayName = 'Button';

export default Button;
