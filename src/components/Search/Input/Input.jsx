import React, { forwardRef } from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  background-color: #fff;
  border: ${props => props.insideNavbar ? '1px solid white' : '1px solid #24292e'};
  border-radius: 2.5px;
  box-shadow: ${props => props.insideNavbar ? '1px .5px #ccc' : 'unset'};
  height: 35px;
  margin-right: 2.5px;
  padding: 10px;
  width: 225px;
`;

const Input = forwardRef((props, ref) => {
  return <StyledInput 
    ref={ref} 
    placeholder='@username'
    />;
});

Input.displayName = 'Input';

export default Input;
