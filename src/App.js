import React, { Fragment } from 'react';
import GlobalStyle from './helpers/GlobalStyle';
import Home from './pages/home.jsx';

const App = () => (
  <Fragment>
    <GlobalStyle />
    <Home />
  </Fragment>
);

export default App;