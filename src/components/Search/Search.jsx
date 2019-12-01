import React from 'react';
import styled from 'styled-components';

import Input from './Input';
import Button from './Button';

export const StyledSearch = styled.form`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const Search = ({ children, onSubmit }) => {
  return (
    <StyledSearch onSubmit={onSubmit}>
      {children}
    </StyledSearch>
  );
};

Search.Input = Input;
Search.Button = Button;

Search.displayName = 'Search';

export default Search;
